#!/usr/bin/env node

import { Command } from 'commander'
import path from 'path'
import packageJson from '../package.json'
import { deployHandler } from './cli/deploy'
import { packHandler } from './cli/pack'
import { wrapProcess } from './utils'
import {
	DEFAULT_TIMEOUT as IMAGE_LAMBDA_DEFAULT_TIMEOUT,
	DEFAULT_MEMORY as IMAGE_LAMBDA_DEFAULT_MEMORY,
} from './cdk/utils/imageLambda'

const commandCwd = process.cwd()
const program = new Command()

program
	//
	.name(packageJson.name)
	.description(packageJson.description)
	.version(packageJson.version)

program
	.command('pack')
	.description('Package standalone Next12 build into Lambda compatible ZIPs.')
	.option(
		'--standaloneFolder <path>',
		'Folder including NextJS standalone build. Parental folder should include more folders as well.',
		path.resolve(commandCwd, '.next/standalone'),
	)
	.option(
		'--publicFolder <path>',
		'Folder where public assets are located, typically this folder is located in root of the project.',
		path.resolve(commandCwd, './public'),
	)
	.option(
		'--handlerPath <path>',
		'Path to custom handler to be used to handle ApiGw events. By default this is provided for you.',
		path.resolve(path.dirname(__filename), './server-handler/index.js'),
	)
	.option(
		'--outputFolder <path>',
		'Path to folder which should be used for outputting bundled ZIP files for your Lambda. It will be cleared before every script run.',
		path.resolve(commandCwd, './next.out'),
	)
	.action(async (options) => {
		console.log('Our config is: ', options)
		const { standaloneFolder, publicFolder, handlerPath, outputFolder } = options
		wrapProcess(packHandler({ commandCwd, handlerPath, outputFolder, publicFolder, standaloneFolder }))
	})

program
	.command('deploy')
	.description('Deploy Next application via CDK')
	.option('--stackName <name>', 'Name of the stack to be deployed.', 'StandaloneNextjsStack-Temporary')
	.option('--appPath <path>', 'Absolute path to app.', path.resolve(__dirname, '../dist/cdk/app.js'))
	.option('--bootstrap', 'Bootstrap CDK stack.', false)
	.option('--lambdaTimeout <sec>', 'Set timeout for lambda function handling server requests.', Number, 15)
	.option('--lambdaMemory <mb>', 'Set memory for lambda function handling server requests.', Number, 512)
	.option('--imageLambdaTimeout <sec>', 'Set timeout for lambda function handling image optimization.', Number, IMAGE_LAMBDA_DEFAULT_TIMEOUT)
	.option('--imageLambdaMemory <mb>', 'Set memory for lambda function handling image optimization.', Number, IMAGE_LAMBDA_DEFAULT_MEMORY)
	.option('--hostedZone <domainName>', 'Hosted zone domain name to be used for creating DNS records (example: example.com).', undefined)
	.option('--domainNamePrefix <prefix>', 'Prefix for creating DNS records, if left undefined, hostedZone will be used (example: app).', undefined)
	.option('--customApiDomain <domain>', 'Domain to forward the requests to /api routes, if left undefined, API routes will be handled by the server lambda.', undefined)
	.action(async (options) => {
		console.log('Our config is: ', options)
		const { stackName, appPath, bootstrap, lambdaTimeout, lambdaMemory, imageLambdaMemory, imageLambdaTimeout, hostedZone, domainNamePrefix, customApiDomain } = options
		wrapProcess(deployHandler({ stackName, appPath, bootstrap, lambdaTimeout, lambdaMemory, imageLambdaMemory, imageLambdaTimeout, hostedZone, domainNamePrefix, customApiDomain }))
	})

program.parse(process.argv)

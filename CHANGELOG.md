# Changelog
Current version: 3.16.0


## [v3.16.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.15.0...v3.16.0)

* feat(changelog): new cli option introduced, changelog generation implemented into pipeline #32 [[7423f62a908d2c27fdba40ec5a709cfbacada89b](https://github.com/sladg/nextjs-lambda/commit/7423f62a908d2c27fdba40ec5a709cfbacada89b)]


## [v3.15.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.14.0...v3.15.0)

* feat(cdk): bootstrap option added for deployments [[4fe52f49df466f52c92aa5a90b5c96bdbe0d3523](https://github.com/sladg/nextjs-lambda/commit/4fe52f49df466f52c92aa5a90b5c96bdbe0d3523)]


## [v3.14.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.13.3...v3.14.0)

* ref(cdk): removed unnecessary symlinks, improved naming, cleaned dependencies [[a61854e06e0ed6a3336a33e9eac767f227a65902](https://github.com/sladg/nextjs-lambda/commit/a61854e06e0ed6a3336a33e9eac767f227a65902)]


## [v3.13.3](https://github.com/sladg/nextjs-lambda/releases/tag/v3.13.1...v3.13.3)

* fix(cdk): host removed so ApiGw does not fail due to client host header [[e273c39d7913186187380c89d4739d4526b09b8f](https://github.com/sladg/nextjs-lambda/commit/e273c39d7913186187380c89d4739d4526b09b8f)]
* fix(cdk): host removed so ApiGw does not fail due to client host header [[a628fc8286621d4f14aa30dc17b0a75904b03150](https://github.com/sladg/nextjs-lambda/commit/a628fc8286621d4f14aa30dc17b0a75904b03150)]


## [v3.13.1](https://github.com/sladg/nextjs-lambda/releases/tag/v3.13.0...v3.13.1)

* fix(cdk): host removed so ApiGw does not fail due to client host header [[a628fc8286621d4f14aa30dc17b0a75904b03150](https://github.com/sladg/nextjs-lambda/commit/a628fc8286621d4f14aa30dc17b0a75904b03150)]


## [v3.13.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.12.0...v3.13.0)

* feat(cdk): allow to pass env vars to lambda, added headers forwarding to cloudfront, readme updated [[a85085d6968726dcea70def9ded4eb5f378d824a](https://github.com/sladg/nextjs-lambda/commit/a85085d6968726dcea70def9ded4eb5f378d824a)]


## [v3.12.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.11.1...v3.12.0)

* ref(cdk): transpiling of CDK implemented [[8c03f0ddd8e8ed71ca817a308826a1bf7bc843b9](https://github.com/sladg/nextjs-lambda/commit/8c03f0ddd8e8ed71ca817a308826a1bf7bc843b9)]


## [v3.11.1](https://github.com/sladg/nextjs-lambda/releases/tag/v3.11.0...v3.11.1)

* fix(cdk): fixed missing ts-node when running in pipeline [[d45e5d3c141e0fb5264c14585c3e9a4806c4b7c3](https://github.com/sladg/nextjs-lambda/commit/d45e5d3c141e0fb5264c14585c3e9a4806c4b7c3)]


## [v3.11.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.10.0...v3.11.0)

* feat(monorepo): added support for monorepo and automatic nested output search, minor improvements #38 #39 [[7d913b01cac581874d7d6c7758ab72ad105bf802](https://github.com/sladg/nextjs-lambda/commit/7d913b01cac581874d7d6c7758ab72ad105bf802)]


## [v3.10.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.9.0...v3.10.0)

* ref(sharp): remove sharp for now in favor of simplicity, todo added to return later [[b982a0dc282f23f79b9391a7425b26ed1c8abb5e](https://github.com/sladg/nextjs-lambda/commit/b982a0dc282f23f79b9391a7425b26ed1c8abb5e)]


## [v3.9.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.9...v3.9.0)

* ref(cdk, images): cdk simplified to single APIGW, image handler bundling fixed and simplified to not include layers [[f0beeec5d2ee625b337b3e16eeb0dfa4cd81ea0a](https://github.com/sladg/nextjs-lambda/commit/f0beeec5d2ee625b337b3e16eeb0dfa4cd81ea0a)]


## [v3.8.9](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.8...v3.8.9)

* Add support for basePath variable (#44) [[9053b450b4c6b11656b1f70ddb8353d5cbc327a3](https://github.com/sladg/nextjs-lambda/commit/9053b450b4c6b11656b1f70ddb8353d5cbc327a3)]


## [v3.8.8](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.7...v3.8.8)

* doc(readme): updated readme, restructured, clearly communicated project state [[898cdf0e787a30de603e0a872096c11831d359b9](https://github.com/sladg/nextjs-lambda/commit/898cdf0e787a30de603e0a872096c11831d359b9)]


## [v3.8.7](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.6...v3.8.7)

* fix(cdk): remove unncessary flag [[b905bf99f6b507dd24e0050fed163e104cf3c92f](https://github.com/sladg/nextjs-lambda/commit/b905bf99f6b507dd24e0050fed163e104cf3c92f)]


## [v3.8.6](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.5...v3.8.6)

* fix(cdk): approvals are not required for deployment as there is no way to pass them [[bf41f371c854211cdda6816f91e0c7b9958cbc3e](https://github.com/sladg/nextjs-lambda/commit/bf41f371c854211cdda6816f91e0c7b9958cbc3e)]


## [v3.8.5](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.4...v3.8.5)

* fix(cdk): construct to not cache dependency layer [[d7f05058370e02a584e67751a636d062797bfa11](https://github.com/sladg/nextjs-lambda/commit/d7f05058370e02a584e67751a636d062797bfa11)]


## [v3.8.4](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.3...v3.8.4)

* fix(cdk): do not specify root of types for better compatibility [[a818a1cce22ba89b462722af1b49d557945bc80e](https://github.com/sladg/nextjs-lambda/commit/a818a1cce22ba89b462722af1b49d557945bc80e)]


## [v3.8.3](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.2...v3.8.3)

* fix(cdk): minor improvements to layers and upgrades of aws packages [[1a68d0680accf7ec79d4c5bf3fae0be6a107a246](https://github.com/sladg/nextjs-lambda/commit/1a68d0680accf7ec79d4c5bf3fae0be6a107a246)]


## [v3.8.2](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.1...v3.8.2)

* fix(cdk): correct folder path for types [[4508c24b2c530c6ae20fd25b530a3019abfad8d9](https://github.com/sladg/nextjs-lambda/commit/4508c24b2c530c6ae20fd25b530a3019abfad8d9)]


## [v3.8.1](https://github.com/sladg/nextjs-lambda/releases/tag/v3.8.0...v3.8.1)

* fix(swc): do not use swc on ts-node, historical typo fix [[970f22938aae4ecbb398813d501b02d04fef9031](https://github.com/sladg/nextjs-lambda/commit/970f22938aae4ecbb398813d501b02d04fef9031)]


## [v3.8.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.7.1...v3.8.0)

* ref(cdk): use layer description and custom hash to avoid re-uploads [[8458d703a4a1689c6c9561ce30d67a0027335012](https://github.com/sladg/nextjs-lambda/commit/8458d703a4a1689c6c9561ce30d67a0027335012)]


## [v3.7.1](https://github.com/sladg/nextjs-lambda/releases/tag/v3.7.0...v3.7.1)

* fix(cli): arguments to be correctly accepted as strings #33 [[8f0bd8bda0857d88e1551f7108200b7f11029ba3](https://github.com/sladg/nextjs-lambda/commit/8f0bd8bda0857d88e1551f7108200b7f11029ba3)]


## [v3.7.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.6.6...v3.7.0)

* ref(replacement): git version replacement include regex [[e37e5900a505d7a17243a8b15a2753de22cbc71b](https://github.com/sladg/nextjs-lambda/commit/e37e5900a505d7a17243a8b15a2753de22cbc71b)]


## [v3.6.6](https://github.com/sladg/nextjs-lambda/releases/tag/v3.6.5...v3.6.6)

* fix(versions): allow PHP composer.json to be nested [[e1c82891393268933b4e857d90bcfa6f32cc60b7](https://github.com/sladg/nextjs-lambda/commit/e1c82891393268933b4e857d90bcfa6f32cc60b7)]


## [v3.6.5](https://github.com/sladg/nextjs-lambda/releases/tag/v3.6.4...v3.6.5)

* fix(git): fetch tags to ensure up-to-date git [[3193d29de9e24d3fe77de0db6cafdaaa217fe380](https://github.com/sladg/nextjs-lambda/commit/3193d29de9e24d3fe77de0db6cafdaaa217fe380)]


## [v3.6.4](https://github.com/sladg/nextjs-lambda/releases/tag/v3.6.3...v3.6.4)

* fix(git): shipit to fetch sorted tags [[ff84cd4cd1b3d3dba4d16b12b2f8bd3cd22cae20](https://github.com/sladg/nextjs-lambda/commit/ff84cd4cd1b3d3dba4d16b12b2f8bd3cd22cae20)]


## [v3.6.3](https://github.com/sladg/nextjs-lambda/releases/tag/v3.6.2...v3.6.3)

* fix(npx): don't use swc transpiler [[475ed602d0712b35adf5309226b949a14a96a4f2](https://github.com/sladg/nextjs-lambda/commit/475ed602d0712b35adf5309226b949a14a96a4f2)]


## [v3.6.2](https://github.com/sladg/nextjs-lambda/releases/tag/v3.6.0...v3.6.2)

* docs: missing step added to avoid confustion [[42b93bb6b5b0730eeff94ade25786ed2e077aba9](https://github.com/sladg/nextjs-lambda/commit/42b93bb6b5b0730eeff94ade25786ed2e077aba9)]
* docs: missing step added to avoid confustion [[02d0d65c76bae24f9be6819d9b918656f60b82fd](https://github.com/sladg/nextjs-lambda/commit/02d0d65c76bae24f9be6819d9b918656f60b82fd)]


## [v3.6.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.5.2...v3.6.0)

* docs: updated documenation to include deploy command [[2ac3f3a6381562e41af2742f1374e392acad6d67](https://github.com/sladg/nextjs-lambda/commit/2ac3f3a6381562e41af2742f1374e392acad6d67)]


## [v3.5.2](https://github.com/sladg/nextjs-lambda/releases/tag/v3.5.1...v3.5.2)

* fix(dependency): include swc/core to support deploy command properly [[0707f0c3866c2ea30e92d09154fcb0ba7bf3df5f](https://github.com/sladg/nextjs-lambda/commit/0707f0c3866c2ea30e92d09154fcb0ba7bf3df5f)]


## [v3.5.1](https://github.com/sladg/nextjs-lambda/releases/tag/v3.5.0...v3.5.1)

* fix(cdk): include tsconfig.json in npm deployment [[488cfd1eec607498fe970e5a4f0164b81ec20807](https://github.com/sladg/nextjs-lambda/commit/488cfd1eec607498fe970e5a4f0164b81ec20807)]


## [v3.5.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.4.0...v3.5.0)

* feat(deployment): CLI command for deploying applications without the need to define own cdk [[909552fe3630847160ef506e65a0700d337409c1](https://github.com/sladg/nextjs-lambda/commit/909552fe3630847160ef506e65a0700d337409c1)]


## [v3.4.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.3.0...v3.4.0)

* docs: updated readme [[e058d253611558958d67b08b48809481c52c336f](https://github.com/sladg/nextjs-lambda/commit/e058d253611558958d67b08b48809481c52c336f)]


## [v3.3.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.2.6...v3.3.0)

* feat(next): upgraded to 12.3 version, fixed broken implementation, dependencies simplified [[c6402ed05309fc66e728d0ef585afd96bfe62878](https://github.com/sladg/nextjs-lambda/commit/c6402ed05309fc66e728d0ef585afd96bfe62878)]


## [v3.2.6](https://github.com/sladg/nextjs-lambda/releases/tag/v3.2.4...v3.2.6)

* fix(cdk,cli): correctly read git config, include BUILD_ID in assets, calculate zip hases ourselves [[7604d1d68688c8f5f8107544b3682ee54b4fed1b](https://github.com/sladg/nextjs-lambda/commit/7604d1d68688c8f5f8107544b3682ee54b4fed1b)]
* fix(dependencies): improved dependency list [[12193543b82574551ed5191a804e426e0cfd0042](https://github.com/sladg/nextjs-lambda/commit/12193543b82574551ed5191a804e426e0cfd0042)]


## [v3.2.4](https://github.com/sladg/nextjs-lambda/releases/tag/v3.2.3...v3.2.4)

* fix(cli): make it standalone so it's friendly with npx [[79730722c772e4913f4fb73778d08c6cc571da26](https://github.com/sladg/nextjs-lambda/commit/79730722c772e4913f4fb73778d08c6cc571da26)]


## [v3.2.3](https://github.com/sladg/nextjs-lambda/releases/tag/v3.2.2...v3.2.3)

* fix: minor git commit msg improvement [[029e1c855a3db1da4fbc653039a14ac9ee7641cd](https://github.com/sladg/nextjs-lambda/commit/029e1c855a3db1da4fbc653039a14ac9ee7641cd)]


## [v3.2.2](https://github.com/sladg/nextjs-lambda/releases/tag/v3.2.1...v3.2.2)

* fix: publishing, do not use custom script [[6de0b59d0e56e10893b0a23627643453462976ac](https://github.com/sladg/nextjs-lambda/commit/6de0b59d0e56e10893b0a23627643453462976ac)]


## [v3.2.1](https://github.com/sladg/nextjs-lambda/releases/tag/v3.2.0...v3.2.1)

* fix: versioning, sync version with npmjs [[3fe506a0eb9ce3e2f3d1287df15e98b0c8ff5b90](https://github.com/sladg/nextjs-lambda/commit/3fe506a0eb9ce3e2f3d1287df15e98b0c8ff5b90)]


## [v3.2.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.1.2...v3.2.0)

* fix(ci): use just master for publishing [[6384d9cf658c10b80f6cebe9ab0e9a2ea4624034](https://github.com/sladg/nextjs-lambda/commit/6384d9cf658c10b80f6cebe9ab0e9a2ea4624034)]
* ref(rollup): bundling redefined, correctly generate standalone (#29) [[d8e2475e1809f5c22077d624660e7f78f07dce4a](https://github.com/sladg/nextjs-lambda/commit/d8e2475e1809f5c22077d624660e7f78f07dce4a)]


## [v3.1.2](https://github.com/sladg/nextjs-lambda/releases/tag/v3.1.1...v3.1.2)

* fix: export configuration, nested paths (#27) [[1e152916102618265191863f1adb60137fdb03c8](https://github.com/sladg/nextjs-lambda/commit/1e152916102618265191863f1adb60137fdb03c8)]


## [v3.1.1](https://github.com/sladg/nextjs-lambda/releases/tag/v3.1.0...v3.1.1)

* fix(imports): define additional entry points for compatibility (#26) [[7d83ae9a7b97fbc3f4bf53ae51f487fa56403379](https://github.com/sladg/nextjs-lambda/commit/7d83ae9a7b97fbc3f4bf53ae51f487fa56403379)]


## [v3.1.0](https://github.com/sladg/nextjs-lambda/releases/tag/v3.0.0...v3.1.0)

* fix: cdk props redefined, simpler and easier config (#25) [[8105c7687e7a808b726340e8d39244707633cb10](https://github.com/sladg/nextjs-lambda/commit/8105c7687e7a808b726340e8d39244707633cb10)]


## [v3.0.0](https://github.com/sladg/nextjs-lambda/releases/tag/v2.0.0...v3.0.0)

* ref(app): bundling, cdk (#24) [[848c9995b40fc9bcf0a89a4730f6fbf2670942fb](https://github.com/sladg/nextjs-lambda/commit/848c9995b40fc9bcf0a89a4730f6fbf2670942fb)]


## [v2.0.0](https://github.com/sladg/nextjs-lambda/releases/tag/v1.1.5...v2.0.0)

* refactor: nextjs packaging, use npm packages to bundle instead of shell script, parameters added (#22) [[cadf0e8733e2d0cc9d3e7f435e78eac783d65476](https://github.com/sladg/nextjs-lambda/commit/cadf0e8733e2d0cc9d3e7f435e78eac783d65476)]


## [v1.1.5](https://github.com/sladg/nextjs-lambda/releases/tag/v1.1.4...v1.1.5)



## [v1.1.4](https://github.com/sladg/nextjs-lambda/releases/tag/v1.1.3...v1.1.4)

* fix: git command in shipit (#21) [[4b456f15fdf96e0cd80499b16c0379da79a3201f](https://github.com/sladg/nextjs-lambda/commit/4b456f15fdf96e0cd80499b16c0379da79a3201f)]


## [v1.1.3](https://github.com/sladg/nextjs-lambda/releases/tag/v1.1.2...v1.1.3)

* fix: git commands, correctly escape (#20) [[0860d90ba32a73ad5a0798d1c871896c3e18cb83](https://github.com/sladg/nextjs-lambda/commit/0860d90ba32a73ad5a0798d1c871896c3e18cb83)]


## [v1.1.2](https://github.com/sladg/nextjs-lambda/releases/tag/v1.1.1...v1.1.2)

* feat(git): properly handle commits and tagging (#19) [[c84725d0cae89c67a529d05447211a36c96ce074](https://github.com/sladg/nextjs-lambda/commit/c84725d0cae89c67a529d05447211a36c96ce074)]


## [v1.1.1](https://github.com/sladg/nextjs-lambda/releases/tag/v1.1.0...v1.1.1)

* fix(git): properly push and bump versions in git, arguments passed correctly (#18) [[ff6578ff0906e522cf946900b6f8a463103513bd](https://github.com/sladg/nextjs-lambda/commit/ff6578ff0906e522cf946900b6f8a463103513bd)]


## [v1.1.0](https://github.com/sladg/nextjs-lambda/releases/tag/v1.0.0...v1.1.0)

* feature(bumps): allow for cli to calculate and bump versions for projects, prettier config added (#17) [[24c0310608e62635b58d1e215e6b05b7901226a9](https://github.com/sladg/nextjs-lambda/commit/24c0310608e62635b58d1e215e6b05b7901226a9)]
* docs: readme improved (#16) [[7fbc629e3603ff92f57c2f12f8663496f360d9f4](https://github.com/sladg/nextjs-lambda/commit/7fbc629e3603ff92f57c2f12f8663496f360d9f4)]


## [v1.0.0](https://github.com/sladg/nextjs-lambda/releases/tag/v0.5.0...v1.0.0)

* refactor: CLI structure refactored, readme filled with CDK example (#15) [[a972b9ab0eb6c7ae0004661ffae7f8cd9b773f4b](https://github.com/sladg/nextjs-lambda/commit/a972b9ab0eb6c7ae0004661ffae7f8cd9b773f4b)]


## [v0.5.0](https://github.com/sladg/nextjs-lambda/releases/tag/v0.4.2...v0.5.0)

* fix: draft of PR checks for labels to ensure releases (#14) [[1353ec5248c08d982168396d9b56682aed889f9f](https://github.com/sladg/nextjs-lambda/commit/1353ec5248c08d982168396d9b56682aed889f9f)]
* refactor: released labels once PR is merged (#13) [[e188446941278fe6704462872f852856d0a0321a](https://github.com/sladg/nextjs-lambda/commit/e188446941278fe6704462872f852856d0a0321a)]
* doc: improved documentation for new parts, added todos (#12) [[0d8b8501d0dbc3109521d76df1eba4d33336693d](https://github.com/sladg/nextjs-lambda/commit/0d8b8501d0dbc3109521d76df1eba4d33336693d)]
* ref: allow for default handler use (#11) [[ee93b0305ecc05cd54d5af8a0f124bb4d2a2013f](https://github.com/sladg/nextjs-lambda/commit/ee93b0305ecc05cd54d5af8a0f124bb4d2a2013f)]


## [v0.4.2](https://github.com/sladg/nextjs-lambda/releases/tag/v0.4.1...v0.4.2)

* fix: cli, improved command support, correct resolution for files (#10) [[cc893fc7ab930d6a3efba82fa4a8aa0ace8193d9](https://github.com/sladg/nextjs-lambda/commit/cc893fc7ab930d6a3efba82fa4a8aa0ace8193d9)]


## [v0.4.1](https://github.com/sladg/nextjs-lambda/releases/tag/v0.4.0...v0.4.1)

* fix: scripts (#9) [[0275dc0ce7c81455b275b1a5fd26aec708f00649](https://github.com/sladg/nextjs-lambda/commit/0275dc0ce7c81455b275b1a5fd26aec708f00649)]


## [v0.4.0](https://github.com/sladg/nextjs-lambda/releases/tag/v0.3.0...v0.4.0)

* feat: server-handler and packaging for nextjs (#8) [[bbe5b69899b95c9fcdf1fd8afc2f7f9b4617bccc](https://github.com/sladg/nextjs-lambda/commit/bbe5b69899b95c9fcdf1fd8afc2f7f9b4617bccc)]


## [v0.3.0](https://github.com/sladg/nextjs-lambda/releases/tag/v0.2.0...v0.3.0)

* fix: fetch tags for release process (#7) [[456b6ea3e38b8d7610f8b829b578cc57527a55cc](https://github.com/sladg/nextjs-lambda/commit/456b6ea3e38b8d7610f8b829b578cc57527a55cc)]
* feat: repository and git config added (#6) [[7a83bed99ac5db6e278cfa5955fd1bc91b10251d](https://github.com/sladg/nextjs-lambda/commit/7a83bed99ac5db6e278cfa5955fd1bc91b10251d)]


## [v0.2.0](https://github.com/sladg/nextjs-lambda/releases/tag/v0.1.0...v0.2.0)



## [v0.1.0](https://github.com/sladg/nextjs-lambda/releases/tag/v0.1.0)

* doc(esm): improved documentation on esm module usage [[735d18d6ebc979c4ce06777502171e1922b1018f](https://github.com/sladg/nextjs-lambda/commit/735d18d6ebc979c4ce06777502171e1922b1018f)]
* feat(changelog): new cli option introduced, changelog generation implemented into pipeline #32 [[7423f62a908d2c27fdba40ec5a709cfbacada89b](https://github.com/sladg/nextjs-lambda/commit/7423f62a908d2c27fdba40ec5a709cfbacada89b)]
* feat(cdk): bootstrap option added for deployments [[4fe52f49df466f52c92aa5a90b5c96bdbe0d3523](https://github.com/sladg/nextjs-lambda/commit/4fe52f49df466f52c92aa5a90b5c96bdbe0d3523)]
* ref(cdk): removed unnecessary symlinks, improved naming, cleaned dependencies [[a61854e06e0ed6a3336a33e9eac767f227a65902](https://github.com/sladg/nextjs-lambda/commit/a61854e06e0ed6a3336a33e9eac767f227a65902)]
* fix(cdk): host removed so ApiGw does not fail due to client host header [[e273c39d7913186187380c89d4739d4526b09b8f](https://github.com/sladg/nextjs-lambda/commit/e273c39d7913186187380c89d4739d4526b09b8f)]
* feat(cdk): allow to pass env vars to lambda, added headers forwarding to cloudfront, readme updated [[a85085d6968726dcea70def9ded4eb5f378d824a](https://github.com/sladg/nextjs-lambda/commit/a85085d6968726dcea70def9ded4eb5f378d824a)]
* ref(cdk): transpiling of CDK implemented [[8c03f0ddd8e8ed71ca817a308826a1bf7bc843b9](https://github.com/sladg/nextjs-lambda/commit/8c03f0ddd8e8ed71ca817a308826a1bf7bc843b9)]
* fix(cdk): fixed missing ts-node when running in pipeline [[d45e5d3c141e0fb5264c14585c3e9a4806c4b7c3](https://github.com/sladg/nextjs-lambda/commit/d45e5d3c141e0fb5264c14585c3e9a4806c4b7c3)]
* feat(monorepo): added support for monorepo and automatic nested output search, minor improvements #38 #39 [[7d913b01cac581874d7d6c7758ab72ad105bf802](https://github.com/sladg/nextjs-lambda/commit/7d913b01cac581874d7d6c7758ab72ad105bf802)]
* ref(sharp): remove sharp for now in favor of simplicity, todo added to return later [[b982a0dc282f23f79b9391a7425b26ed1c8abb5e](https://github.com/sladg/nextjs-lambda/commit/b982a0dc282f23f79b9391a7425b26ed1c8abb5e)]
* ref(cdk, images): cdk simplified to single APIGW, image handler bundling fixed and simplified to not include layers [[f0beeec5d2ee625b337b3e16eeb0dfa4cd81ea0a](https://github.com/sladg/nextjs-lambda/commit/f0beeec5d2ee625b337b3e16eeb0dfa4cd81ea0a)]
* Add support for basePath variable (#44) [[9053b450b4c6b11656b1f70ddb8353d5cbc327a3](https://github.com/sladg/nextjs-lambda/commit/9053b450b4c6b11656b1f70ddb8353d5cbc327a3)]
* doc(readme): updated readme, restructured, clearly communicated project state [[898cdf0e787a30de603e0a872096c11831d359b9](https://github.com/sladg/nextjs-lambda/commit/898cdf0e787a30de603e0a872096c11831d359b9)]
* fix(cdk): remove unncessary flag [[b905bf99f6b507dd24e0050fed163e104cf3c92f](https://github.com/sladg/nextjs-lambda/commit/b905bf99f6b507dd24e0050fed163e104cf3c92f)]
* fix(cdk): approvals are not required for deployment as there is no way to pass them [[bf41f371c854211cdda6816f91e0c7b9958cbc3e](https://github.com/sladg/nextjs-lambda/commit/bf41f371c854211cdda6816f91e0c7b9958cbc3e)]
* fix(cdk): construct to not cache dependency layer [[d7f05058370e02a584e67751a636d062797bfa11](https://github.com/sladg/nextjs-lambda/commit/d7f05058370e02a584e67751a636d062797bfa11)]
* fix(cdk): do not specify root of types for better compatibility [[a818a1cce22ba89b462722af1b49d557945bc80e](https://github.com/sladg/nextjs-lambda/commit/a818a1cce22ba89b462722af1b49d557945bc80e)]
* fix(cdk): minor improvements to layers and upgrades of aws packages [[1a68d0680accf7ec79d4c5bf3fae0be6a107a246](https://github.com/sladg/nextjs-lambda/commit/1a68d0680accf7ec79d4c5bf3fae0be6a107a246)]
* fix(cdk): correct folder path for types [[4508c24b2c530c6ae20fd25b530a3019abfad8d9](https://github.com/sladg/nextjs-lambda/commit/4508c24b2c530c6ae20fd25b530a3019abfad8d9)]
* fix(swc): do not use swc on ts-node, historical typo fix [[970f22938aae4ecbb398813d501b02d04fef9031](https://github.com/sladg/nextjs-lambda/commit/970f22938aae4ecbb398813d501b02d04fef9031)]
* ref(cdk): use layer description and custom hash to avoid re-uploads [[8458d703a4a1689c6c9561ce30d67a0027335012](https://github.com/sladg/nextjs-lambda/commit/8458d703a4a1689c6c9561ce30d67a0027335012)]
* fix(cli): arguments to be correctly accepted as strings #33 [[8f0bd8bda0857d88e1551f7108200b7f11029ba3](https://github.com/sladg/nextjs-lambda/commit/8f0bd8bda0857d88e1551f7108200b7f11029ba3)]
* ref(replacement): git version replacement include regex [[e37e5900a505d7a17243a8b15a2753de22cbc71b](https://github.com/sladg/nextjs-lambda/commit/e37e5900a505d7a17243a8b15a2753de22cbc71b)]
* fix(versions): allow PHP composer.json to be nested [[e1c82891393268933b4e857d90bcfa6f32cc60b7](https://github.com/sladg/nextjs-lambda/commit/e1c82891393268933b4e857d90bcfa6f32cc60b7)]
* fix(git): fetch tags to ensure up-to-date git [[3193d29de9e24d3fe77de0db6cafdaaa217fe380](https://github.com/sladg/nextjs-lambda/commit/3193d29de9e24d3fe77de0db6cafdaaa217fe380)]
* fix(git): shipit to fetch sorted tags [[ff84cd4cd1b3d3dba4d16b12b2f8bd3cd22cae20](https://github.com/sladg/nextjs-lambda/commit/ff84cd4cd1b3d3dba4d16b12b2f8bd3cd22cae20)]
* fix(npx): don't use swc transpiler [[475ed602d0712b35adf5309226b949a14a96a4f2](https://github.com/sladg/nextjs-lambda/commit/475ed602d0712b35adf5309226b949a14a96a4f2)]
* docs: missing step added to avoid confustion [[42b93bb6b5b0730eeff94ade25786ed2e077aba9](https://github.com/sladg/nextjs-lambda/commit/42b93bb6b5b0730eeff94ade25786ed2e077aba9)]
* docs: missing step added to avoid confustion [[02d0d65c76bae24f9be6819d9b918656f60b82fd](https://github.com/sladg/nextjs-lambda/commit/02d0d65c76bae24f9be6819d9b918656f60b82fd)]
* docs: updated documenation to include deploy command [[2ac3f3a6381562e41af2742f1374e392acad6d67](https://github.com/sladg/nextjs-lambda/commit/2ac3f3a6381562e41af2742f1374e392acad6d67)]
* fix(dependency): include swc/core to support deploy command properly [[0707f0c3866c2ea30e92d09154fcb0ba7bf3df5f](https://github.com/sladg/nextjs-lambda/commit/0707f0c3866c2ea30e92d09154fcb0ba7bf3df5f)]
* fix(cdk): include tsconfig.json in npm deployment [[488cfd1eec607498fe970e5a4f0164b81ec20807](https://github.com/sladg/nextjs-lambda/commit/488cfd1eec607498fe970e5a4f0164b81ec20807)]
* feat(deployment): CLI command for deploying applications without the need to define own cdk [[909552fe3630847160ef506e65a0700d337409c1](https://github.com/sladg/nextjs-lambda/commit/909552fe3630847160ef506e65a0700d337409c1)]
* docs: updated readme [[e058d253611558958d67b08b48809481c52c336f](https://github.com/sladg/nextjs-lambda/commit/e058d253611558958d67b08b48809481c52c336f)]
* feat(next): upgraded to 12.3 version, fixed broken implementation, dependencies simplified [[c6402ed05309fc66e728d0ef585afd96bfe62878](https://github.com/sladg/nextjs-lambda/commit/c6402ed05309fc66e728d0ef585afd96bfe62878)]
* fix(cdk,cli): correctly read git config, include BUILD_ID in assets, calculate zip hases ourselves [[7604d1d68688c8f5f8107544b3682ee54b4fed1b](https://github.com/sladg/nextjs-lambda/commit/7604d1d68688c8f5f8107544b3682ee54b4fed1b)]
* fix(dependencies): improved dependency list [[12193543b82574551ed5191a804e426e0cfd0042](https://github.com/sladg/nextjs-lambda/commit/12193543b82574551ed5191a804e426e0cfd0042)]
* fix(cli): make it standalone so it's friendly with npx [[79730722c772e4913f4fb73778d08c6cc571da26](https://github.com/sladg/nextjs-lambda/commit/79730722c772e4913f4fb73778d08c6cc571da26)]
* fix: minor git commit msg improvement [[029e1c855a3db1da4fbc653039a14ac9ee7641cd](https://github.com/sladg/nextjs-lambda/commit/029e1c855a3db1da4fbc653039a14ac9ee7641cd)]
* fix: publishing, do not use custom script [[6de0b59d0e56e10893b0a23627643453462976ac](https://github.com/sladg/nextjs-lambda/commit/6de0b59d0e56e10893b0a23627643453462976ac)]
* fix: versioning, sync version with npmjs [[3fe506a0eb9ce3e2f3d1287df15e98b0c8ff5b90](https://github.com/sladg/nextjs-lambda/commit/3fe506a0eb9ce3e2f3d1287df15e98b0c8ff5b90)]
* fix(ci): use just master for publishing [[6384d9cf658c10b80f6cebe9ab0e9a2ea4624034](https://github.com/sladg/nextjs-lambda/commit/6384d9cf658c10b80f6cebe9ab0e9a2ea4624034)]
* ref(rollup): bundling redefined, correctly generate standalone (#29) [[d8e2475e1809f5c22077d624660e7f78f07dce4a](https://github.com/sladg/nextjs-lambda/commit/d8e2475e1809f5c22077d624660e7f78f07dce4a)]
* fix: export configuration, nested paths (#27) [[1e152916102618265191863f1adb60137fdb03c8](https://github.com/sladg/nextjs-lambda/commit/1e152916102618265191863f1adb60137fdb03c8)]
* fix(imports): define additional entry points for compatibility (#26) [[7d83ae9a7b97fbc3f4bf53ae51f487fa56403379](https://github.com/sladg/nextjs-lambda/commit/7d83ae9a7b97fbc3f4bf53ae51f487fa56403379)]
* fix: cdk props redefined, simpler and easier config (#25) [[8105c7687e7a808b726340e8d39244707633cb10](https://github.com/sladg/nextjs-lambda/commit/8105c7687e7a808b726340e8d39244707633cb10)]
* ref(app): bundling, cdk (#24) [[848c9995b40fc9bcf0a89a4730f6fbf2670942fb](https://github.com/sladg/nextjs-lambda/commit/848c9995b40fc9bcf0a89a4730f6fbf2670942fb)]
* refactor: nextjs packaging, use npm packages to bundle instead of shell script, parameters added (#22) [[cadf0e8733e2d0cc9d3e7f435e78eac783d65476](https://github.com/sladg/nextjs-lambda/commit/cadf0e8733e2d0cc9d3e7f435e78eac783d65476)]
* fix: git command in shipit (#21) [[4b456f15fdf96e0cd80499b16c0379da79a3201f](https://github.com/sladg/nextjs-lambda/commit/4b456f15fdf96e0cd80499b16c0379da79a3201f)]
* fix: git commands, correctly escape (#20) [[0860d90ba32a73ad5a0798d1c871896c3e18cb83](https://github.com/sladg/nextjs-lambda/commit/0860d90ba32a73ad5a0798d1c871896c3e18cb83)]
* feat(git): properly handle commits and tagging (#19) [[c84725d0cae89c67a529d05447211a36c96ce074](https://github.com/sladg/nextjs-lambda/commit/c84725d0cae89c67a529d05447211a36c96ce074)]
* fix(git): properly push and bump versions in git, arguments passed correctly (#18) [[ff6578ff0906e522cf946900b6f8a463103513bd](https://github.com/sladg/nextjs-lambda/commit/ff6578ff0906e522cf946900b6f8a463103513bd)]
* feature(bumps): allow for cli to calculate and bump versions for projects, prettier config added (#17) [[24c0310608e62635b58d1e215e6b05b7901226a9](https://github.com/sladg/nextjs-lambda/commit/24c0310608e62635b58d1e215e6b05b7901226a9)]
* docs: readme improved (#16) [[7fbc629e3603ff92f57c2f12f8663496f360d9f4](https://github.com/sladg/nextjs-lambda/commit/7fbc629e3603ff92f57c2f12f8663496f360d9f4)]
* refactor: CLI structure refactored, readme filled with CDK example (#15) [[a972b9ab0eb6c7ae0004661ffae7f8cd9b773f4b](https://github.com/sladg/nextjs-lambda/commit/a972b9ab0eb6c7ae0004661ffae7f8cd9b773f4b)]
* fix: draft of PR checks for labels to ensure releases (#14) [[1353ec5248c08d982168396d9b56682aed889f9f](https://github.com/sladg/nextjs-lambda/commit/1353ec5248c08d982168396d9b56682aed889f9f)]
* refactor: released labels once PR is merged (#13) [[e188446941278fe6704462872f852856d0a0321a](https://github.com/sladg/nextjs-lambda/commit/e188446941278fe6704462872f852856d0a0321a)]
* doc: improved documentation for new parts, added todos (#12) [[0d8b8501d0dbc3109521d76df1eba4d33336693d](https://github.com/sladg/nextjs-lambda/commit/0d8b8501d0dbc3109521d76df1eba4d33336693d)]
* ref: allow for default handler use (#11) [[ee93b0305ecc05cd54d5af8a0f124bb4d2a2013f](https://github.com/sladg/nextjs-lambda/commit/ee93b0305ecc05cd54d5af8a0f124bb4d2a2013f)]
* fix: cli, improved command support, correct resolution for files (#10) [[cc893fc7ab930d6a3efba82fa4a8aa0ace8193d9](https://github.com/sladg/nextjs-lambda/commit/cc893fc7ab930d6a3efba82fa4a8aa0ace8193d9)]
* fix: scripts (#9) [[0275dc0ce7c81455b275b1a5fd26aec708f00649](https://github.com/sladg/nextjs-lambda/commit/0275dc0ce7c81455b275b1a5fd26aec708f00649)]
* feat: server-handler and packaging for nextjs (#8) [[bbe5b69899b95c9fcdf1fd8afc2f7f9b4617bccc](https://github.com/sladg/nextjs-lambda/commit/bbe5b69899b95c9fcdf1fd8afc2f7f9b4617bccc)]
* fix: fetch tags for release process (#7) [[456b6ea3e38b8d7610f8b829b578cc57527a55cc](https://github.com/sladg/nextjs-lambda/commit/456b6ea3e38b8d7610f8b829b578cc57527a55cc)]
* feat: repository and git config added (#6) [[7a83bed99ac5db6e278cfa5955fd1bc91b10251d](https://github.com/sladg/nextjs-lambda/commit/7a83bed99ac5db6e278cfa5955fd1bc91b10251d)]
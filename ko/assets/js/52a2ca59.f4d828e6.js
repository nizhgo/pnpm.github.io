"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8122],{2348:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2022/12/30/yearly-update","metadata":{"permalink":"/ko/blog/2022/12/30/yearly-update","editUrl":"https://crowdin.com/project/pnpm/ko","source":"@site/i18n/ko/docusaurus-plugin-content-blog/2022-12-30-yearly-update.md","title":"The year 2022 for pnpm","description":"It is the end of the year. A really hard year. As you may know, I live in Ukraine, so due to Russia\'s war against us, it was harder to lead this project than in previous years. Nevertheless, it was a good year for pnpm. We\'ve got a lot of new users, contributors, and we have implemented many great features.","date":"2022-12-30T00:00:00.000Z","formattedDate":"2022\ub144 12\uc6d4 30\uc77c","tags":[],"readingTime":2.51,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"The year 2022 for pnpm","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48","image":"/img/blog/2022-review.png"},"nextItem":{"title":"pnpm\uc758 2021\ub144","permalink":"/ko/blog/2021/12/29/yearly-update"}},"content":"It is the end of the year. A really hard year. As you may know, I live in Ukraine, so due to Russia\'s war against us, it was harder to lead this project than in previous years. Nevertheless, it was a good year for pnpm. We\'ve got a lot of new users, contributors, and we have implemented many great features.\\n\\n![](/img/blog/2022-review.png)\\n\\n(the above illustration was generated by Midjourney. The tiger symolizes the year of the tiger)\\n\\n\x3c!--truncate--\x3e\\n\\n## \uc0ac\uc6a9\\n\\n### \ub2e4\uc6b4\ub85c\ub4dc \ud1b5\uacc4\\n\\nMy goal this year was to beat Lerna by the number of downloads. We were able to achieve this goal [in August](https://npm-stat.com/charts.html?package=pnpm&package=lerna&from=2022-01-01&to=2022-12-30):\\n\\n![](/img/blog/pnpm-vs-lerna-stats.png)\\n\\npnpm was downloaded more than [5 times more](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2022-12-30) in 2022 than in 2021:\\n\\n![](/img/blog/download-stats-2022.png)\\n\\n### \ubb38\uc11c \ubc29\ubb38\\n\\nGoogle Analytics\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc11c\uc5d0\uc11c \uac1c\uc778\ud654\ub418\uc9c0 \uc54a\uc740 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. In 2022, sometimes we had more than 20,000 unique visitors a week. This is 10 times more than in 2021!\\n\\n![](/img/blog/ga-unique-visits-2022.png)\\n\\n### \uae43\ud5c8\ube0c \uc2a4\ud0c0\\n\\nOur [main GitHub repository](https://github.com/pnpm/pnpm) received almost +7,000 stars this year.\\n\\n![](/img/blog/stars-2022.png)\\n\\n### Our contributors\\n\\nWe had a lot of new and active contributors this year. These are the people the merge at least one PR in 2022:\\n\\n* [Zoltan Kochan](https://github.com/zkochan)\\n* [chlorine](https://github.com/lvqq)\\n* [await-ovo](https://github.com/await-ovo)\\n* [Brandon Cheng](https://github.com/gluxon)\\n* [Dominic Elm](https://github.com/d3lm)\\n* [MCMXC](https://github.com/mcmxcdev)\\n* [\u90a3\u91cc\u597d\u810f\u4e0d\u53ef\u4ee5](https://github.com/dev-itsheng)\\n* [Homyee King](https://github.com/HomyeeKing)\\n* [Shinobu Hayashi](https://github.com/Shinyaigeek)\\n* [Black-Hole](https://github.com/BlackHole1)\\n* [Kenrick](https://github.com/kenrick95)\\n* [Weyert de Boer](https://github.com/weyert)\\n* [Glen Whitney](https://github.com/gwhitney)\\n* [Cheng](https://github.com/chengcyber)\\n* [zoomdong](https://github.com/fireairforce)\\n* [thinkhalo](https://github.com/ufec)\\n* [\u5b50\u77bb Luci](https://github.com/LuciNyan)\\n* [spencer17x](https://github.com/Spencer17x)\\n* [liuxingbaoyu](https://github.com/liuxingbaoyu)\\n* [\uc7a5\uc9c0\ud6c8](https://github.com/WhiteKiwi)\\n* [Jon de la Motte](https://github.com/jondlm)\\n* [Jack Works](https://github.com/Jack-Works)\\n* [milahu](https://github.com/milahu)\\n* [David Collins](https://github.com/David-Collins)\\n* [nikoladev](https://github.com/nikoladev)\\n* [Igor Bezkrovnyi](https://github.com/ibezkrovnyi)\\n* [Lev Chelyadinov](https://github.com/illright)\\n* [javier-garcia-meteologica](https://github.com/javier-garcia-meteologica)\\n\\n## \uc8fc\uc694 \uae30\ub2a5\\n\\n### Supporting a symlinkless hoisted `node_modules` (since [v6.25.0](https://github.com/pnpm/pnpm/releases/tag/v6.25.0))\\n\\nRight at the beginning of 2022, we have added support for the \\"traditional\\" hoisted (a.k.a flat `node_modules`). We use Yarn\'s hoisting algorithm to create a proper hoisted `node_modules`. This new setting has basically made pnpm compatible with all Node.js stack that are compatible with npm CLI.\\n\\nTo use the hoisted `node_modules` directory structure, use the `node-linker=hoisted` setting in an `.npmrc` file.\\n\\n### Side effects cache (since [v7.0.0](https://github.com/pnpm/pnpm/releases/tag/v7.0.0))\\n\\nSince v7, [side-effect-cache][] is enabled by default, so dependencies that should be built are only built once on a machine. This improves installation speed by a lot in projects that have dependencies with build scripts.\\n\\n### Dependencies patching (since [v7.4.0](https://github.com/pnpm/pnpm/releases/tag/v7.4.0))\\n\\nThe [`pnpm patch`][] command have been added for patching dependencies in your `node_modules`.\\n\\n### Time-based resolution strategy (since [v7.10.0](https://github.com/pnpm/pnpm/releases/tag/v7.10.0))\\n\\nA new resolution mode was added to pnpm, which should make updating dependencies more secure. You can change the resolution mode with the [resolution-mode][] setting.\\n\\n### Listing licenses of dependencies (since [v7.17.0](https://github.com/pnpm/pnpm/releases/tag/v7.17.0))\\n\\nYou may now you the [`pnpm licenses list`][] command to check the licenses of the installed packages.\\n\\n[side-effect-cache]: /npmrc#side-effects-cache\\n\\n[`pnpm patch`]: /cli/patch\\n\\n[resolution-mode]: https://pnpm.io/npmrc#resolution-mode\\n\\n[`pnpm licenses list`]: /cli/licenses"},{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/ko/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/ko","source":"@site/i18n/ko/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"pnpm\uc758 2021\ub144","description":"\uc62c\ud574\uc758 \ub05d\uc790\ub77d\uc774\uace0 pnpm\uc5d0\uac8c\ub294 \uc88b\uc740 \ud55c \ud574\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub2c8, \uc5b4\ub5bb\uac8c \ub418\uc5c8\ub294\uc9c0 \ubd05\uc2dc\ub2e4.","date":"2021-12-29T00:00:00.000Z","formattedDate":"2021\ub144 12\uc6d4 29\uc77c","tags":[],"readingTime":5.175,"hasTruncateMarker":true,"authors":[{"name":"\uc878\ud0c4 \ucf54\ucc2c","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"pnpm\uc758 2021\ub144","author":"\uc878\ud0c4 \ucf54\ucc2c","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"The year 2022 for pnpm","permalink":"/ko/blog/2022/12/30/yearly-update"},"nextItem":{"title":"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158","permalink":"/ko/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"\uc62c\ud574\uc758 \ub05d\uc790\ub77d\uc774\uace0 pnpm\uc5d0\uac8c\ub294 \uc88b\uc740 \ud55c \ud574\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub2c8, \uc5b4\ub5bb\uac8c \ub418\uc5c8\ub294\uc9c0 \ubd05\uc2dc\ub2e4.\\n\\n\x3c!--truncate--\x3e\\n\\n## \uc0ac\uc6a9\ub7c9\\n\\n### \ub2e4\uc6b4\ub85c\ub4dc \ud1b5\uacc4\\n\\n\uc62c\ud574 \uc800\uc758 \ubaa9\ud45c\ub294 \ub2e4\uc6b4\ub85c\ub4dc \uc218\uc5d0\uc11c Bower\ub97c \uc774\uae30\ub294 \uac83\uc774 \uc5c8\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 [11\uc6d4](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29)\uc5d0 \uadf8 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm\uc740 2020\ub144\uc5d0 \ube44\ud574 2021\ub144\uc5d0\ub294 [\uc57d 3\ubc30 \ub354 \ub9ce\uc774](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) \ub2e4\uc6b4\ub85c\ub4dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::\ucc38\uace0\\n\\n\uc774 \ud1b5\uacc4\ub294 pnpm\uc774 \uc124\uce58\ub420 \uc218 \uc788\ub294 \ubaa8\ub4e0 \ub2e4\uc591\ud55c \ubc29\ubc95\uc744 \uce21\uc815\ud558\uc9c0\ub3c4 \uc54a\uc2b5\ub2c8\ub2e4! \uadf8\ub4e4\uc740 \ub2e8\uc9c0 [pnpm npm \ud328\ud0a4\uc9c0](https://www.npmjs.com/package/pnpm)\uc758 \ub2e4\uc6b4\ub85c\ub4dc\ub9cc \uce21\uc815\ud569\ub2c8\ub2e4. \uc62c\ud574 \uc6b0\ub9ac\ub294 \ub610\ud55c pnpm\uc758 \ucef4\ud30c\uc77c \ub41c \ubc14\uc774\ub108\ub9ac \ubc84\uc804\uc744 \ucd94\uac00\ud558\uba70 \uc774\ub294 \ub2e4\ub978\uc2dd\uc73c\ub85c \ucd9c\ud558\ub429\ub2c8\ub2e4.\\n\\n:::\\n\\n### \ubb38\uc11c \ubc29\ubb38\\n\\nGoogle Analytics\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc11c\uc5d0\uc11c \uac1c\uc778\ud654\ub418\uc9c0 \uc54a\uc740 \ud1b5\uacc4\ub97c \uc218\uc9d1\ud569\ub2c8\ub2e4. 2021\ub144\uc5d0\ub294 \ub54c\ub54c\ub85c \uc77c\uc8fc\uc77c\uc5d0 2,000\uba85 \uc774\uc0c1\uc758 \uace0\uc720 \ubc29\ubb38\uc790\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\n\ub300\ubd80\ubd84\uc758 \uc0ac\uc6a9\uc790\ub294 \ubbf8\uad6d\uacfc \uc911\uad6d \ucd9c\uc2e0\uc785\ub2c8\ub2e4.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### \uae43\ud5c8\ube0c \uc2a4\ud0c0\\n\\n[\uc8fc\uc694 GitHub \uc800\uc7a5\uc18c](https://github.com/pnpm/pnpm)\ub294 \uc62c\ud574 +5,000\uac1c\uc758 \ubcc4\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### \uc2e0\uaddc \uc0ac\uc6a9\uc790\\n\\n\uc62c\ud574 \uac00\uc7a5 \ud070 \uc2e0\uaddc \uc0ac\uc6a9\uc790\ub294 [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (TikTok \ub4a4\uc5d0 \uc788\ub294 \ud68c\uc0ac)\uc785\ub2c8\ub2e4.\\n\\n\ub610\ud55c \ub9ce\uc740 \ud6cc\ub96d\ud55c \uc624\ud508 \uc18c\uc2a4 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c pnpm\uc744 \uc0ac\uc6a9\ud558\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uc77c\ubd80\ub294 \ubaa8\ub178\ub808\ud3ec\uc5d0 \ub300\ud55c \ub6f0\uc5b4\ub09c \uc9c0\uc6d0 \ub54c\ubb38\uc5d0 pnpm\uc73c\ub85c \uc804\ud658\ud588\uc2b5\ub2c8\ub2e4.\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* \ubc0f [\ub2e4\ub978 \uac83\ub4e4](https://pnpm.io/workspaces#usage-examples)\\n\\n\uc77c\ubd80\ub294 pnpm\uc774 \uc5bc\ub9c8\ub098 \ud6a8\uc728\uc801\uc774\uace0 \ube60\ub974\uba70 \uc544\ub984\ub2e4\uc6b4\uc9c0\ub97c \uc88b\uc544\ud558\uae30 \ub54c\ubb38\uc5d0 \uc804\ud658\ud588\uc2b5\ub2c8\ub2e4.\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## \uc8fc\uc694 \uae30\ub2a5\\n\\n### \uc0c8\ub85c\uc6b4 locfile \ud615\uc2dd ([v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0) \uc774\ud6c4)\\n\\n\uc62c\ud574 \ucc98\uc74c\uc774\uc790 \uac00\uc7a5 \uc911\uc694\ud55c \ubcc0\uacbd \uc0ac\ud56d \uc911 \ud558\ub098\ub294 \uc0c8\ub85c\uc6b4 `pnpm-lock.yaml` \ud615\uc2dd\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \ube0c\ub808\uc774\ud0b9 \uccb4\uc778\uc9c0\uc600\uae30 \ub54c\ubb38\uc5d0 v6\uc744 \ucd9c\uc2dc\ud574\uc57c \ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uadf8\uac83\uc740 \uc131\uacf5\uc801\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc804 lockfile\uc740 Git \ucda9\ub3cc\uc744 \uc790\uc8fc \uc77c\uc73c\ucf30\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \ud615\uc2dd\uc774 \ub3c4\uc785\ub41c \uc774\ud6c4\ub85c Git \ucda9\ub3cc\uc5d0 \ub300\ud55c \ubd88\ub9cc\uc740 \uc811\uc218\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\\n\\n### Node.js \ubc84\uc804 \uad00\ub9ac ([v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0) \uc774\ud6c4)\\n\\nNode.js \ubc84\uc804\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \uc0c8\ub85c\uc6b4 \uba85\ub839\uc5b4 (`pnpm env`)\ub97c \ucd9c\ud558\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c nvm \ub610\ub294 Volta\uc640 \uac19\uc740 Node.js \ubc84\uc804 \uad00\ub9ac\uc790 \ub300\uc2e0 pnpm\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ub610\ud55c pnpm\uc740 \ub3c5\ub9bd \uc2e4\ud589\ud615 \uc2e4\ud589 \ud30c\uc77c\ub85c \uc81c\uacf5\ub418\ubbc0\ub85c \uc2dc\uc2a4\ud15c\uc5d0 Node.js\uac00 \uc0ac\uc804 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544\ub3c4 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n### \ub85c\uceec \uc758\uc874\uc131 \uc8fc\uc785 ([v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0) \uc774\ud6c4)\\n\\n\uc5ec\ub7ec\ubd84\uc740 \ub85c\uceec \uc758\uc874\uc131\uc744 \\"\uc8fc\uc785\\"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \ub85c\uceec \uc758\uc874\uc131\uc740 `node_modules`\uc5d0 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub418\uc9c0\ub9cc \uc774 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uba74 pnpm\uc5d0 \ud328\ud0a4\uc9c0 \ud30c\uc77c\uc744 \ud558\ub4dc \ub9c1\ud06c\ud558\ub3c4\ub85d \uc9c0\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n### \ud53c\uc5b4 \uc758\uc874\uc131 \ubb38\uc81c\uc5d0 \ub300\ud55c \ubcf4\uace0 \uae30\ub2a5 \uac1c\uc120 ([v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0) \uc774\ud6c4)\\n\\n\ud53c\uc5b4 \uc758\uc874\uc131 \ubb38\uc81c\ub294 \uc77c\ubc18 \ud14d\uc2a4\ud2b8\ub85c \ucd9c\ub825\ub418\uc5b4 \uc774\ud574\ud558\uae30 \uc5b4\ub824\uc6e0\uc2b5\ub2c8\ub2e4. \uc774\uc81c \ubaa8\ub450 \uadf8\ub8f9\ud654\ub418\uc5b4 \uba4b\uc9c4 \uacc4\uce35 \uad6c\uc870\ub85c \ucd9c\ub825\ub429\ub2c8\ub2e4.\\n\\n## \uacbd\uc7c1\\n\\n### Yarn\\n\\nYarn\uc740 [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-)\uc5d0\uc11c pnpm \ub9c1\ucee4\ub97c \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c Yarn\uc740 pnpm\uc774 \uc0dd\uc131\ud558\ub294 \uac83\uacfc \uc720\uc0ac\ud55c \ub178\ub4dc \ubaa8\ub4c8 \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ub610\ud55c Yarn \ud300\uc740 \ub514\uc2a4\ud06c \uacf5\uac04 \ud6a8\uc728\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \ucf58\ud150\uce20 \uc8fc\uc18c \uc9c0\uc815 \uac00\ub2a5 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uad6c\ud604\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4.\\n\\n### npm\\n\\nnpm \ud300\uc740 pnpm\uc774 \uc0ac\uc6a9\ud558\ub294 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub41c node-modules \ub514\ub809\ud1a0\ub9ac \uad6c\uc870 ([RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)\uc640 \uad00\ub828\ub41c)\ub3c4 \ucc44\ud0dd\ud558\uae30\ub85c \uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4.\\n\\n### \uae30\ud0c0\\n\\nZig\ub85c \uc791\uc131\ub41c [Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1)\uacfc Rust\ub85c \uc791\uc131\ub41c [Volt](https://github.com/voltpkg/volt) \ubaa8\ub450 npm/Yarn/pnpm\ubcf4\ub2e4 \ube60\ub974\ub2e4\uace0 \uc8fc\uc7a5\ud569\ub2c8\ub2e4. \uc774 \uc0c8\ub85c\uc6b4 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\ub97c \uc544\uc9c1 \ubca4\uce58\ub9c8\ud0b9\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\\n\\n## \ud5a5\ud6c4 \uacc4\ud68d\\n\\n\ub354 \ube60\ub974\uace0, \ub354 \uc88b\uace0, \ucd5c\uace0\uac00 \ub420 \uac83 \uc785\ub2c8\ub2e4."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/ko/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/ko","source":"@site/i18n/ko/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158","description":"nodemodules \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ubaa9\ud45c\ub294 \uac00\uc7a5 \uc5c4\uaca9\ud55c \uac83\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774\uc9c0\ub9cc \uadf8\uac83\uc774 \uac00\ub2a5\ud558\uc9c0 \uc54a\ub2e4\uba74, \ub290\uc2a8\ud55c nodemodules\uc744 \ub9cc\ub4dc\ub294 \uc635\uc158\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.","date":"2020-10-17T00:00:00.000Z","formattedDate":"2020\ub144 10\uc6d4 17\uc77c","tags":[],"readingTime":3.78,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"pnpm\uc758 2021\ub144","permalink":"/ko/blog/2021/12/29/yearly-update"},"nextItem":{"title":"\ud3c9\ud0c4\ud55c node_modules\uac00 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.","permalink":"/ko/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"node_modules \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0\ub294 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ubaa9\ud45c\ub294 \uac00\uc7a5 \uc5c4\uaca9\ud55c \uac83\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774\uc9c0\ub9cc \uadf8\uac83\uc774 \uac00\ub2a5\ud558\uc9c0 \uc54a\ub2e4\uba74, \ub290\uc2a8\ud55c node_modules\uc744 \ub9cc\ub4dc\ub294 \uc635\uc158\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\x3c!--truncate--\x3e\\n\\n## \uae30\ubcf8 \uc124\uc815\\n\\n\uae30\ubcf8\uc801\uc73c\ub85c pnpm v5\ub294 \ubc18\ub9cc \uc5c4\uaca9\ud55c node_modules\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \ubc18\ub9cc \uc5c4\uaca9\ud558\ub2e4\ub294 \uac83\uc740 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc774 `package.json`\uc5d0 \uc758\uc874\uc131\uc73c\ub85c \ucd94\uac00\ub41c \ud328\ud0a4\uc9c0\ub9cc \uc694\uad6c\ud560 \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4 (\uba87 \uac00\uc9c0 \uc608\uc678\ub294 \uc81c\uc678). \uadf8\ub7ec\ub098 \uc5ec\ub7ec\ubd84\uc758 \uc758\uc874\uc131\uc740 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uae30\ubcf8 \uad6c\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\\n\\n```ini\\n; \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub294  node_modules/.pnpm/node_modules\uc5d0 \ud638\uc774\uc2a4\ud305\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4\\nhoist-pattern[]=*\\n\\n; \ubaa8\ub4e0 \ud0c0\uc785\uc740 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud589\ubcf5\ud558\uac8c \ub9cc\ub4e4\uae30 \uc704\ud574 \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4\\npublic-hoist-pattern[]=*types*\\n\\n; \ubaa8\ub4e0 ESLint\uc640 \uad00\ub828\ub41c \ud328\ud0a4\uc9c0\ub294 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ud638\uc774\uc2a4\ud305 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. \uac00\uc7a5 \uc5c4\uaca9\ud55c \uad6c\uc131\\n\\npnpm\uc740 v5.9 \ubd80\ud130 [Yarn\uc758 Plug\'n \' Play](https://yarnpkg.com/features/pnp) \ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. PnP\ub97c \uc0ac\uc6a9\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc758\uc874\uc131\uc774 \uc120\uc5b8\ub41c \uc758\uc874\uc131\uc5d0\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 monorepo \ub0b4\ubd80\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ub8e8\ud2b8 \ud504\ub85c\uc81d\ud2b8\uc758 \uc758\uc874\uc131\uc5d0\ub3c4 \uc811\uadfc\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 `hoist=false` \ub85c \uc124\uc815\ud558\ub294 \uac83\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \uc5c4\uaca9\ud569\ub2c8\ub2e4.\\n\\nPlug\'n\'Play\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ub2e4\uc74c \uc124\uc815\uc744 \uc124\uc815\ud558\uc138\uc694.\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## \uc5c4\uaca9\ud558\uace0 \uc804\ud1b5\uc801\uc778 \ubaa8\ub4c8 \ub514\ub809\ud1a0\ub9ac\\n\\n\uc544\uc9c1 PnP\ub97c \uc0ac\uc6a9\ud560 \uc900\ube44\uac00 \ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub3c4 \uc5ec\uc804\ud788 \uc5c4\uaca9\ud560 \uc218 \uc788\uc73c\uba70 \ud638\uc774\uc2a4\ud305 \uad6c\uc131\uc744 false\ub85c \uc124\uc815\ud558\uc5ec \ud328\ud0a4\uc9c0\uac00 \uc790\uccb4 \uc758\uc874\uc131\uc5d0\ub9cc \uc811\uadfc\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```ini\\nhoist=false\\n```\\n\\n\uadf8\ub7ec\ub098 \uc758\uc874\uc131 \uc911 \uc77c\ubd80\uac00 \uadf8\ub4e4\uc758 \uc758\uc874\uc131\uc5d0 \uc5c6\ub294 \ud328\ud0a4\uc9c0\uc5d0 \uc811\uadfc\ud558\ub824\uace0 \ud558\ub294 \uacbd\uc6b0 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n1. `pnpmfile.js`\ub97c \ub9cc\ub4e4\uace0 [hook](/pnpmfile)\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud328\ud0a4\uc9c0\uc758 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\uc5d0 \ub204\ub77d\ub41c \uc758\uc874\uc131\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.\\n\\n2. `hoist-pattern` \uc124\uc815\uc5d0 \ud328\ud134\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uadf8 \ucc3e\uc744 \uc218 \uc5c6\ub294 \ubaa8\ub4c8\uc774 `babel-core`\uc774\uba74, \ub2e4\uc74c \uc124\uc815\uc744 `.npmrc`\ucd94\uac00\ud569\ub2c8\ub2e4.\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## \ucd5c\uc545\uc758 \uacbd\uc6b0 - \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305\\n\\n\uc77c\ubd80 \ub3c4\uad6c\ub294 \ubaa8\ub4e0 \uac83\uc744 \uac00\uc0c1 \uc800\uc7a5\uc18c\uc758 \ub8e8\ud2b8\uc5d0 \ud638\uc774\uc2a4\ud305\ud558\uace0 \uc77c\ubd80 \ud328\ud0a4\uc9c0\ub97c \ub8e8\ud2b8\uc5d0 \ud638\uc774\uc2a4\ud305\ud558\ub294 pnpm\uc758 \uae30\ubcf8 \uad6c\uc131\uc5d0\uc11c\ub3c4 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0, \ubaa8\ub4e0 \ud56d\ubaa9 \ub610\ub294 \uc758\uc874\uc131\uc758 \ud558\uc704 \uc9d1\ud569\uc744 \ubaa8\ub4c8 \ub514\ub809\ud130\ub9ac\uc758 \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ubaa8\ub4e0 \ud56d\ubaa9\uc744 node_modules\uc758 \ub8e8\ud2b8\ub85c \ud638\uc774\uc2a4\ud305\ud558\uae30:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\n\ud328\ud134\uacfc \uc77c\uce58\ud558\ub294 \ud328\ud0a4\uc9c0\ub9cc \ud638\uc774\uc2a4\ud305\ud558\uae30:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/ko/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/ko","source":"@site/i18n/ko/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"\ud3c9\ud0c4\ud55c node_modules\uac00 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.","description":"pnpm\uc758 \uc2e0\uaddc \uc0ac\uc6a9\uc790\ub4e4\uc774 pnpm\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 node_modules\uc758 \ud2b9\uc774\ud55c \uad6c\uc870\uc5d0 \ub300\ud574 \uc790\uc8fc \uc9c8\ubb38\ud569\ub2c8\ub2e4. \uc65c \ud50c\ub7ab\uc774 \uc544\ub2cc\uac00\uc694? \ubaa8\ub4e0 \ud558\uc704 \uc758\uc874\uc131\ub4e4\uc740 \uc5b4\ub514\uc5d0 \uc788\ub098\uc694?","date":"2020-05-27T00:00:00.000Z","formattedDate":"2020\ub144 5\uc6d4 27\uc77c","tags":[],"readingTime":5.295,"hasTruncateMarker":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"frontMatter":{"title":"\ud3c9\ud0c4\ud55c node_modules\uac00 \uc720\uc77c\ud55c \ubc29\ubc95\uc740 \uc544\ub2d9\ub2c8\ub2e4.","author":"Zoltan Kochan","authorURL":"http://twitter.com/zoltankochan","authorImageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},"prevItem":{"title":"pnpm\uc744 \uc0ac\uc6a9\ud55c \ub178\ub4dc \ubaa8\ub4c8 \uad6c\uc131 \uc635\uc158","permalink":"/ko/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"pnpm\uc758 \uc2e0\uaddc \uc0ac\uc6a9\uc790\ub4e4\uc774 pnpm\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 `node_modules`\uc758 \ud2b9\uc774\ud55c \uad6c\uc870\uc5d0 \ub300\ud574 \uc790\uc8fc \uc9c8\ubb38\ud569\ub2c8\ub2e4. \uc65c \ud50c\ub7ab\uc774 \uc544\ub2cc\uac00\uc694? \ubaa8\ub4e0 \ud558\uc704 \uc758\uc874\uc131\ub4e4\uc740 \uc5b4\ub514\uc5d0 \uc788\ub098\uc694?\\n\\n\x3c!--truncate--\x3e\\n\\n> \uc800\ub294 \uc774 \uae30\uc0ac\uc758 \ub3c5\uc790\ub4e4\uc774 npm\uacfc Yarn\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 `node_modules`\uc5d0 \uc774\ubbf8 \uc775\uc219\ud558\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4. \ub9cc\uc57d npm 3\uc774 \ud50c\ub7ab `node_modules` \ub97c \uc0ac\uc6a9\ud558\uc5ec v3 \uc5d0\uc11c \uc2dc\uc791\ud574\uc57c \ud558\ub294 \uc774\uc720\ub97c \uc774\ud574\ud558\uc9c0 \ubabb\ud558\ub294 \uacbd\uc6b0, [\uc5d0\uc11c \uba87 \uac00\uc9c0 \uc0ac\uc804 \ud788\uc2a4\ud1a0\ub9ac\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\n\uadf8\ub7ec\uba74 \uc65c pnpm\uc758 `node_modules` \ub514\ub809\ud1a0\ub9ac\ub294 \ud2b9\uc774\ud560\uae4c\uc694? \ub450 \uac1c\uc758 \ub514\ub809\ud1a0\ub9ac\ub97c \ub9cc\ub4e4\uace0 \uadf8 \uc911 \ud558\ub098\uc5d0\uc11c `npm add express` \uc744 \uc2e4\ud589\ud558\uace0 \ub2e4\ub978 \ud558\ub098\uc5d0\uc11c `pnpm add express`\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uccab \ubc88\uc9f8 \ub514\ub809\ud1a0\ub9ac\uc758 `node_modules`\uc5d0\uc11c \uc5bb\uc744 \uc218 \uc788\ub294 \uc0c1\uc704 \ud56d\ubaa9\uc785\ub2c8\ub2e4.\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\n\uc5ec\ub7ec\ubd84\uc740 [\uc5ec\uae30](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules)\uc5d0\uc11c \uc804\uccb4 \ub514\ub809\ud1a0\ub9ac\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8\ub9ac\uace0 \uc774\uac83\uc774 pnpm\uc5d0 \uc758\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 `node_modules`\uc5d0\uc11c \uc5bb\uc740 \ud56d\ubaa9\uc785\ub2c8\ub2e4.\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\n\uc5ec\ub7ec\ubd84\uc740 [\uc5ec\uae30](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules)\uc5d0\uc11c \uc804\uccb4 \ub514\ub809\ud1a0\ub9ac\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uadf8\ub798\uc11c \ubaa8\ub4e0 \uc758\uc874\uc131\ub4e4\uc740 \uc5b4\ub514\uc5d0 \uc788\uc744\uae4c\uc694? `node_modules` \uc5d0\ub294 `.pnpm` \uc774\ub77c\ub294 \ud558\ub098\uc758 \ud3f4\ub354\ubfd0\uc774\uba70 `express`\ub77c\ub294 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub9cc \uc788\uc2b5\ub2c8\ub2e4. \uc74c, \uc6b0\ub9ac\ub294 \uc624\uc9c1 `express`\ub9cc \uc124\uce58\ud588\uc73c\ubbc0\ub85c \ub2f9\uc2e0\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uc720\uc77c\ud55c \ud328\ud0a4\uc9c0\uc785\ub2c8\ub2e4.\\n\\n> \uc65c pnpm\uc758 \uc5c4\uaca9\ud568\uc774 \uc88b\uc740\uc9c0 [\uc5ec\uae30](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\uc11c \uc790\uc138\ud788 \uc77d\uc5b4\ubcf4\uc138\uc694.\\n\\n`express`\uc548\uc5d0 \ubb34\uc5c7\uc774 \uc788\ub294\uc9c0 \ubd05\uc2dc\ub2e4.\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n  .modules.yaml\\n```\\n\\n`express` \uc5d0\ub294 `node_modules`\uac00 \uc5c6\ub124\uc694? `express`\uc758 \ubaa8\ub4e0 \uc758\uc874\uc131\ub4e4\uc740 \uc5b4\ub514\uc5d0 \uc788\uc744\uae4c\uc694?\\n\\n\ud2b8\ub9ad\uc740 `express`\uac00 \ub2e8\uc9c0 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4. Node.js\ub294 \uc758\uc874\uc131\uc744 \ud574\uacb0\ud560 \ub54c, \uc2e4\uc81c \uc704\uce58\ub97c \uc0ac\uc6a9\ud558\ubbc0\ub85c \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub97c \uc720\uc9c0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc `express`\uc758 \uc2e4\uc81c \uc704\uce58\uac00 \uc5b4\ub514\ub0d0\uace0 \ub2f9\uc2e0\uc740 \ubb3c\uc5b4\ubcfc \uc218 \uc788\uaca0\uc8e0?\\n\\n\uc5ec\uae30: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\n\uc790, \uc774\uc81c \uc6b0\ub9ac\ub294 `.pnpm/` \ud3f4\ub354\uc758 \ubaa9\uc801\uc744 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. `.pnpm/` \ub294 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub97c \ud50c\ub7ab \ud3f4\ub354 \uad6c\uc870\ub85c \uc800\uc7a5\ud558\ubbc0\ub85c \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub294 \ub2e4\uc74c \ud328\ud134\uc73c\ub85c \uc774\ub984\uc774 \uc9c0\uc815\ub41c \ud3f4\ub354\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```text\\n.pnpm/<\uc774\ub984>@<\ubc84\uc804>/node_modules/<\uc774\ub984>\\n```\\n\\n\uc6b0\ub9ac\ub294 \uc774\uac83\uc744 \uac00\uc0c1 \uc800\uc7a5\uc18c \ub514\ub809\ud1a0\ub9ac\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.\\n\\n\uc774\ub7ec\ud55c \ud3c9\ud0c4\ud55c \uad6c\uc870\ub294 npm v2\uc5d0 \uc758\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \uc911\ucca9 \ud615\uc2dd\uc758 `node_modules ` \uc5d0\uc11c\uc758 \uae34 \uacbd\ub85c \ubb38\uc81c\ub97c \ud68c\ud53c\ud558\uc9c0\ub9cc, npm v3,4,5,6 \ub610\ub294 Yarn v1\uc5d0 \uc758\ud574 \uc0dd\uc131\ub41c \ud3c9\ud0c4\ud55c `node _modules`\uc640\ub294 \ub2ec\ub9ac \ud328\ud0a4\uc9c0\ub97c \uaca9\ub9ac\ub41c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud569\ub2c8\ub2e4.\\n\\n\uc774\uc81c `express`\uc758 \uc2e4\uc81c \uc704\uce58\ub97c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\n\uc0ac\uae30\uc77c\uae4c\uc694? `node _modules`\uac00 \uc5ec\uc804\ud788 \uc5c6\ub124\uc694! pnpm\uc5d0\uc11c `node_modules` \uad6c\uc870\uc758 \ub450 \ubc88\uc9f8 \ud2b8\ub9ad\uc740 \ud328\ud0a4\uc9c0\uc758 \uc758\uc874\uc131\ub4e4\uc774 \uc758\uc874 \ud328\ud0a4\uc9c0\uc758 \uc2e4\uc81c \uc704\uce58\uc640 \ub3d9\uc77c\ud55c \ub514\ub809\ud1a0\ub9ac \ub808\ubca8\uc5d0 \uc788\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c `express`\uc758 \uc758\uc874\uc131\ub4e4\uc740 `.pnpm/express@4.17.1/node_modules/express/node_modules/`\uc5d0 \uc788\ub294 \uac83\uc774 \uc544\ub2c8\ub77c [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules)\uc5d0 \uc788\uc2b5\ub2c8\ub2e4:\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\n`express`\uc758 \ubaa8\ub4e0 \uc758\uc874\uc131\ub4e4\uc740 `node_modules/.pnpm/` \ub0b4\uc758 \uc801\uc808\ud55c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub300\ud55c \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\uc785\ub2c8\ub2e4. `express`\uc758 \uc758\uc874\uc131\ub4e4\uc744 \ud55c \ub2e8\uacc4 \uc704\ub85c \ubc30\uce58\ud558\uba74 \uc21c\ud658 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub97c \ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ubcf4\uc2dc\ub2e4\uc2dc\ud53c pnpm\uc758 `node_modules` \uad6c\uc870\uac00 \ucc98\uc74c\uc5d0\ub294 \ud2b9\uc774\ud55c \uac83 \uac19\uc8e0:\\n\\n1. Node.js\uc640 \uc644\uc804\ud788 \ud638\ud658\ub429\ub2c8\ub2e4.\\n2. \ud328\ud0a4\uc9c0\ub294 \uc758\uc874\uc131\uacfc \ud568\uaed8 \uba4b\uc9c0\uac8c \uadf8\ub8f9\ud654\ub429\ub2c8\ub2e4.\\n\\n\ud53c\uc5b4 \uc758\uc874\uc131\uc744 \uac00\uc9c4 \ud328\ud0a4\uc9c0\uc758 \uacbd\uc6b0 \uad6c\uc870\uac00 [\uc870\uae08 \ub354 \ubcf5\uc7a1](/how-peers-are-resolved)\ud558\uc9c0\ub9cc \uc0dd\uac01\uc740 \ub3d9\uc77c\ud569\ub2c8\ub2e4: \ud3c9\ud0c4\ud55c \ub514\ub809\ud1a0\ub9ac \uad6c\uc870\ub85c \uc911\ucca9\uad6c\uc870\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 \uc2ec\ubcfc\ub9ad \ub9c1\ud06c\ub97c \uc0ac\uc6a9\ud558\uae30"}]}')}}]);
#!/usr/bin/env node

import * as program from 'commander';


import { localVersion } from '../util/get-version';

// 检测版本更新
// import '../lib/error/exit';





program
    .version(localVersion, '-v, --version')
    .usage('[command] [project] [options]')
    .command('server', '开启本地服务')
    .alias('s')
    .command('compile', '编译静态文件')
    .alias('c')
    .command('deploy', '部署静态文件')
    .alias('d')
    .command('format', '格式化文件')
    .alias('f')
    .command('init', '初始化一个项目')
    .alias('i')
    .on('--help', () => {
        console.log(`
                                            __
                                        _.-~  )   jdp v${localVersion}
                            _..--~~~~,'   ,-/     _
                        .-'. . . .'   ,-','    ,' )
                        ,'. . . _   ,--~,-'__..-'  ,'
                    ,'. . .  (@)' ---~~~~      ,'
                    /. . . . '~~             ,-'
                    /. . . . .             ,-'
                ; . . . .  - .        ,'
                : . . . .       _     /
                . . . . .          \`-.:
                . . . ./  - .          )
            .  . . |  _____..---.._/ ____ ~~~ _
         ~---~~~~----~~~~             ~~
            `);
    })
    .parse(process.argv);

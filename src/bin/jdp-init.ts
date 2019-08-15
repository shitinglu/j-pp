#!/usr/bin/env node

import * as program from 'commander';
// import * as path from 'path';
import chalk from 'chalk';

import initProject from '../lib/init';


// __dirname: 当前模块的目录名
// process.cwd()返回的是当前Node.js进程执行时的工作目录
// console.log(process.cwd())
program
    .usage('<project>')
    .action((project: string): void => {
        // 创建项目名
        initProject(project);
    });

program.on('--help', () => {
    console.log('\n  举个栗子:\n');
    console.log(chalk.gray('    # 创建一个巨大的工程'));
    console.log('    $ dop init example  在当前目录创建 example 文件夹并初始化项目\n');
});

(function activeHelp() {

    program.parse(process.argv);
    // 发现参数少于1 直接走 help 帮助
    if (program.args.length < 1) {
        return program.help();
    }
})();



import * as fs from 'fs';

import * as path from 'path';

// import * as makeDir from 'make-dir';

import * as download from 'download-git-repo';

import log from '../../util/log'

const initProject = (project: string): void => {

    const dest = path.resolve(process.cwd(), project);


    if (fs.existsSync(dest)) {
        log.error(`当前目录下已存在 ${project} 目录`);
        return;
    }


    log.loading(`项目开始初始化请耐心等待....`)

    // 下载初始化项目结构和相关代码
    download('github:shitinglu/structure', dest,(err: any) => {
        if (err)
            log.error(`项目 ${project} 创建失败, 联系管理员吧: ${err.message.trim()}`)
        else
            log.success(`项目 ${project} 创建成功, 开始愉快的开发代码吧！`)

    });

}

export default initProject;


// 如果没有 就创建目录写入文件  废弃 下面直接创建了
// (async () => {
//     // const pathRoot = await makeDir(dest);
//
//     const pathSrc = await makeDir(path.resolve(`${dest}/src`));
//
//     // console.log(pathRoot);
//     console.log(pathSrc)
//     //=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'
// })();

// github:shitinglu/structure

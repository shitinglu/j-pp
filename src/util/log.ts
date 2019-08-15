
import chalk from 'chalk';



class Log {

  constructor(){

  }

  public error(text:string):void{
     console.log(chalk.redBright(`error:${text}`))
  }

  public warn(text:string):void{
     console.log(chalk.yellow(`warn:${text}`))
  }

  public success(text:string):void{
    console.log(chalk.greenBright(`success:${text}`))
  }

  public loading(text:string):void{
     console.log(chalk.yellowBright(`loading:${text}`))
  }


}


const log=new Log()

export default log;

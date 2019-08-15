declare class Log {
    constructor();
    error(text: string): void;
    warn(text: string): void;
    success(text: string): void;
    loading(text: string): void;
}
declare const log: Log;
export default log;

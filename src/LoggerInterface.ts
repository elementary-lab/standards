export interface LoggerInterface {
    profile(message: string, context?: any, category?: string): void;
    trace(message: string, context?: any, category?: string): void;
    debug(message: string, context?: any, category?: string): void;
    info(message: string, context?: any, category?: string): void;
    notice(message: string, context?: any, category?: string): void;
    warn(message: string, context?: any, category?: string): void;
    error(message: string, context?: any, category?: string): void;
    emergency(message: string, context?: any, category?: string): void;
}

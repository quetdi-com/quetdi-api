export declare class ServiceLocator {
    private static _instance;
    private services;
    private constructor();
    static get instance(): ServiceLocator;
    private getServiceKey;
    register<T>(ctor: {
        new (...args: any[]): T;
    }, service: () => T, name?: string): void;
    get<T>(ctor: {
        new (...args: any[]): T;
    }, name?: string): T;
}

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unnecessary-condition */
export class ServiceLocator {
  private static _instance: ServiceLocator;
  private services: Map<string, any> = new Map<string, any>();

  private constructor() {
  } // Private constructor to ensure singleton

  public static get instance(): ServiceLocator {
    if (!ServiceLocator._instance) {
      ServiceLocator._instance = new ServiceLocator();
    }

    return ServiceLocator._instance;
  }

  private getServiceKey<T>(ctor: { new(...args: any[]): T }, name?: string): string {

    return name ? `${ctor.name}:${name}` : `${ctor}`;
  }

  public register<T>(ctor: { new(...args: any[]): T }, service: () => T, name?: string): void {
    const key = this.getServiceKey(ctor, name);

    this.services.set(key, service());
  }

  public get<T>(ctor: { new(...args: any[]): T }, name?: string): T {
    const key = this.getServiceKey(ctor, name);
    const service = this.services.get(key);

    if (!service) {
      throw new Error(`Service for ${name ? `${ctor.name} with name ${name}` : ctor.name} not found.`);
    }

    return service;
  }
}

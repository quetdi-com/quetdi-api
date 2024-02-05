"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLocator = void 0;
class ServiceLocator {
    constructor() {
        this.services = new Map();
    }
    static get instance() {
        if (!ServiceLocator._instance) {
            ServiceLocator._instance = new ServiceLocator();
        }
        return ServiceLocator._instance;
    }
    getServiceKey(ctor, name) {
        return name ? `${ctor.name}:${name}` : `${ctor}`;
    }
    register(ctor, service, name) {
        const key = this.getServiceKey(ctor, name);
        this.services.set(key, service());
    }
    get(ctor, name) {
        const key = this.getServiceKey(ctor, name);
        const service = this.services.get(key);
        if (!service) {
            throw new Error(`Service for ${name ? `${ctor.name} with name ${name}` : ctor.name} not found.`);
        }
        return service;
    }
}
exports.ServiceLocator = ServiceLocator;
//# sourceMappingURL=service-locator.js.map
import { AuthUsecase } from '../usecases/auth.usecase';
export declare class AuthService implements AuthUsecase {
    login(idToken: string): Promise<string>;
}

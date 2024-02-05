import { AuthUsecase } from '../usecases/auth.usecase';

export class AuthService implements AuthUsecase{
  login(idToken: string): Promise<string> {
    return Promise.resolve('');
  }
}

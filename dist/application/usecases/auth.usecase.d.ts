export interface AuthUsecase {
    login: (idToken: string) => Promise<string>;
}

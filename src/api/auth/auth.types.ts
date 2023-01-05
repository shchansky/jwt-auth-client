export interface ILoginRequest {
  login: string;
  password: string;
}

export interface ILoginResponse {
  /**
   * Токен доступа, с помощью которого будут подписываться все запросы (будет храниться в приложении, в localStorage).
   * RefreshToken будет храниться в cookie (в localStorage хранить небезопасно, т.к. все скрипты приложения будут иметь к нему доступ)
   */
  accessToken: string;
}

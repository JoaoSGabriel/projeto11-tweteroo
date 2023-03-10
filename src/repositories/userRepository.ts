import { Usuario } from "../models/Usuarios";

export class UserRepository {
  private users: Usuario[];
  private static INSTANCE: UserRepository;

  constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new UserRepository();
    }

    return this.INSTANCE;
  }

  create({ username, avatar }: Usuario) {
    const user: Usuario = new Usuario(username, avatar);
    this.users.push({ username, avatar });
  }

  getLoggedUser(username: string): Usuario {
    const user = this.users.find((value) => value.username === username);

    if (!user) {
      throw new Error("User não existe!");
    }

    return user;
  }
}

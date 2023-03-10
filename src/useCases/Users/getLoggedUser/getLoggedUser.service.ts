import { Usuario } from "../../../models/Usuarios";
import { UserRepository } from "../../../repositories/userRepository";

export class GetLoggedUserService {
  constructor(private userRespository: UserRepository) {}

  execute(username: string): Usuario {
    return this.userRespository.getLoggedUser(username);
  }
}

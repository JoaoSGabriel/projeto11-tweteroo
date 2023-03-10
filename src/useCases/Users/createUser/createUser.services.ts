import { Usuario } from "../../../models/Usuarios";
import { UserRepository } from "../../../repositories/userRepository";

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  execute({ username, avatar }: Usuario): void {
    if (!username || !avatar) {
      throw new Error("É necessário enviar todos os campos!");
    }

    /*if (this.usuarios.find((value) => value.username === username)) {
      return res.status(400).send({ error: "Esta conta já existe!" });
    } */

    this.userRepository.create({ username, avatar });
  }
}

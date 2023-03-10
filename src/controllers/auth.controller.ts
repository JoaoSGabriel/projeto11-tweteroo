import { Request, Response } from "express";
import { Usuario } from "../models/Usuarios";

class AuthController {
  private usuarios: Usuario[];

  constructor() {
    this.usuarios = [];
    this.signin = this.signin.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  signin(req: Request, res: Response): Response {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
      return res.status(400).send({ error: "Envie todos os campos" });
    }

    if (this.usuarios.find((value) => value.username === username)) {
      return res.status(400).send({ error: "Esta conta já existe!" });
    }

    this.usuarios.push({
      username,
      avatar,
    });

    return res.status(201).send("OK");
  }

  getLoggedUser(username: string): Usuario {
    const user = this.usuarios.find((value) => value.username === username);

    if (!user) {
      throw new Error("User não existe!");
    }

    return user;
  }
}

export default new AuthController();

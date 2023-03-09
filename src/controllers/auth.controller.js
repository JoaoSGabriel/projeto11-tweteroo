class AuthController {
  constructor() {
    this.usuarios = [];
    this.signin = this.signin.bind(this);
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  signin(req, res) {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
      return res.status(400).send({ error: "Envie todos os campos" });
    }

    //if (usuarios.find((value) => value.username === username)) {
    //  return res.status(400).send({ error: "Esta conta já existe!" });
    //}

    this.usuarios.push({
      username,
      avatar,
    });

    res.status(201).send("OK");
  }

  getLoggedUser(username) {
    return this.usuarios.find((value) => value.username === username);
  }
}

export default new AuthController();

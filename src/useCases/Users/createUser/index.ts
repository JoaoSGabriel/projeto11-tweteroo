import { UserRepository } from "../../../repositories/userRepository";
import CreateUserController from "./createUser.controller";
import { CreateUserService } from "./createUser.services";

const userRepository = UserRepository.getInstance();
const createUserService = new CreateUserService(userRepository);
export const createUserController = new CreateUserController(createUserService);

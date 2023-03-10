import { UserRepository } from "../../../repositories/userRepository";
import { GetLoggedUserService } from "./getLoggedUser.service";

const userRepository = UserRepository.getInstance();
export const getLoggedUserService = new GetLoggedUserService(userRepository);

import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
import { ListUsersController } from "../modules/users/useCases/listUsers/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", listUsersController.handler);

usersRoutes.delete("/:id", deleteUserController.handle);

usersRoutes.get("/:id", listUsersController.handler);

export { usersRoutes };

import { Router } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import multer from "multer";

import { CreateAnswerController } from "../modules/users/useCases/createAnswer/CreateAnswerController";
import { DeleteAnswerController } from "../modules/users/useCases/deleteAnswer/DeleteAnswerController";
// import { ImportAnswersController } from "../modules/answers/useCases/importAnswer/importAnswersController";
import { ListAnswerController } from "../modules/users/useCases/listAnswer/ListAnswerController";

const answersRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createAnswerController = new CreateAnswerController();
const listAnswersController = new ListAnswerController();
// const importAnswersController = new ImportAnswersController();
const deleteAnswerController = new DeleteAnswerController();

answersRoutes.post("/", createAnswerController.handle);

answersRoutes.get("/", listAnswersController.handle);

// answersRoutes.post(
//     "/import",
//     upload.single("file"),
//     importAnswersController.handler
// );

answersRoutes.delete("/:id", deleteAnswerController.handle);

export { answersRoutes };

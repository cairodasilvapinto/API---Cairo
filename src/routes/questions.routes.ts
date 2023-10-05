import { Router } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import multer from "multer";

import { CreateQuestionController } from "../modules/users/useCases/createQuestion/CreateQuestionController";
import { DeleteQuestionController } from "../modules/users/useCases/deleteQuestion/DeleteQuestionController";
// import { ImportQuestionsController } from "../modules/questions/useCases/importQuestion/importQuestionsController";
import { ListQuestionController } from "../modules/users/useCases/listQuestion/ListQuestionController";

const questionsRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createQuestionController = new CreateQuestionController();
const listQuestionsController = new ListQuestionController();
// const importQuestionsController = new ImportQuestionsController();
const deleteQuestionController = new DeleteQuestionController();

questionsRoutes.post("/", createQuestionController.handle);

questionsRoutes.get("/", listQuestionsController.handle);

// questionsRoutes.post(
//     "/import",
//     upload.single("file"),
//     importQuestionsController.handler
// );

questionsRoutes.delete("/:id", deleteQuestionController.handle);

export { questionsRoutes };

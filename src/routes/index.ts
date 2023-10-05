import { Router } from "express";

import { answersRoutes } from "./answers.routes";
import { profilesRoutes } from "./profiles.routes";
import { questionsRoutes } from "./questions.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/profiles", profilesRoutes);
router.use("/answers", answersRoutes);
router.use("/questions", questionsRoutes);

export { router };

import { Router } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import multer from "multer";

import { CreateProfileController } from "../modules/users/useCases/createProfile/CreateProfileController";
import { DeleteProfileController } from "../modules/users/useCases/deleteProfile/DeleteProfileController";
import { ImportProfilesController } from "../modules/users/useCases/importProfile/importProfilesController";
import { ListProfilesController } from "../modules/users/useCases/listProfiles/ListProfilesController";

const profilesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createProfileController = new CreateProfileController();
const listProfilesController = new ListProfilesController();
const importProfilesController = new ImportProfilesController();
const deleteProfileController = new DeleteProfileController();

profilesRoutes.post("/", createProfileController.handle);

profilesRoutes.get("/", listProfilesController.handler);

profilesRoutes.post(
    "/import",
    upload.single("file"),
    importProfilesController.handler
);

profilesRoutes.delete("/:id", deleteProfileController.handle);

export { profilesRoutes };

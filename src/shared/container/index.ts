// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { ProfilesRepository } from "../../modules/users/repositories/implementations/ProfilesRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IProfilesRepository } from "../../modules/users/repositories/IProfilesRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { AnswersRepository} from "../../modules/users/repositories/implementations/AnswersRepository";
import { IAnswersRepository } from "../../modules/users/repositories/IAnswersRepository";
import { QuestionsRepository } from "../../modules/users/repositories/implementations/QuestionsRepository";
import { IQuestionsRepository } from "../../modules/users/repositories/IQuestionsRepository";

container.registerSingleton<IProfilesRepository>(
    "ProfilesRepository",
    ProfilesRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IAnswersRepository>(
    "AnswersRepository",
    AnswersRepository
);

container.registerSingleton<IQuestionsRepository>(
    "QuestionsRepository",
    QuestionsRepository
);
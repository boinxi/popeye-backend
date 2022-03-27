import {queryHasura} from "../../services/hasura_service";
import {addUserQuery, getUserByUsernameQuery} from "./user_queries";
import {User} from "../../entities/User";

export const postUser = async (username: String, password: String): Promise<string> => {

    const result = await queryHasura(addUserQuery, {"object": {username, password}});

    return result.insert_users_one.id;
}

export const getUserByUsername = async (username: String): Promise<User> => {
    const result = await queryHasura(getUserByUsernameQuery, {username});

    return result.users[0];
}

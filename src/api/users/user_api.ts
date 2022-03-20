import {queryHasura} from "../../services/hasura_service";
import {addUserQuery} from "./user_queries";

export const postUser = async (username: String, password: String): Promise<string> => {

    const result =
        await queryHasura(addUserQuery, {"object": {username, password}});

    return result.insert_users_one.id;
}

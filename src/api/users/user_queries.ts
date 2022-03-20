import {gql} from "graphql-request";

export const addUserQuery = gql`
    mutation MyMutation($object: users_insert_input!) {
        insert_users_one(object: $object) {
            id
        }
    }
`;

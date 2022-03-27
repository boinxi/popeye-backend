import {gql} from "graphql-request";

export const addUserQuery = gql`
    mutation MyMutation($object: users_insert_input!) {
        insert_users_one(object: $object) {
            id
        }
    }
`;

export const getUserByUsernameQuery = gql`
    query MyQuery($username: String!) {
        users(where: {username: {_eq: $username}}) {
            id
            password
            username
        }
    }`;

import gql from 'graphql-tag';

export const CreateUser = gql`
    mutation createUser($input: CreateUserInput!) {
        createUser(input: $input) {
            state
            errors
        }
    }
`;

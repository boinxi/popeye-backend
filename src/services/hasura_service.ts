import {GraphQLClient} from 'graphql-request'

const endpoint = 'https://popeye-hasura.herokuapp.com/v1/graphql';
const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFkbWluLXNlY3JldCI6Im1EaEVxeFlxVGVCUWVkTWFaSXFnRDNKYTZ1VGgwdmtxIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJhZG1pbiIsInVzZXIiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYWRtaW4ifX0.CvgtXdxtAoYALnYKJ_IoGIdw72lEMvcqJMhFtxnK9Gw'; // this is secret
const hasuraClient: GraphQLClient = new GraphQLClient(endpoint, {
    headers: {
        'authorization': `Bearer ${adminToken}`,
        'Cache-Control': 'no-cache'
    },
});

export const queryHasura = async (query: string, vars = {}) => {
    return await hasuraClient.request(query, vars);
}

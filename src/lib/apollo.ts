import { ApolloClient, InMemoryCache } from "@apollo/client";

export const  client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otyphb0y0701xtaegz95mr/master',
    cache: new InMemoryCache()
})
//*****************************************************************Any file inside the folder pages/api is maped to /api/* and will be treated as an API endpoint instead of a page */

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHMS_ENDPOINT;

export default async function comments(req, res) {
  const client = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await client.request(query, req.body);

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
}

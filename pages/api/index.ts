import { createServer } from "@graphql-yoga/node";
import { NextApiRequest, NextApiResponse } from "next";

const server = createServer<{ req: NextApiRequest; res: NextApiResponse }>({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        results: [String]
      }
    `,
    resolvers: {
      Query: {
        results: () => ["React", "Apollo", "Next.js", "graphql.wtf"],
      },
    },
  },
  cors: false,
  endpoint: "/api",
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default server.requestListener;

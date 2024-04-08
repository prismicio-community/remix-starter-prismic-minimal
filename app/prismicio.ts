import * as prismic from "@prismicio/client";
import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 */
const routes: prismic.ClientConfig["routes"] = [
  { type: "page", path: "/", uid: "home" },
  { type: "page", path: "/:uid" },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismic.ClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint || repositoryName, {
    routes,
    ...config,
  });

  return client;
};

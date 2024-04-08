import { SliceZone } from "@prismicio/react";
import { HeadersFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { createClient } from "~/prismicio";
import { components } from "~/slices";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.uid) {
    throw new Error("Missing UID.");
  }

  const client = createClient();
  const page = await client.getByUID("page", params.uid);

  return json(
    { page },
    {
      headers: {
        "Cache-Control":
          "s-max-age=2592000, stale-while-revalidate=86400, stale-if-error=604800",
      },
    }
  );
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control":
      "s-max-age=2592000, stale-while-revalidate=86400, stale-if-error=604800",
  };
};

export default function Index() {
  const { page } = useLoaderData<typeof loader>();

  return <SliceZone slices={page.data.slices} components={components} />;
}

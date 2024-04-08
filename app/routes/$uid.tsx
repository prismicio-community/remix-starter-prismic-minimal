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

  return json({ page });
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "public, max-age=300, s-maxage=3600",
  };
};

export default function Index() {
  const { page } = useLoaderData<typeof loader>();

  return <SliceZone slices={page.data.slices} components={components} />;
}

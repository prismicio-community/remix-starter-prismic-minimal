import { SliceZone } from "@prismicio/react";
import { HeadersFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { createClient } from "~/prismicio";
import { components } from "~/slices";

export const loader = async () => {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return json({ page });
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

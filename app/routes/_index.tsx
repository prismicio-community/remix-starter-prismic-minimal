import { SliceZone } from "@prismicio/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { createClient } from "~/prismicio";
import { components } from "~/slices";

export const loader = async () => {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return json({ page });
};

export default function Index() {
  const { page } = useLoaderData<typeof loader>();

  return <SliceZone slices={page.data.slices} components={components} />;
}

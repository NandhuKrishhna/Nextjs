import React from "react";
import { notFound } from "next/navigation";

export const dynamicParams = false;
export async function generateStaticParams() {
  // return [{ id: "1" }, { id: "2" }, { id: "3" }];
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.map(({ id }) => ({
    id: `${id}`,
  }));
}
const page = async ({ params }) => {
  console.log("[PARAMS]", await params);
  const { id } = await params;
  if (isNaN(id)) {
    notFound();
  }

  return <div>BLOG :{id}</div>;
};

export default page;

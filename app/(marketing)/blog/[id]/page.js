import React from "react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
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

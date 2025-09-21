import React from "react";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  console.log("[PARAMS]", await params);
  const { id } = await params;
  if (isNaN(id)) {
    notFound();
  }

  return <div>BLOG :{id}</div>;
};

export default page;

import React from "react";

const page = async ({ params }) => {
  console.log("[PARAMS]", await params);
  const { id } = await params;
  return <div>BLOG :{id}</div>;
};

export default page;

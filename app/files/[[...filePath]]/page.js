export default async function File({ params }) {
  console.log(await params);
  const { filePath } = await params;
  return <div>File : {filePath.join("/")}</div>;
}

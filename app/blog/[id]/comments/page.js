export default async function ({ params }) {
  const paramObject = await params;
  console.log(paramObject);
  return (
    <div>
      <h1>This is Comment Section</h1>
    </div>
  );
}

export default async function BlogPost({ params }) {
  const { id, comment } = await params;

  return (
    <div>
      <h1>Post: {id}</h1>
      <p>Category: {comment}</p>
    </div>
  );
}

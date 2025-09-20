import Link from "next/link";

export default async function Home({ searchParams, params }) {
  console.log(await searchParams);
  console.log(await params);
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/about">About</Link>
    </div>
  );
}

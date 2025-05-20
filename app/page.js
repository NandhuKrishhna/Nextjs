import Link from "next/link";


export default async function Home({ searchParams, params }) {
  console.log(await searchParams)
  return (
    <>
      <h1>Welcome to my home</h1>
      <Link href={'/about'}>About</Link> <Link href={'/services'}>Services</Link>
    </>
  );
}

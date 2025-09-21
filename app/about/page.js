import Link from "next/link";

export const metadata = {
  title: "ABOUT",
};
export default function AboutPage() {
  return (
    <div>
      <h1>This is about page</h1>
      <Link href="/">HOME</Link>
    </div>
  );
}

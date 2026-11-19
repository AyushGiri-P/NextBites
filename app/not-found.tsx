import Link from "next/link";

export default function NotFound() {
  return (
    <main className="home">
      <h1>Recipe Not Found!</h1>
      <p>Sorry, we couldn't find the recipe you're looking for.</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
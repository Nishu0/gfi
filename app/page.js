import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to my website!</h1>
      <p>Check out some <Link href="/gfi"></Link> on GitHub.</p>
    </main>
  );
}

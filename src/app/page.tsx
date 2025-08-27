import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Link href="/fullcard">Full Card</Link>
      <Link href="/avatars">Avatar Chat</Link>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <Link
      href="/posts"
      className="p-3  capitalize bold text-xl bg-[#EF5A6F] text-white"
    >
      Go to posts
    </Link>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5 text-white-custom">
      <div className="text-center">
        <h2 className="text-5xl font-medium mb-1">Not Found 🤨</h2>
        <p>Could not find requested page</p>
      </div>
      <Link href="/">
        Return <span className="text-ascent">Home</span>
      </Link>
    </div>
  );
}

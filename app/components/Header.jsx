"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="py-10 border-b-[1px] border-b-[rgba(255,255,255,0.5)]">
      <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/anrazzi-logo-transp.png"
              alt="White geometric form representing Anrazzi's logo"
              width="148"
              height="148"
              className="w-16 h-16"
            />
            <p className="text-xl font-bold">Anrazzi</p>
          </Link>
        </div>
        <nav>
          <ul className="flex justify-center gap-10">
            <li className={`py-1 ${pathname == "/" ? "border-b-[1px]" : ""}`}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={`py-1 ${pathname == "/store" ? "border-b-[1px]" : ""}`}
            >
              <Link href="/store">Store</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <Image
              src="/images/icon-basket.png"
              alt="Basket Icon"
              width="25"
              height="26"
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/icon-user.png"
              alt="User Icon"
              width="25"
              height="26"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

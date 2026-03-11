import Link from "next/link";
import Nav from "./navbar/components/nav";
import { Button } from "./ui/button";
import MobileNav from "./navbar/components/mobile-nav";

const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-0">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Johnsen<span className="text-primary">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden lg:flex items-center gap-x-8">
          <Nav />
          <Link href="/contact">
            <Button className="rounded-full px-5">Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

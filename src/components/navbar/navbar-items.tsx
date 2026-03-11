import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./navbar-links";

const NavbarItems = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-x-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-lg font-medium hover:text-primary transition-colors ${pathname === link.href ? "text-primary/70" : ""}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavbarItems;

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarItems = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Resume",
      href: "/resume",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="flex flex gap-x-8">
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

import Link from "next/link";
import { socialItems } from "../social-items";

const Social = () => {
  return (
    <div className="flex gap-x-3">
      {socialItems.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className="
          w-9 h-9 border border-primary/70 rounded-full 
          flex justify-center items-center text-primary 
          hover:bg-primary/20 transition-all duration-500"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

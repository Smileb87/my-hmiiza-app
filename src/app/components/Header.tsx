import Link from "next/link";
import { FaUser } from "react-icons/fa"; // Import the user icon

const Header: React.FC = () => {
  return (
    <header className="bg-black text-gold py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          {/* Place the link text directly inside the Link component */}
          <img src="/images/logo.png" alt="Hmiiza Logo" className="h-13" />
        </Link>
        <ul className="flex space-x-4 items-center">
          <li className="mr-4">
            <Link href="/account">
              <span className="flex flex-col items-center hover:underline">
                <FaUser className="mb-1 text-2xl" /> {/* Increase icon size */}
                <span className="text-xs text-center">Mon Compte</span>{" "}
                {/* Center text */}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gold py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-sm">© 2023 Hmiiza. Tous droits réservés.</p>
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy-policy">
                <span className="hover:underline">
                  Politique de confidentialité
                </span>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service">
                <span className="hover:underline">
                  Conditions d'utilisation
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <span className="hover:underline">Contactez-nous</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

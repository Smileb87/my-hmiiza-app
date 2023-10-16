import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ol>
        <li>
          <a href="http://google.com">Accueil</a>
          <a href="http://google.com">Produits</a>
          <a href="http://google.com">Panier</a>
          <a href="http://google.com">Ajouter un produit</a>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;

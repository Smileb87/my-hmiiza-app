import Link from "next/link";

export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-gold">Bienvenue sur Hmiiza</h1>
        <p className="mt-4 text-lg text-gray-300">
          Votre destination unique pour des produits de qualité.
        </p>
      </div>
    </main>
  );
}

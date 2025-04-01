import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Zjistěte, kdo vám volá</h1>
        <p className="text-gray-600 mb-8">
          Okamžité reverzní vyhledávání telefonních čísel a e-mailů z veřejných zdrojů.
        </p>
        <div className="bg-white p-6 rounded shadow-lg">
          <input
            placeholder="Zadejte telefonní číslo nebo e-mail"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Vyhledat
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          První výsledek zdarma. Podrobnosti k dispozici po zaplacení.
        </p>
      </div>
    </div>
  );
}
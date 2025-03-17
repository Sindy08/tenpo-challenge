import React from "react";
import { useHome } from "../hooks/useHome";
import ItemGrid from "../components/ItemGrid";
import Pagination from "../components/Pagination";

const HomePage: React.FC = () => {
  const { items, displayItems, loading, error, currentPage, totalPages, handlePageChange } = useHome();

  return (
    <div className="min-h-screen p-4 max-w-7xl mx-auto my-0">
      <h1 className="text-2xl font-bold text-white">Miradas Colectivas</h1>
      <h2 className="text-white font-semibold pb-3">¡Donde cada mirada cuenta una historia!</h2>

      {loading && <p className="text-center">Cargando datos...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <ItemGrid displayItems={displayItems} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        displayItemsLength={displayItems.length}
        itemsLength={items.length}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
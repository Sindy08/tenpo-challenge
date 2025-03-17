import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  displayItemsLength: number;
  itemsLength: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  displayItemsLength,
  itemsLength,
  handlePageChange,
}) => {
  return (
    <>
      <small className="text-center text-white mb-4">
        Mostrando {displayItemsLength} de {itemsLength} elementos - Página {currentPage} de {totalPages}
      </small>

      <div className="flex justify-center mt-8 space-x-1 md:space-x-2">
        <button
          className="px-2 py-1 bg-[#03ff94] font-semibold rounded border hover:bg-[#6affc1] cursor-pointer disabled:cursor-auto disabled:bg-gray-400 md:px-3 md:py-2"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          Primera
        </button>
        <button
          className="px-2 py-1 bg-[#03ff94] font-semibold rounded border hover:bg-[#6affc1] cursor-pointer disabled:cursor-auto disabled:bg-gray-400 md:px-3 md:py-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {[...Array(5)].map((_, i) => {
          const pageNum = currentPage - 2 + i;
          return pageNum > 0 && pageNum <= totalPages ? (
            <button
              key={pageNum}
              className={`px-2 py-1 rounded cursor-pointer border md:px-3 md:py-2 ${
                currentPage === pageNum
                  ? "bg-black text-[#03ff94] border-[#03ff94]"
                  : "bg-[#03ff94] hover:border hover:border-[#03ff94] hover:bg-black hover:text-[#03ff94]"
              }`}
              onClick={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </button>
          ) : null;
        })}
        <button
          className="px-2 py-1 bg-[#03ff94] font-semibold rounded border hover:bg-[#6affc1] cursor-pointer disabled:cursor-auto disabled:bg-gray-400 md:px-3 md:py-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
        <button
          className="px-2 py-1 bg-[#03ff94] font-semibold rounded border hover:bg-[#6affc1] cursor-pointer disabled:cursor-auto disabled:bg-gray-400 md:px-3 md:py-2"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Última
        </button>
      </div>
    </>
  );
};

export default Pagination;
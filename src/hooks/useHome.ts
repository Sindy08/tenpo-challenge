import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosConfig";

export interface Item {
  id: number;
  title: string;
  body?: string;
}

const itemsPerPage = 22;

export const useHome = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [displayItems, setDisplayItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/picsum/list?page=2&limit=100");
      const apiItems = response.data;
      const generatedItems: Item[] = [];
      const multiplier = Math.ceil(2000 / apiItems.length);

      for (let i = 0; i < multiplier; i++) {
        apiItems.forEach((item: any, index: number) => {
          if (generatedItems.length < 2000) {
            generatedItems.push({
              id: i * apiItems.length + index + 1,
              title: item.author,
              body: item.download_url,
            });
          }
        });
      }

      const finalItems = generatedItems.slice(0, 2000);
      setItems(finalItems);
      updateDisplayItems(finalItems, 1);
    } catch (err) {
      setError("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  const updateDisplayItems = (allItems: Item[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    setDisplayItems(allItems.slice(startIndex, startIndex + itemsPerPage));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateDisplayItems(items, page);
    window.scrollTo(0, 0);
  };

  return {
    items,
    displayItems,
    loading,
    error,
    currentPage,
    totalPages: Math.ceil(items.length / itemsPerPage),
    handlePageChange,
  };
};

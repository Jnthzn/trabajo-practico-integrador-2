import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, { credentials: "include" });

      if (!response.ok) {
        if (response.status === 401) throw new Error("No autorizado (401)");
        if (response.status === 403) throw new Error("Acceso prohibido (403)");
        if (response.status === 500)
          throw new Error("Error interno del servidor (500)");
        throw new Error(`Error de servidor: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Error al obtener los datos");
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};

import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulamos una función que retorna una promesa
  const getData = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve("¡Datos cargados!");
      }, 10000); // Simula un retraso de 2 segundos
    });
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await getData();
      setData(result);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return <div>{data}</div>;
};

export default App;


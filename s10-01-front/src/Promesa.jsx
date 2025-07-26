import React, { useEffect, useState } from 'react';

const ConsultaPromesa = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPokemons = () => {
        // La función fetch devuelve una Promise
        return new Promise((resolve, reject) => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=4000&offset=0')
                .then(response => {
                    if (!response.ok) {
                        // Si la respuesta no es correcta, se rechaza la Promise
                        reject(new Error('Error en la llamada a la API')); // reject
                    }
                    // response.json() también devuelve una Promise
                    return response.json(); // Esta Promise se resuelve con los datos JSON
                })
                .then(data => {
                    // Aquí se resuelve la Promise con los datos
                    setPokemons(data.results); // resolve
                    resolve(data.results); // resolve
                })
                .catch(err => {
                    // Manejo de errores en la Promise
                    setError(err.message); // Si hay un error, se puede rechazar la Promise
                    reject(err); // reject
                })
                .finally(() => {
                    // Se ejecuta al final de la Promise, independientemente del resultado
                    setLoading(false); // Finaliza la carga
                });
        });

    };

    /*
    const fetchPokemons = () => {
      // La función fetch devuelve una Promise
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la llamada a la API');
                }
                // response.json() también devuelve una Promise
                return response.json();
            })
            .then(data => {
                // Aquí se resuelve la Promise con los datos
                setPokemons(data.results);
            })
            .catch(err => {
                // Manejo de errores en la Promise
                setError(err.message);
            })
            .finally(() => {
                // Se ejecuta al final de la Promise, independientemente del resultado
                setLoading(false);
            });
    };
    */

    useEffect(() => {
        fetchPokemons();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Lista de Pokemones usando Promise</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name}>
                        <a href={pokemon.url}>{pokemon.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultaPromesa;

import React, { useEffect, useState } from 'react';

const ConsultaAsincrona = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPokemons = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0');
            if (!response.ok) {
                throw new Error('Error en la llamada a la API');
            }
            const data = await response.json();
            setPokemons(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

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
            <h1>Lista de Pokemones ( Usando Async/Await )</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name}>
                        <a href={pokemon.url}>{pokemon.name} </a>- {pokemon.url}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultaAsincrona;

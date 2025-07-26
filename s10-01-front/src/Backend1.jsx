import React, { useState, useEffect } from 'react';

function EjemploBackend1() {
    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    // INvocacion a la API
    const [query, setQuery] = useState('');
    // Guardar resultados de la API
    const [result, setResult] = useState(null);
    // Manejar  loading y errors
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Effect ocurre cuando cambia query
    useEffect( () => {
        const fetchData = async () => {
            // Si query es vacio
            if (!query) return;

            setLoading(true);
            setError(null);

            // Invocar a la API
            fetch('http://localhost:3000/api/saludo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(query),
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('OCurrio un error en la comunicacion.');
                    }
                    return response.json();
                })
                .then((data) => {
                    setResult(data);
                    console.log(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        };
        
        fetchData();

    }, [query]);

    // Manejar el Submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene la navegación a la URL del enlace

        // Crear objeto con datos del formulario
        const datosFormulario = {
            nombre: nombre,
            email: email,
        };

        setQuery(datosFormulario);
        console.log(datosFormulario);
    };

    return (
        <div style={{ maxWidth: '30%', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
            <h2>Consulta al Backend</h2>
            <form onSubmit={handleSubmit} >
                <label>Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit"
                    style={{
                        padding: '0 1rem',
                        backgroundColor: '#007bff',
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        borderRadius: '4px'
                    }}>
                    Consultar
                </button>
            </form>

            <div>
                {loading && <p style={{ color: '#007bff' }}> Cargando... </p>}
                {error && <p style={{ color: 'red' }}> Error: {error}  </p>}
                {result && !loading && !error && (
                    <div style={{ color: 'darkgreen' }}>
                        <p>RPTA : <strong style={{ fontSize: '12px' }}>{result.mensaje}</strong>:</p>
                    </div>

                )}
            </div>
        </div>
    );
}

export default EjemploBackend1;


import { useEffect, useState } from 'react';
import ProductoCard from '../components/productoCard.jsx';
import { apiDummy } from '../services/apiDummy.js';

function Vitrina() {
    // La lista empieza vacia y se llena cuando responde la API.
    const [productos, setProductos] = useState([]);

    // Al abrir la pagina, limit: 0 pide todos los productos de la categoría.
    useEffect(() => {
    apiDummy.get('', { params: { limit: 0 } })
        .then(({ data }) => setProductos(data.products))
        .catch((error) => console.error(error));
    }, []);

    return (
        <section className="vitrina">
        {/* Se crea una tarjeta por producto y se usa su id como clave */}
        {productos.map((producto) => (
            <ProductoCard 
            key={producto.id} 
            producto={producto} />
        ))}
        </section>
    );
}

export default Vitrina;

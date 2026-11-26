import { useEffect, useState } from 'react';
import ProductoCard from '../components/productoCard.jsx';
import { apiDummy } from '../services/apiDummy.js';

function Vitrina() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    apiDummy.get('', { params: { limit: 0 } })
        .then(({ data }) => setProductos(data.products))
        .catch((error) => console.error(error));
    }, []);

    return (
        <section className="vitrina">
        {productos.map((producto) => (
            <ProductoCard 
            key={producto.id} 
            producto={producto} />
        ))}
        </section>
    );
}

export default Vitrina;

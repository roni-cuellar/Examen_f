import { useCanasta } from '../store/useCanasta.js';

function ProductoCard({ producto }) {
    // Trae de Zustand la funciom que agrega este producto a la canast
    const agregar = useCanasta((estado) => estado.agregar);

    return (
        <article className="producto-card">
        {/* La imagen, el nombre, la descripción y el precio vienen de la API */}
        <img src={producto.thumbnail} alt={producto.title} width="120" />
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p className="producto-card-precio">${producto.price}</p>
        <button type="button" onClick={() => agregar(producto)}>Agregar a la canasta</button>
        </article>
    );
}

export default ProductoCard;

function ProductoCard({ producto }) {
    return (
        <article className="producto-card">
        <img src={producto.thumbnail} alt={producto.title} width="120" />
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p className="producto-card-precio">${producto.price}</p>
        </article>
    );
}

export default ProductoCard;

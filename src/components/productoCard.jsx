function ProductoCard({ producto }) {
    return (
        <article>
        <img src={producto.thumbnail} alt={producto.title} width="120" />
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p>${producto.price}</p>
        </article>
    );
}

export default ProductoCard;

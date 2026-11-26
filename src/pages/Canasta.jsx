import { useCanasta } from '../store/useCanasta.js';

function Canasta() {
    const productos = useCanasta((estado) => estado.productos);
    const quitar = useCanasta((estado) => estado.quitar);
    // Suma el precio de cada producto multiplicado por su cantidad.
    const total = productos.reduce((suma, producto) => suma + producto.price * producto.cantidad, 0);

    return (
        <section className="panel-compras">
            <h2>Mi canasta</h2>
            {/* Si la canasta esta vacia, se muestra un mensaje. */}
            {productos.length === 0 ? (
                <p>Tu canasta está vacía.</p>
            ) : (
                <>
                    <ul>
                        {productos.map((producto) => (
                            <li key={producto.id}>
                                {producto.title} · {producto.cantidad} × ${producto.price.toFixed(2)}{' '}
                                <button type="button" onClick={() => quitar(producto.id)}>Quitar uno</button>
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total ${total.toFixed(2)}</strong></p>
                </>
            )}
        </section>
    )
}

export default Canasta

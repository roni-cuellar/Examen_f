import { useCanasta } from '../store/useCanasta.js';

function Canasta() {
    const productos = useCanasta((estado) => estado.productos);
    const quitar = useCanasta((estado) => estado.quitar);
    const total = productos.reduce((suma, producto) => suma + producto.price * producto.cantidad, 0);

    return (
        <section className="panel-compras">
            <h2>Mi canasta</h2>
            {productos.length === 0 ? (
                <p>Tu canasta está vacía.</p>
            ) : (
                <>
                    <ul>
                        {productos.map((producto) => (
                            <li key={producto.id}>
                                {producto.title} · {producto.cantidad} × ${producto.price.toFixed(2)}{' '}
                                <button type="button" onClick={() => quitar(producto.id)}>Quitar una unidad</button>
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

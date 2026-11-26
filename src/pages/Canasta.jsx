import { useCanasta } from '../store/useCanasta.js';

function Canasta() {
    const productos = useCanasta((estado) => estado.productos);
    const quitar = useCanasta((estado) => estado.quitar);
    const agregar = useCanasta((estado) => estado.agregar);
    const eliminar = useCanasta((estado) => estado.eliminar);
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
                    <ul className="lista-canasta">
                        {productos.map((producto) => (
                            <li key={producto.id}>
                                <img src={producto.thumbnail} alt="" width="64" />
                                <div><strong>{producto.title}</strong></div>
                                <p>${producto.price.toFixed(2)} por unidad</p>
                                {/* Usa las acciones de Zustand para cambiar la cantidad. */}
                                <button type="button" aria-label={`Restar una unidad de ${producto.title}`} onClick={() => quitar(producto.id)}>−</button>
                                <span>Cantidad: {producto.cantidad}</span>
                                <button type="button" aria-label={`Sumar una unidad de ${producto.title}`} onClick={() => agregar(producto)}>+</button>
                                <button type="button" onClick={() => eliminar(producto.id)}>Eliminar</button>
                                <p>Subtotal: ${(producto.price * producto.cantidad).toFixed(2)}</p>
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

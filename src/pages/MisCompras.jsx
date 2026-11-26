import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useCanasta } from '../store/useCanasta.js';

function MisCompras() {
    // Cuenta productos distintos, aunque cada uno tenga varias unidades.
    const cantidadProductos = useCanasta((estado) => estado.productos.length);
    const { pathname } = useLocation();
    const [rutaActiva, setRutaActiva] = useState(pathname);

    useEffect(() => {
        setRutaActiva(pathname);
    }, [pathname]);

    const enCanasta = rutaActiva === '/misCompras' || rutaActiva === '/misCompras/canasta';
    const enPedido = rutaActiva === '/misCompras/pedido';

    return (
        <section className="mis-compras">
        <h1>Mis compras</h1>
        <nav aria-label="Mis compras">
            {/* Los enlaces usan rutas dentro de Mis compras */}
            <ul>
            <li><Link className="boton-enlace" to="canasta" aria-current={enCanasta ? 'page' : undefined}>Mi canasta ({cantidadProductos})</Link></li>
            <li><Link className="boton-enlace" to="pedido" aria-current={enPedido ? 'page' : undefined}>Mi pedido</Link></li>
            </ul>
        </nav>
        {/* Aquí se muestra Canasta o Pediro */}
        <Outlet />
        </section>
    );
}

export default MisCompras;

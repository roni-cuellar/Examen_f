import { Link, Outlet } from 'react-router-dom';

function MisCompras() {
    return (
        <section className="mis-compras">
        <h1>Mis compras</h1>
        <nav aria-label="Mis compras">
            {/* Los enlaces usan rutas dentro de Mis compras */}
            <ul>
            <li><Link to="canasta">Mi canasta</Link></li>
            <li><Link to="pedido">Mi pedido</Link></li>
            </ul>
        </nav>
        {/* Aquí se muestra Canasta o Pediro */}
        <Outlet />
        </section>
    );
}

export default MisCompras;

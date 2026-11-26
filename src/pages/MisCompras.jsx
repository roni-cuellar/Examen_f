import { Link, Outlet } from 'react-router-dom';

function MisCompras() {
    return (
        <section className="mis-compras">
        <h1>Mis compras</h1>
        <nav aria-label="Mis compras">
            <ul>
            <li><Link to="canasta">Mi canasta</Link></li>
            <li><Link to="pedido">Mi pedido</Link></li>
            </ul>
        </nav>
        <Outlet />
        </section>
    );
}

export default MisCompras;

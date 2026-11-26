import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Inicio() {
  return (
    <section className="inicio">
      <img src={logo} alt="Logo" width={64} height={64} />
      <h1>Bienvenido</h1>
      <p>Explora los productos de la vitrina y consulta sus precios y descripciones.</p>
      <Link className="boton-enlace" to="/vitrina">Ver vitrina</Link>
      <Link className="boton-enlace" to="/misCompras/pedido">Mi pedido</Link>
    </section>
  );
}

export default Inicio;

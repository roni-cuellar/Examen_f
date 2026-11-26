import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

function Inicio() {
  return (
    <section className="inicio">
      <h1>Bienvenido</h1>
      
      <p>Explora los productos de la vitrina y consulta sus precios y descripciones.</p>
      <Link className="boton-enlace" to="/vitrina">Ver vitrina</Link>
      <Link className="boton-enlace" to="/misCompras/pedido">Mi pedido</Link>
    </section>
  );
}

export default Inicio;

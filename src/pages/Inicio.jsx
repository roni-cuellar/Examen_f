import { useNavigate } from 'react-router-dom';

function Inicio() {
  // Los botones llevan a la vitrina y al pedido.
  const navigate = useNavigate();

  return (
    <section className="inicio">
      <h1>Bienvenido</h1>
      <p>Explora los productos de la vitrina y consulta sus precios y descripciones.</p>
      <button type="button" onClick={() => navigate('/vitrina')}>Ver vitrina</button>
      <button type="button" onClick={() => navigate('/misCompras/pedido')}>Mi pedido</button>
    </section>
  );
}

export default Inicio;

import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  return (
    <section className="inicio">
      <h1>Bienvenido</h1>
      <p>Explora los productos de la vitrina y consulta sus precios y descripciones.</p>
      <button type="button" onClick={() => navigate('/vitrina')}>Ver vitrina</button>
      <button type="button" onClick={() => navigate('/mis-compras/pedido')}>Mi pedido</button>
    </section>
  );
}

export default Inicio;

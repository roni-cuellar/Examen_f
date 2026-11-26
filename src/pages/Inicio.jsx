import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section className="inicio">
      <h1>Bienvenido</h1>
      <p>Explora los productos de la vitrina y consulta sus precios y descripciones.</p>
      <button type="button" onClick={() => navigate('/vitrina')}>Catalogo</button>
    </section>
  );
}

export default Inicio;

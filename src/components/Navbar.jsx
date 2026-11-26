import { useNavigate } from 'react-router-dom';

function Navbar() {
  // Cada botón usa navigate para abrir su página.
  const navigate = useNavigate();

  return (
    <nav>
      <button type="button" onClick={() => navigate('/')}>Inicio</button>
      <button type="button" onClick={() => navigate('/vitrina')}>Vitrina</button>
      <button type="button" onClick={() => navigate('/misCompras/canasta')}>Mi canasta</button>
      <button type="button" onClick={() => navigate('/misCompras/pedido')}>Mi pedido</button>
    </nav>
  );
}

export default Navbar;

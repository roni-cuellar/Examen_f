import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); // Devuelve una función para cambiar la URL.
    return (
        <nav >
                <button onClick={()=>navigate('/')}>Inicio</button>

                <button onClick={()=>navigate('/Vitrina')}>Vitrina</button>

                <button onClick={()=>navigate('/Canasta')}>Mi canasta</button>

                <button onClick={()=>navigate('/Pedido')}>Mi pedido</button>
        </nav>
    );
}

export default Navbar;

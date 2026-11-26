import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const enlaces = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/vitrina', texto: 'Vitrina' },
  { ruta: '/misCompras/canasta', texto: 'Mi canasta' },
  { ruta: '/misCompras/pedido', texto: 'Mi pedido' },
];

function Navbar() {
  // Cada botón usa navigate para abrir su página.
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [rutaActiva, setRutaActiva] = useState(pathname);

  useEffect(() => {
    setRutaActiva(pathname);
  }, [pathname]);

  return (
    <nav>
      {enlaces.map(({ ruta, texto }) => {
        const activa = rutaActiva === ruta ||
          (rutaActiva === '/misCompras' && ruta === '/misCompras/canasta');

        return (
          <button key={ruta} type="button" className="boton-enlace"
            aria-current={activa ? 'page' : undefined} onClick={() => navigate(ruta)}>
            {texto}
          </button>
        );
      })}
    </nav>
  );
}

export default Navbar;

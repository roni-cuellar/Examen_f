import { Outlet } from 'react-router-dom';

function SeccionVitrina() {
  return (
    <section>
      <div className="vitrina-portada">
        <h1>Vitrina</h1>
        <p>Explora los productos</p>
      </div>

      {/* Aquí aparece la lista de productos cargados con Axios */}
      <Outlet />
    </section>
  );
}

export default SeccionVitrina;

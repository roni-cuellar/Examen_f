import { Routes, Route } from 'react-router-dom';


import Layout from './layouts/Layout.jsx';


import SectionCatalogo from './sections/SectionCatalogo.jsx';
import SectionCompras from './sections/SectionCompras.jsx';

import Inicio from './pages/Inicio.jsx';
import ProductosFetch from './pages/ProductosFetch.jsx';
import ProductosAxios from './pages/ProductosAxios.jsx';
import Carrito from './pages/Carrito.jsx';
import Resumen from './pages/Resumen.jsx';
import NoEncontrado from './pages/NoEncontrado.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Inicio />} />

      </Route>
    </Routes>
  );
}

export default App;
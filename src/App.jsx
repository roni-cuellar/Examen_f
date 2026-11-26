import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import MisCompras from './pages/MisCompras.jsx';
import Canasta from './pages/Canasta.jsx';
import Pedido from './pages/Pedido.jsx';
import Vitrina from './pages/Vitrina.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="vitrina" element={<Vitrina />} />

        <Route path="misCompras" element={<MisCompras />}>

          <Route index element={<Canasta />} />
          <Route path="canasta" element={<Canasta />} />
          <Route path="pedido" element={<Pedido />} />

        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;

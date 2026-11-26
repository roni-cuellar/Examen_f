import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import Canasta from './pages/Canasta.jsx';
import Pedido from './pages/Pedido.jsx';
import Vitrina from './pages/Vitrina.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="vitrina" element={<Vitrina />} />
        <Route path="mi-canasta" element={<Canasta />} />
        <Route path="mi-pedido" element={<Pedido />} />
        <Route path="canasta" element={<Navigate to="/mi-canasta" replace />} />
        <Route path="pedido" element={<Navigate to="/mi-pedido" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

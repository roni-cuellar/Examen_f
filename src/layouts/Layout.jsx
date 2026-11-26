import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        {/* Aquí aparece la página que corresponde a la direccion URL */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

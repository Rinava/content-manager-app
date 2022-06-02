import Navbar from './Navbar/Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className='page'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;

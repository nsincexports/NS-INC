import { Header, Footer, ScrollToTop } from './components/index';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
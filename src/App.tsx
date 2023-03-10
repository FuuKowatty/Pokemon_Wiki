import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from 'pages/Home';
import { Navbar } from 'components/Navbar/index';
import { Detail } from 'pages/Detail';
import { AppDrawer } from 'components/Drawer';

const App = () => {
  useEffect(() => {
    document.title = 'POKEWIKI - Wikipedia of pokemons';
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AppDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

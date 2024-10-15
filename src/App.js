import React, { useState } from 'react';
import UserSideMenu from './Components/UserSideMenu';
import Header from './Components/Header';
import { Home, News, Events, Articles, Institute, Offices , CreatePost} from './Components/Pages';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const Page = ({ isPanelOpen, togglePanel }) => {
  const location = useLocation(); 
  const showHeaderFooter = location.pathname !== '/ingresar'; // ocultar Header y Footer en Login

  return (
    <div className="flex flex-col min-h-screen">
      {showHeaderFooter && <Header onOpenUserSideMenu={togglePanel}/>}
      <main className='flex-grow'>
        <UserSideMenu open={isPanelOpen} togglePanel={togglePanel} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/institucion" element={<Institute />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/sedes" element={<Offices />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path='/crearPost' element={<CreatePost/>} />
        </Routes>
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  return (
    <Router>
      <Page isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
    </Router>
  );
};

export default App;


/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

// Componentes para las diferentes secciones
const Home = () => <div>Inicio</div>;
const About = () => <div>Sobre nosotros</div>;
const Contact = () => <div>Contacto</div>;

// Header con navegación programática y enlaces
const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigate('/')}>Inicio</button>
      <button onClick={() => navigate('/about')}>Sobre nosotros</button>
      <button onClick={() => navigate('/contact')}>Contacto</button>
    </header>
  );
};

// Componente principal
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>Este es el footer</footer>
      </div>
    </Router>
  );
};

export default App;



/*
import React, { useState } from 'react';
import CrearPost from './CrearPost';  // Asegúrate de que la ruta esté bien

const App = () => {
  const [showCrearPost, setShowCrearPost] = useState(false); // Controlamos si se muestra el formulario

  const handleShowCrearPost = () => {
    setShowCrearPost(true); // Mostramos el formulario cuando se hace clic en el botón
  };

  return (
    <div className="p-10">

      <button 
        onClick={handleShowCrearPost} 
        className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700"
      >
        Crear Post
      </button>

      {showCrearPost && <CrearPost />}
    </div>
  );
};
export default App;

/*
import React from 'react';
import Login from './Components/Login'; // Asegúrate de que la ruta sea correcta

export default function App() {
  return (
    <div>
      <Login />
    </div>
  );
}
*/
/*
import React from 'react';
import UserPanel from './Components/UserPanel'; // Asegúrate de que la ruta sea correcta

export default function App() {
  return (
    <div>
      <UserPanel />
    </div>
  );
}
*/
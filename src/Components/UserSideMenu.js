import React from 'react';
import Add from '../static/add.svg'
import { useNavigate } from 'react-router-dom';

const UserSideMenu = ({ open, togglePanel }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/crearPost'); // Llama a la segunda función
    togglePanel(); // Llama a la primera función
  }
  return (
    <>
      {/* Fondo oscuro semitransparente */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40" // El fondo negro semitransparente
          onClick={togglePanel} // Al hacer clic en el fondo, se cierra el menú
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white text-white shadow-lg transform transition-transform duration-300 z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
  
        <div className="flex flex-col h-full p-6">
          <section className='text-xl  flex justify-between text-slate-600  mb-6'>
            <h2 className='font-bold'>Menú</h2>
            <p className='mr-3 cursor-pointer' onClick={togglePanel} >x</p>
          </section>

          <button onClick={handleClick} className="flex gap-2 hover:bg-slate-200 text-lg py-2 px-4 rounded-full border-slate-400 font-bold text-slate-400 border-2 mb-4">
            <img className='' src={Add} alt="agregar post" />
            Crear Post
          </button>
          <button className="flex gap-2 hover:bg-slate-200 text-lg py-2 px-4 rounded-full border-slate-400 font-bold text-slate-400 border-2 mb-4">
            Citas
          </button>

          
          <div className="mt-auto">
            <button className="border-red-600 border-2 text-red-600 hover:bg-red-700 hover:text-white py-2 px-4 rounded-full w-full">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSideMenu;

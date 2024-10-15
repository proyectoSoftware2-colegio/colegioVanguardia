import React, { useState } from 'react';
import Escudo from './escudo.webp'

const CrearPost = () => {
  const [postType, setPostType] = useState('Noticia');

  return (
    <div className='mx-auto'>
      <form className="bg-yellow-300 p-5 rounded-lg shadow-md w-2/5">
        <div className="mb-4">
          <button className="text-blue-500 mb-2">Volver</button>
          <h2 className="text-2xl font-bold">Nuevo Post</h2>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Fecha</label>
          <input type="date" className="border p-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Tipo de Post</label>
          <select value={postType} onChange={(e) => setPostType(e.target.value)} className="border p-2 rounded-md w-full">
            <option value="Noticia">Noticia</option>
            <option value="Evento">Evento</option>
            <option value="Evento">Articulo</option>
            <option value="Evento">Evento</option>
            <option value="Evento">Evento</option>

          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Título</label>
          <input type="text" placeholder="Título del Post" className="border p-2 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Imagen o Gráfico</label>
          <div className="border-dashed border-2 p-10 w-full rounded-lg flex justify-center items-center">
            <span className="text-gray-500">Imagen</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Contenido</label>
          <textarea placeholder="Texto" className="border p-2 rounded-md w-full h-60"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">
          Publicar
        </button>
      </form>
    </div>
    
  );
};

export default CrearPost;

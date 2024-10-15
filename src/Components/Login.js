import React, { useState } from 'react';

const Login = () => {
  // Usamos useState para manejar los inputs de email y password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica del login, como enviar la información al servidor
    console.log('Login con:', email, password);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form 
        onSubmit={handleLogin} 
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        
        {/* Input de correo electrónico */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="usuario@correo.com"
            required
          />
        </div>
        
        {/* Input de contraseña */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contraseña"
            required
          />
        </div>

        {/* Botón de login */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default Login;

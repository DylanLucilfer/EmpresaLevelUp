import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioGuardado) {
      setMensaje({ tipo: 'danger', texto: '❌ No hay usuarios registrados.' });
      return;
    }

    if (email === usuarioGuardado.email && password === usuarioGuardado.password) {
      localStorage.setItem("sesion", "true");
      setMensaje({ tipo: 'success', texto: '✅ Login exitoso. Redirigiendo...' });
      
      setTimeout(() => {
        navigate('/'); 
      }, 1000);

    } else {
      setMensaje({ tipo: 'danger', texto: '❌ Email o contraseña incorrectos.' });
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <form onSubmit={handleSubmit} className="p-4 border rounded-3 bg-light shadow">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">Ingresar</button>
            {mensaje && (
              <p className={`mt-3 text-center text-${mensaje.tipo}`}>
                {mensaje.texto}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
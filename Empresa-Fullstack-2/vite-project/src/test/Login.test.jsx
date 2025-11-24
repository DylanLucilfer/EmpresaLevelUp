// src/test/Login.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import Login from '../components/Login';

const renderWithProviders = (component) => {
  return render(
    <CartProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </CartProvider>
  );
};

describe('Componente Login', () => {

  // Limpiamos el localStorage antes de cada prueba
  beforeEach(() => {
    localStorage.clear();
  });

  it('debe mostrar un error si las credenciales son incorrectas', async () => {
    const user = userEvent.setup();
    
    // 1. Guardamos un usuario "válido" en el sistema simulado
    const usuarioFalso = { email: "user@test.com", password: "123" };
    localStorage.setItem("usuario", JSON.stringify(usuarioFalso));
    
    // 2. Renderizamos el Login
    renderWithProviders(<Login />);

    // 3. Buscamos los inputs y el botón
    const emailInput = screen.getByLabelText(/Correo electrónico/i);
    const passInput = screen.getByLabelText(/Contraseña/i);
    const btn = screen.getByRole('button', { name: /Ingresar/i });

    // 4. Simulamos escribir una contraseña INCORRECTA
    await user.type(emailInput, "user@test.com");
    await user.type(passInput, "contraseña-mala");
    await user.click(btn);

    // 5. Esperamos que aparezca el mensaje de error
    // Jasmine no tiene 'toBeInTheDocument', usamos 'toBeTruthy'
    const errorMessage = await screen.findByText(/Email o contraseña incorrectos/i);
    expect(errorMessage).toBeTruthy();
  });
});
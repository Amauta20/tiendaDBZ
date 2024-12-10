import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contacto from '../Contacto';

describe('Contacto Component', () => {
  test('Renders all form fields', () => {
    render(<Contacto />);
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  test('Allows user to input text', () => {
    render(<Contacto />);
    const nombreInput = screen.getByLabelText(/nombre/i);
    const correoInput = screen.getByLabelText(/correo electrónico/i);
    const mensajeInput = screen.getByLabelText(/mensaje/i);

    fireEvent.change(nombreInput, { target: { value: 'John Doe' } });
    fireEvent.change(correoInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(mensajeInput, { target: { value: 'Este es un mensaje de prueba.' } });

    expect(nombreInput.value).toBe('John Doe');
    expect(correoInput.value).toBe('john.doe@example.com');
    expect(mensajeInput.value).toBe('Este es un mensaje de prueba.');
  });

  test('Submits the form with valid data', () => {
    render(<Contacto />);
    const nombreInput = screen.getByLabelText(/nombre/i);
    const correoInput = screen.getByLabelText(/correo electrónico/i);
    const mensajeInput = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(nombreInput, { target: { value: 'John Doe' } });
    fireEvent.change(correoInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(mensajeInput, { target: { value: 'Este es un mensaje de prueba.' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/tu mensaje ha sido enviado con éxito/i)).toBeInTheDocument();
    expect(nombreInput.value).toBe('');
    expect(correoInput.value).toBe('');
    expect(mensajeInput.value).toBe('');
  });

  test('Shows error message for empty fields', () => {
    render(<Contacto />);
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(submitButton);

    expect(screen.getByText(/por favor, completa todos los campos/i)).toBeInTheDocument();
  });

  test('Disables submit button if fields are empty', () => {
    render(<Contacto />);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.click(submitButton);
    expect(screen.getByText(/por favor, completa todos los campos/i)).toBeInTheDocument();
  });

  test('Resets error message when fields are updated', () => {
    render(<Contacto />);
    const nombreInput = screen.getByLabelText(/nombre/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.click(submitButton);
    expect(screen.getByText(/por favor, completa todos los campos/i)).toBeInTheDocument();

    fireEvent.change(nombreInput, { target: { value: 'John Doe' } });
    expect(screen.queryByText(/por favor, completa todos los campos/i)).not.toBeInTheDocument();
  });
});

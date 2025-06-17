import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';

test('Login input reflected', () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  const idInput = screen.getByPlaceholderText(/student number/i);
  const pwInput = screen.getByPlaceholderText(/password/i);

  fireEvent.change(idInput, { target: { value: '23100000' } });
  fireEvent.change(pwInput, { target: { value: '1234' } });

  expect(idInput.value).toBe('23100000');
  expect(pwInput.value).toBe('1234');
});

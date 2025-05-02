import React from "react";
import { render, screen } from '@testing-library/react';
import Cart from '../Components/Cart';

//This is called smoke test
test('renders Cart component without crashing', () => {
  render(<Cart/>);

  expect(screen.getByText(/Cart/)).toBeInTheDocument();
 });
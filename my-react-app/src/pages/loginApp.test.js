import { render, screen } from '@testing-library/react';
import App from './App';

import '/Users/anoushkamakkad/201-project/group-code/roomiez_frontend/my-react-app/src/pages/loginApp.css';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

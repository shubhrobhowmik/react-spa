import { render, screen } from '@testing-library/react';
import App from './App';

it('should have hello world', () => {
	render(<App />);
	// screen.debug(); // prints out the jsx in the App component unto the command line
	// const message = screen.queryByText(/Hello World/i);
	const message = screen.queryByText(/Hello Vite \+ React!/i);
	expect(message).toBeInTheDocument();
	// expect(message).toBeVisible();
});

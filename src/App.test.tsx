import { render, screen } from './utils/test-utils';
import App from './App';

it('should have hello world', () => {
	render(<App />);
	// screen.debug(); // prints out the jsx in the App component unto the command line
	// const message = screen.queryByText(/Hello World/i);
	const message = screen.queryByText(/Hello Vite \+ React!/i);
	expect(message).toBeInTheDocument();
	// expect(message).toBeVisible();
});

// it('should increment count on click', async () => {
// 	// Render the component
// 	render(<App />);

// 	// Debugging Step 1: Check if the button is present and visible
// 	const button = screen.getByRole('button');
// 	console.log('Is the button present and visible?', button ? 'Yes' : 'No');

// 	// Debugging Step 2: Review the component's code
// 	// (Review the component's state update logic in the App component file)

// 	// Debugging Step 3: Add more console.log statements
// 	console.log('Before click event:', screen.getByText('count is 0'));

// 	// Simulate a click event on the button
// 	userEvent.click(button);

// 	// Debugging Step 3: Add more console.log statements
// 	console.log('After click event:', screen.getByText('count is 1'));

// 	// Expectation: Wait for the text "count is: 1" to appear in the DOM
// 	expect(await screen.findByText('count is 1')).toBeInTheDocument();
// });

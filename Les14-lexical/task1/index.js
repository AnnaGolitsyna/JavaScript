// Algo
// 1. Create and export f sendMessage
// => input - name, output - only console /und/
// 2. Create and export f setMessage
// => input - textMessage, output - und

let message = 'Just learn it';
export function sendMessage (name) {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}! Your ${sender}`);
};
// sendMessage('Ann');

export function setMessage(text) {
  message = text;
};
// setMessage('Good job');
// sendMessage('Ann');

// setMessage('Hello, Good job');
// sendMessage('Ann');
// sendMessage('Tom');

// setMessage('Helloooooo, Good job');
// sendMessage('Ann');
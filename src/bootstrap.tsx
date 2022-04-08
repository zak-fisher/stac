import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from 'container/App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container as Element);
root.render(<App />);

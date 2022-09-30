import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// import App from './App';
// root.render(<App />);

// import ContextBasicApp from './Context/ContextBasicApp';
// root.render(<ContextBasicApp />);

// import HooksBasicApp from './Hooks/HooksBasicApp';
// root.render(<HooksBasicApp />);

// import UseEffectApp from './Hooks/UseEffectApp';
// root.render(<UseEffectApp />);

import UseRefApp from './Hooks/UseRefApp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UseRefApp />);
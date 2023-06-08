import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './Contexts/Theme';
import TasksContextProvider from './Contexts/Tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<ThemeContextProvider>
		<TasksContextProvider>
    		<App />
		</TasksContextProvider>
	</ThemeContextProvider>
  </React.StrictMode>
);
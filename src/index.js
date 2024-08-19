import './index.scss';
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { Tasks } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<Tasks />
	</Provider>
);

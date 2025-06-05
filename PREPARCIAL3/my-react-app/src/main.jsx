import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);

// import { React } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import { store } from './redux/store.js';

// createRoot(document.getElementById('root')).render(
// 	<React>
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</React>
// );

//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

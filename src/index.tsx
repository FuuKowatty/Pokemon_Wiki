import ReactDOM from 'react-dom/client';
import { AppProviders } from 'appProviders/AppProviders';
import App from './App';
import '@fontsource/roboto';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <AppProviders>
    <App />
  </AppProviders>
    
);

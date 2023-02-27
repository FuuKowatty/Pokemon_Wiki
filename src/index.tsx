import ReactDOM from 'react-dom/client';
import Container from '@mui/material/Container';
import { AppProviders } from 'appProviders/AppProviders';
import '@fontsource/roboto';
import App from './App';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <AppProviders>
    <Container maxWidth='xl'>
      <App />
    </Container>
  </AppProviders>
    
);

import { BrowserRouter as Router } from 'react-router-dom';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import Routes from '@app/routes/Routes';
import { fuego } from '@app/utils/firebase';

const App = () => (
  <Router>
    <FuegoProvider fuego={fuego}>
      <Routes />
    </FuegoProvider>
  </Router>
);

export default App;

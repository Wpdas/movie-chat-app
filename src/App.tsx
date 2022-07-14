import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '@app/routes/Routes';
import '@app/utils/firebase';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;

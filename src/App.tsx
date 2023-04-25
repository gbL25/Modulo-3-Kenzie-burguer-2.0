import { ToastContainer } from 'react-toastify';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer />
    </>
  )
};

export default App;

import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Auth from './components/auth/Auth';
import Home from './components/Home';
import PrivateRoutes from './components/PrivateRoutes';

const App = () => {
  return (
    <div>
      <Toaster
      position='top-right'
      toastOptions={{
        style: {
          fontSize: '1rem'
        }
      }}
      ></Toaster>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
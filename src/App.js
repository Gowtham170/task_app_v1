import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import Auth from './components/auth/Auth';
import Home from './components/Home';
import PrivateRoutes from './components/PrivateRoutes';

const App = () => {
  return (
    <div>
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
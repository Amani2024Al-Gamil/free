
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/features/serptracking-analysis/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/features/local-rank-tracker-tool/Main';

function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path='/'  element={<Home />}/>
      <Route path='/main'  element={<Main/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;

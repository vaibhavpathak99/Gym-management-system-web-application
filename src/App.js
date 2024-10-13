import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Firstpage from './Firstpage';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';
import 'bootstrap/dist/css/bootstrap.min.css';
import Concat from './Concat'; 
import Triner from './Triner';
import Price from './Price'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Firstpage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path="/Concat" element={<Concat />} />
          <Route path="/triner" element={<Triner/>}/>
          <Route path="/price" element={<Price/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;

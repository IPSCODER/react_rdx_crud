import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

function App() {
  return (
<BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addUser' element={<AddUser/>}/>
    <Route path='/editUser/:id' element={<EditUser/>}/>
  </Routes>
</BrowserRouter>
  );
}

export default App;

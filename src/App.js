// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>

      {/* This is for routing through pages */}
      <BrowserRouter>
        <Routes>
          {/* index means / or "home page" */}
          <Route index element={<Store />} />

          {/* path mean "/success" will get you <Success /> page */}
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

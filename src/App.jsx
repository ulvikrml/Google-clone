import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResult from './components/SearchResult'; 
import './index.css';

function App() {

  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<SearchResult/>}/>
      </Routes>
    </Routers>
  )
}

export default App

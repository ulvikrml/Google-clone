import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import './index.css';
import { ContextProvider } from './utils/ContextApi';

function App() {

  return (
    <ContextProvider>
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:query/:startIndex" element={<SearchResult />} />
        </Routes>
      </Routers>
    </ContextProvider>
  )
}

export default App

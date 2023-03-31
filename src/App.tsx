import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Create from './pages/Create/Create';
import JobList from './pages/List/JobList';
import NotFound from './pages/NotFound/NotFound';
import JobDetails from './pages/List/JobDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='main-container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='post' element={<Create />} />
            <Route path='find' element={<JobList />} />
            <Route path='find/:id' element={<JobDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

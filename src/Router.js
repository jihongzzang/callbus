import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from 'pages/Community';
import Home from 'pages/Home';
import List from 'pages/List';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

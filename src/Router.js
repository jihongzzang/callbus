import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from 'components/Community/Community';
import Home from 'components/Main/Home';
import List from 'components/List/List';

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

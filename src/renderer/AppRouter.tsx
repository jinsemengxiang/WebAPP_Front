import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './common/css/App.css';
import Hello from './pages/index';
import Login from './pages/login';
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* 路由配置，path就是前端的路由，element是页面 */}
        <Route path="/" element={<Hello />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

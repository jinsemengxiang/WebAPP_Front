import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../common/css/common.scss';
import Login from "../pages/login";
import Index from "../pages/index";
import QueryAchievements from "../pages/queryAchievements";
import AutomaticBP from "../pages/automaticBP";
import PersonalizedHomepage from "../pages/personalizedHomepage";
import HeroesStatistics from "../pages/heroesStatistics";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/queryAchievements" element={<QueryAchievements />} />
        <Route path="/automaticBP" element={<AutomaticBP />} />
        <Route path="/personalizedHomepage" element={<PersonalizedHomepage />} />
        <Route path="/heroesStatistics" element={<HeroesStatistics />} />
      </Routes>
    </Router>
  );
}

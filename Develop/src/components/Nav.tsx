import { NavLink } from 'react-router-dom';
  //necessary code to display the navigation bar and link between the pages
const Nav = () => {
  return (
    <nav className="nav">
      <NavLink 
        to="/" 
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Home
      </NavLink>
      <NavLink 
        to="/SavedCandidates" 
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Potential Candidates
      </NavLink>
    </nav>
  );
};

export default Nav;
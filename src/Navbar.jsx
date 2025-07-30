import './Nav.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div> 
        
        <nav className="navbar">
        <div className="container">
            <div className="logo">
               <Link to='/Home'><p>VIJAY...........</p></Link> 
            </div>
            <ul className="nav-links">
  <Link to='/Home'><li>Home</li></Link>
  <Link to='/about'><li>About</li></Link>
  <Link to='/Portfolio'><li>Portfolio</li></Link>
  <Link to='/Contact'><li>Contact</li></Link>
</ul>
                </div>

        
                </nav>
    </div>


    
    
   

  );
};
export default Navbar;
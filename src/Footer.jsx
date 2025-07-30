import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        
        <footer>
           
    <div className="footer-container">
        <div className="footer-content">
          
            <div className="footer-section">
                <h4>About Us</h4>
                <p>I am Deviprasad Setti, a passionate Software developer,. I enjoy turning creative ideas into real-world solutions using HTML, CSS, JavaScript, and React.js. ,  I am familiar with programing languages like python ,java ,sql and android development.  My journey includes hands-on experience through internships and personal projects. </p>
            </div>

            
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <Link to='/Home'><li>Home</li></Link>
                    <Link to='/About'><li>About</li></Link>
                   <Link to='/Portfolio'><li>Portfolio</li></Link> 
                   <Link to='/Contact'><li>Contact</li></Link> 
                </ul>
            </div>

            
            <div className="footer-section">
                <h4>Contact Us</h4>
                <p>Email: <a href="mailto:prasadsetti1606@gmail.com">prasadsetti1606@gmail.com</a></p>
                <p>Phone: <a href="tel:+919392889471">9392889471</a></p>
            </div>

            
            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://x.com/?lang=en">Twitter</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                </div>
            </div>
        </div>
        
        <p>&copy; 2024 Your vijay. All rights reserved.</p>
    </div>
</footer>

        
    );
};

export default Footer;
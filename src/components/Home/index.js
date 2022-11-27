import LogoTitle from '../../assets/images/logo-t.png';
import { Link, NavLink } from 'react-router-dom'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm <tab />
                <img src={LogoTitle} alt="developer" />
                anisha
                <br />
                Web Developer
                </h1>
                <h2>Full Stack Developer | Data Scientist | UI/UX Designer</h2>
                <Link to = "/contact" className='flat-button' >CONTACT ME</Link>
            </div>
        </div>
    );
}
export default Home
import LogoTitle from '../../assets/images/logo-t.png';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm 
                <img src={LogoTitle} alt="developer" />
                anisha
                <br />
                Web Developer
                </h1>
                <h2>Full Stack Developer | Data Scientist | UI/UX Designer</h2>
            </div>
        </div>
    );
}
export default Home
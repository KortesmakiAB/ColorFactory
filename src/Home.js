import HomeBody from "./HomeBody"
import HomeHeader from "./HomeHeader"
import './Home.css';

const Home = ({ colors }) => {
    return (
        <div className="Home">
            <HomeHeader />
            <HomeBody colors={ colors } />            
        </div>
    );
};

export default Home;
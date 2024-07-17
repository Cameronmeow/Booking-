import './home.css'
import NavBar from '../../components/Navbar/Navbar';
import Header from "../../components/Header/Header";
import Featured from '../../components/Featured/Featured';
import PropertyList from '../../components/PropertyList/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';

function Home(){
    return(
        <div>
            <NavBar/>
            <Header/>
            <div className='homeContainer'>
                <Featured/>
                <h1 className='homeTitle'>Browse property by type</h1>
                <PropertyList/>
                <h1 className='homeTitle'>Home guests love</h1>
                <FeaturedProperties />
                <MailList/>
                <Footer/>
            </div>
            
        </div>
    );
}
export default Home;
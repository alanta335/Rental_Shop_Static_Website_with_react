

import './App.css'
import AboutItem from './screens/Aboutitem';
import AboutUs from './screens/aboutus';
import ContactCard from './screens/contactcard';
import Footer from './screens/footer';
import GroupRate from './screens/groupitem';
import HomePageHero from './screens/homepagehero';
import RentalQueries from './screens/rentalqueries';

function App() {

  return (
    <div>
      <HomePageHero />
      <AboutUs />
      <AboutItem />
      <GroupRate />
      <ContactCard />
      <RentalQueries />
      <Footer />
    </div>
  )
}

export default App

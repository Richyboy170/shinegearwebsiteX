import Navbar from './pages/navbar/navbar';
import LandingHeroImage from './pages/landingPage/landingHeroImage';
import TshirtsCard from './pages/landingPage/tshirtsCards';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      <LandingHeroImage/>
      <TshirtsCard/>
    </div>
  );
}

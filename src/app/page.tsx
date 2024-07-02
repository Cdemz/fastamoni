import Image from "next/image";
import MainScreen from "./Components/MainScreen";
import WealthCarousel from "./Components/WealthCarousel";
import Mission from "./Components/Mission";
import Question from "./Components/Question";
import Testimonials from "./Components/Testimonials";
import NewCase from "./Components/NewCase";
import Solution from "./Components/Solutions";
import AChievements from "./Components/AChievements";
import LeaderBoard from "./Components/LeaderBoard";

export default function Home() {
  return (
    <main className="">
      <div>
        <MainScreen />
        <WealthCarousel />
        <LeaderBoard />
        <NewCase />
        <Mission />
        <Question />
        <Testimonials />
        <Solution />
        <AChievements />
      </div>
    </main>
  );
}

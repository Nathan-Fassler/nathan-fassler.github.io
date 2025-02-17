import Navbar from "./components/Navbar";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import HobbiesInterests from "./components/HobbiesInterests";
import Info from "./components/Info";

function App() {

  return (
    <div className="bg-lightcyan text-gunmetal">
        <Navbar />
        <About />
        <WorkExperience />
        <HobbiesInterests />
        <Info />

    </div>
   
  )
}

export default App

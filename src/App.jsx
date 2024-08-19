import { BrowserRouter } from "react-router-dom";

import { About, Socials, Contact, Experience, Hero, Navbar, Tech, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About /> 
        <div className='relative z-0'>
          <Experience />
          <Tech />
          <Socials />
          <Contact />
          <StarsCanvas />
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
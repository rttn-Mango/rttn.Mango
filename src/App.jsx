import { useState } from "react";


//Components
import Preloader from "./Pages/Preloader";
import Header from "./Pages/Components/Header";

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? <Preloader content="rttn.Mango" setLoading={setLoading}/> 
        : <Header/>
      }
    </>
  )
}

export default App

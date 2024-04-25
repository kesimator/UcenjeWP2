import { Route, Routes } from "react-router-dom"
import Pocetna from "./pages/Pocetna"
import { RoutesNames } from "./constants"
import NavBar from "./components/NavBar"
import Timovi from "./pages/timovi/Timovi"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TimoviDodaj from "./pages/timovi/TimoviDodaj"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <>
          <Route path={RoutesNames.HOME} element={<Pocetna />} />
          <Route path={RoutesNames.TIMOVI_PREGLED} element={<Timovi />} />
          <Route path={RoutesNames.TIMOVI_NOVI} element={<TimoviDodaj />} />
        </>
      </Routes>
    </>
  )
}

export default App

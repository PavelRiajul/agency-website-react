import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className="bg-white">
    <Navbar/>
    <main className="min-h-screen"><Outlet/></main>
    <Footer/>
    </div>
  )
}
export default App
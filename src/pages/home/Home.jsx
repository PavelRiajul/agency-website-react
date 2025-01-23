import Blogs from "../blogs/Blogs"
import CompanyLogos from "./CompanyLogos"
import FAQs from "./FAQs"
import HeroSection from "./HeroSection"
import Newsletter from "./Newsletter"
import Pricing from "./Pricing"
import Services from "./Services"
import TeamSection from "./TeamSection"
import Testimonials from "./Testimonials"
import ToolsSection from "./ToolsSection"


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ToolsSection/>
        <CompanyLogos/>
        <Services/>
        <Testimonials/>
        <Blogs/>
        <TeamSection/>
        <Pricing/>
        <FAQs/>
        <Newsletter/>
    </div>
  )
}
export default Home
import {Link} from "react-router-dom"
import logo from "./assets/logo.png"
function Nav()
{
let n=<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} width={50} height={50} alt="icon"></img>
      <span className="ml-3 text-xl">News</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" to="/Apple">Apple</Link>
      <Link className="mr-5 hover:text-gray-900" to="/Techcrunch">Techcrunch</Link>
      <Link className="mr-5 hover:text-gray-900" to="/US">United States</Link>
      <Link className="mr-5 hover:text-gray-900" to="/in">India</Link>

      <Link className="mr-5 hover:text-gray-900" to="/Tesla">Tesla</Link>
      <Link className="mr-5 hover:text-gray-900" to="/Bitcoin">Bitcoin</Link>
      <Link className="mr-5 hover:text-gray-900" to="/Nasa">Nasa</Link>
      <Link className="mr-5 hover:text-gray-900" to="/upsc">Upsc</Link>
     
    </nav>
  
  </div>
</header>
return n;
}
export default Nav;
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
function Nav()
{
let n=<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://cdn-icons.flaticon.com/png/128/681/premium/681803.png?token=exp=1659607893~hmac=c35902c86cdee924ad6e465769cb2441" width={50} height={50} alt="icon"></img>
      <span class="ml-3 text-xl">News</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link class="mr-5 hover:text-gray-900" to="/Apple">Apple</Link>
      <Link class="mr-5 hover:text-gray-900" to="/Techcrunch">Techcrunch</Link>
      <Link class="mr-5 hover:text-gray-900" to="/US">United States</Link>
      <Link class="mr-5 hover:text-gray-900" to="/in">India</Link>

      <Link class="mr-5 hover:text-gray-900" to="/Tesla">Tesla</Link>
      <Link class="mr-5 hover:text-gray-900" to="/Bitcoin">Bitcoin</Link>
      <Link class="mr-5 hover:text-gray-900" to="/Nasa">Nasa</Link>
      <Link class="mr-5 hover:text-gray-900" to="/upsc">Upsc</Link>
     
    </nav>
  
  </div>
</header>
return n;
}
export default Nav;
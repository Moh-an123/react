import img from "./homeimg.jpg";
import "./Home.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Projects from "./projects.js";
import Contacts from "./Contacts.js";
const myArray = [
  {
    img: img,
    name1: "home",
    area: "Projects",
    arean: "/projects",
    content: ` Notice the use of in the tags above.It will be replaced with the URL of the public folder during the build.Only files inside the  folder can be referenced from the HTML.
Unlike "/favicon.ico" or "favicon.ico", favicon.ico" will
    work correctly both with client-side routing and a non-root public URL.
    Learn how to configure a non-root public URL by running npm run build`,
  },
  {
    img: img,
    name1: "home2",
    area: "Contacts",
    arean: "/contact",
    content: ` 123Notice the use of  in the tags above.It will be replaced with the URL of the public folder during the build.Only files inside the  folder can be referenced from the HTML.
    Unlike "/favicon.ico" or "favicon.ico",favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running npm run build`,
  },
  {
    img: img,
    name1: "home2",
    area: "Contacts",
    arean: "/contact",
    content: ` 123Notice the use of  in the tags above.It will be replaced with the URL of the public folder during the build.Only files inside the  folder can be referenced from the HTML.
    Unlike "/favicon.ico" or "favicon.ico",favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running npm run build`,
  },
];

const home1 = myArray.map((item) => (
  <>
  
      <Link to={item.arean} style={{textDecoration:'none'}} className="jl">
        <div className="main">
          <img src={item.img}></img>
          <h1>{item.name1}</h1>
          <p>{item.content}</p>
        </div>
      </Link>
      <Outlet />
      <Routes path="/" element={<Home1 />}>
        <Route path={item.arean} element={item.area} />
      </Routes>

  </>
));

function Home1() {
  return (
    <>
      <div className="jj">
        <div className="jk">{home1}</div>
      </div>
    </>
  );
}
export default Home1;

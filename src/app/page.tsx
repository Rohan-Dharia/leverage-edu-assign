import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./components/navbar/navbar";
import LeftBody from "./components/left-main-body/left-main-body";
import RightBody from "./components/right-main-body/right-main-body";

export default function Home() {
  return (
    <main>  
      <div className="upper-deck">
        <p>Leverage Edu Scholarship Worth ₹ 7,00,00,000</p> 
        <button className="button">Apply Now</button>
      </div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <LeftBody></LeftBody>
          </div>
          <div className="right col-8">
            <RightBody></RightBody>
          </div>
        </div>
      </div>
    </main>
  );
}

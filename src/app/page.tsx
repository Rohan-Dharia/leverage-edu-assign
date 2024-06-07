import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./components/navbar/navbar";
import LeftBody from "./components/left-main-body/left-main-body";
import RightBody from "./components/right-main-body/right-main-body";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <main>  
      <div className="upper-deck">
        <p>Leverage Edu Scholarship Worth ₹ 7,00,00,000</p> 
        <button className="button">Apply Now</button>
      </div>
      
      <div className="container">
      <Navbar />
      </div>
      <div className="inner-container">
        <Row gutter={[16,16]}>
          <Col span={6}>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "100%"}}>
              <LeftBody />
            </div>
          </Col>
          <Col span={18}><RightBody /></Col>
        </Row>
        
      </div>
    </main>
  );
}
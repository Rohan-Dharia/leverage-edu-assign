import "./left-main-body.css";

export default function LeftBody(){
    return(
            <div className="container">
                <h1>FIRST IN THE FAMILY</h1>
                <p className="description">They are the global citizens of tomorrow. Start your study abroad journey today.</p>
                <div className="live-on">
                    <span>Live on</span>
                    <img src="https://asset.brandfetch.io/idh5Jct7tV/idqU3ch8ih.png" alt="Disney+ Hotstar Logo"></img>
                </div>
                <div className="buttons">
                    <button className="btn btn-blue">Get Your Shortlist for FREE</button>
                    <button className="btn btn-white">Talk to an Expert</button>
                </div>
                <p className="footer-text">95% of our students get an admit in less than 4 weeks</p>
                <p className="footer-text">Our students finished university to work at global offices  of:</p>
                <div className="company">
                    <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="google"></img>
                    <img src="https://www.vectorlogo.zone/logos/barclays/barclays-ar21.svg"alt="barclays"></img>
                    <img src="https://www.vectorlogo.zone/logos/ey/ey-icon.svg"alt="barclays"></img>
                    <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg"alt="barclays"></img>
                    <img src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg"alt="barclays"></img>

                </div>
            </div>
    );
}
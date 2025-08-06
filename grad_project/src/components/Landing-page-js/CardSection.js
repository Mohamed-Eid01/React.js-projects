import React, { useRef, useState, useEffect } from "react";
import "../../styles/landing-page-css/cardsection.css";

const CardSection = () => {
  const scrollRef = useRef(null);
  const scrollSpeed = 10;
  const [scrolling, setScrolling] = useState(null);


  const startScrolling = (direction) => {
    if (scrollRef.current) {
      if (scrolling) clearInterval(scrolling);
      const intervalId = setInterval(() => {
        scrollRef.current.scrollBy({
          left: direction * scrollSpeed,
          behavior: "auto",
        });
      }, 10);
      setScrolling(intervalId);
    }
  };


  const stopScrolling = () => {
    if (scrolling) {
      clearInterval(scrolling);
      setScrolling(null);
    }
  };


  useEffect(() => {
    return () => {
      if (scrolling) clearInterval(scrolling);
    };
  }, [scrolling]);

  return (
    <div id="systems" className="cards-section-container">
      <button
        className="scroll-btn left"
        onMouseDown={() => startScrolling(-1)}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        aria-label="Scroll Left"
      >
        &#8592;
      </button>

      <div className="cards-wrapper" ref={scrollRef}>
        <div className="card-wrapper">
          <div className="card">
            <img
              src="/landing-Images/cards/BMS9.png"
              alt="Cardimg1"
              className="card-image"
            />
            <img
              src="/landing-Images/cards/iconBMS.png"
              alt="Icon 1"
              className="card-icon"
            />
            <div className="card-text">
              <h3>
                <u>BMS</u>
              </h3>
              <p>
                Stay informed about your vehicle’s battery health, charge
                levels, and performance. Guido helps prevent battery failures by
                detecting issues early.
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <img
              src="/landing-Images/cards/speed9.png"
              alt="Cardimg2"
              className="card-image"
            />
            <img
              src="/landing-Images/cards/iconspped.png"
              alt="Icon 2"
              className="card-icon"
            />
            <div className="card-text">
              <h3>
                <u>Speed Monitoring</u>
              </h3>
              <p>
                Keep track of your vehicle’s speed and driving patterns to
                encourage safe, responsible, and more fuel-efficient driving
                habits over time.
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <img
              src="/landing-Images/cards/ev9.png"
              alt="Cardimg3"
              className="card-image"
            />
            <img
              src="/landing-Images/cards/iconev.png"
              alt="Icon 3"
              className="card-icon"
            />
            <div className="card-text">
              <h3>
                <u>EV Motor States</u>
              </h3>
              <p>
                Monitor the status and performance of your electric vehicle’s
                motor to ensure smooth and efficient operation under all driving
                conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <img
              src="/landing-Images/cards/light9.png"
              alt="Cardimg4"
              className="card-image"
            />
            <img
              src="/landing-Images/cards/iconlight.png"
              alt="Icon 4"
              className="card-icon"
            />
            <div className="card-text">
              <h3>
                <u>Lighting System</u>
              </h3>
              <p>
                Keep your vehicle safe and compliant. Guido tracks your lighting
                system’s status and alerts you to faults or failures in real
                time.
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <img
              src="/landing-Images/cards/tpms9.png"
              alt="Cardimg5"
              className="card-image"
            />
            <img
              src="/landing-Images/cards/icontmps.png"
              alt="Icon 5"
              className="card-icon"
            />
            <div className="card-text">
              <h3>
                <u>TPMS</u>
              </h3>
              <p>
                Tire Pressure Monitoring System:Get immediate alerts if your
                tire pressure is too low or too high for safer, more
                fuel-efficient driving.
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <img
              src="/landing-Images/cards/gps9.png"
              alt="Cardimg6"
              className="card-image"
            />
            <img
              src="/landing-Images/cards/icongps.png"
              alt="Icon 6"
              className="card-icon"
            />
            <div className="card-text">
              <h3>
                <u>GPS Tracking</u>
              </h3>
              <p>
                Know your vehicle’s exact location at all times. Guido offers
                accurate GPS tracking to support security and fleet management.
              </p>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <img
              src="/landing-Images/cards/temp9.png"
              alt="Cardimg7"
              className="card-image"
            />
            <img
              src="/landing-Images/cards/icontemp.png"
              alt="Icon 7"
              className="card-icon"
            />
            <div className="card-text">
              <h3>
                <u>Temperature </u>
              </h3>
              <p>
                Protect your vehicle from overheating , suboptimal conditions.
                Guido provides real-time temperature data to maintain optimal
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* زر السحب لليمين */}
      <button
        className="scroll-btn right"
        onMouseDown={() => startScrolling(1)}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        aria-label="Scroll Right"
      >
        &#8594;
      </button>

      <div className="final-paragraph">
        <p>
          Guido integrates these critical systems into one smart, embedded
          solution — so you’re always connected, protected, and in control.
        </p>
      </div>
    </div>
  );
};

export default CardSection;

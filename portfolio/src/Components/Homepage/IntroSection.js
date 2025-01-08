import IntroPhoto from '../../Images/Headshot.png';
// import BackgroundImage from '../../Images/los-angeles-skyline-PJEB7A.jpg'
import React, { useState } from 'react';

const IntroSection = () => {
    const [hover, setHover] = useState(false)

  return (
    <div style={{
                // backgroundImage: `url(${BackgroundImage})`,
                // backgroundSize: 'cover', 
                // backgroundPosition: 'center', 
                // backgroundRepeat: 'no-repeat', 
                // color: 'white', 
                backgroundColor: 'black'
            }}>
      <div style={{ paddingBottom: '1rem', paddingTop: '2rem', textAlign: 'center' }}>
        <img
          src={IntroPhoto}
          alt="IntroPhoto"
          style={{
            cursor: 'pointer',
            height: '250px',
            width: '250px',
            border: '7px solid white',
            borderRadius: '50%', 
            objectFit: 'cover',
            transform: hover ? 'translateX(-1px) rotateY(180deg)' : 'none',
            transition: 'transform 0.70s ease-in-out',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div>
        <h1 className="mb-1" style={{ color: 'white', paddingBottom: '1rem', fontSize: '4rem' }}>Joseph Rhodes</h1>
      </div>
      <div>
        <h3 className="mb-5" style={{ color: 'lightgrey', fontFamily:'monospace', fontSize: '1.25rem', paddingBottom: '1rem' }}>
          <em>
            <span style={{fontWeight:'bold'}}>Computer Science and Finance</span> with Mathematics and Business Management<br />
            - Undergraduate 2025 - <br />
            - Case Western Reserve University - 
          </em>
        </h3>
      </div>
    </div>
  );
};

export default IntroSection;

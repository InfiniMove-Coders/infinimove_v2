import React from 'react';

const TrustedBySection = () => {
  return (
    <section
      style={{
        width: '1440px',
        height: '166px',
        paddingBottom: '25px',
        gap: '30px',
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '1440px',
          height: '36px',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h2
          style={{
            fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '150%',
            letterSpacing: '-2%',
            textAlign: 'center',
            verticalAlign: 'middle',
            color: '#FFFFFF',
            margin: 0
          }}
        >
          Trusted By
        </h2>
      </div>

      <div
        style={{
          width: '1440px',
          height: '50px',
          gap: '120px',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            width: '118.777px',
            height: '27.122px',
            opacity: 1,
            color: '#F0F0F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          <span>
            <img src="/images/image1.png" alt="" />
          </span>
          logoipsum
        </div>

        <div
          style={{
            width: '123.36px',
            height: '28.49px',
            opacity: 1,
            color: '#F0F0F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          <span><img src="/images/image2.png" alt="" /></span>
          logoipsum
        </div>

        <div
          style={{
            width: '100.19px',
            height: '47.654px',
            opacity: 1,
            color: '#F0F0F0',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <img src="images/image3_1.png" alt="" />
            <img src="images/image3_2.png" alt="" />
            <img src="images/image3_2.png" alt="" />
          </div>
          logoipsum
        </div>

        <div
          style={{
            width: '117.677px',
            height: '23.615px',
            opacity: 1,
            color: '#F0F0F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          <span><img src="/images/image4.png" alt="" /></span>
          logoipsum
        </div>

        <div
          style={{
            width: '126.719px',
            height: '29.541px',
            opacity: 1,
            color: '#F0F0F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          <span><img src="/images/image5.png" alt="" /></span>
          logoipsum
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

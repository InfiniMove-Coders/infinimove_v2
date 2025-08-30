import React from 'react';

const ProductBadge = () => {
  return (
    <div>
      <div
        className="inline-flex items-center border rounded-[36px]"
        style={{
          width: '384px',
          height: '33px',
          paddingTop: '8px',
          paddingRight: '14px',
          paddingBottom: '8px',
          paddingLeft: '14px',
          borderRadius: '36px',
          borderWidth: '0.5px',
          borderColor: '#6B7280'
        }}
      >
        <div
          className="flex items-center justify-center gap-2"
          style={{
            width: '359px',
            height: '17px',
          }}
        >
          <span
            style={{
              fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
              fontWeight: 300,
              fontSize: '14px',
              lineHeight: '121%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              textTransform: 'capitalize',
              color: '#D1D5DB'
            }}
          >
            delivering end to end •
          </span>
          <span
            style={{
              fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '121%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              textTransform: 'capitalize',
              color: '#FFFFFF'
            }}
          >
            B2B | B2C | SAAS | SPA
          </span>
          <span
            style={{
              fontFamily: 'Urbanist, system-ui, -apple-system, sans-serif',
              fontWeight: 300,
              fontSize: '14px',
              lineHeight: '121%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              textTransform: 'capitalize',
              color: '#D1D5DB'
            }}
          >
            Products
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBadge;
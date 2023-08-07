import React from 'react';
import HeaderComponent from '../HeaderCompoent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

const DefaultComponent = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <HeaderComponent />
      </div>
      <div style={{ marginTop: '60px' }}>
        {children}
      </div>
      <FooterComponent />
    </div>
  );
}

export default DefaultComponent;

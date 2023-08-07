import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { UpOutlined } from '@ant-design/icons';

const ScrollToTopButton = ({ showBelow }) => {
    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    };

    const handleClick = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        if (showBelow) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    });

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: '#515154',
        color: 'white',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div>
            {show && <div onClick={handleClick}><UpOutlined style={buttonStyle} /></div>}
        </div>
    );
};

export default ScrollToTopButton;

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { CSSTransition } from 'react-transition-group';
import '../tailwindcss/Home.css';

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  
  return (
    <div className="sidebar">
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#" className="womensec">
              women
            </a>
            <ul className="womensec1">
              <li>
                <a href="#">STARTING FROM 40%</a>
              </li>
              <li id="womenJacks">JACKETS | PUFFERS</li>
              <li>
                <a href="#">BLAZERS | COATS</a>
                <ul>
                  <li>
                    <a href="#">DRESSES | JUMPSUITS</a>
                  </li>
                  <li>
                    <a href="#">SHIRTS</a>
                  </li>
                  <li>
                    <a href="#">TROUSERS</a>
                  </li>
                  <li>
                    <a href="#">JEANS</a>
                  </li>
                  <li>
                    <a href="#">T-SHIRTS</a>
                  </li>
                  <li>
                    <a href="#">TOPS | BODYSUITS</a>
                  </li>
                  <li>
                    <a href="#">SKIRTS | SHORTS</a>
                  </li>
                  <li>
                    <a href="#">KNITWEAR</a>
                  </li>
                  <li>
                    <a href="#">SHOES</a>
                  </li>
                  <li>
                    <a href="#">BAGS</a>
                  </li>
                  <li id="womenAcc">ACCESSORIES</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className="mensec">
              men
            </a>
            <ul className="mensec1">
              <li>
                <a href="#">STARTING FROM -60%</a>
              </li>
              <li>
                <a href="#">STARTING FROM -40%</a>
              </li>
              <li>
                <a href="#">JACKETS | COATS</a>
                <ul>
                  <li>
                    <a href="#">OVERSHIRTS</a>
                  </li>
                  <li id="menShirts">SHIRTS</li>
                  <li>
                    <a href="#">T-SHIRTS | SWEATSHIRTS</a>
                  </li>
                  <li>
                    <a href="#">TROUSERS | JEANS</a>
                  </li>
                  <li id="menShoes">SHOES</li>
                  <li>
                    <a href="#">BAGS | BACKPACKS</a>
                  </li>
                  <li>
                    <a href="#">ACCESSORIES</a>
                  </li>
                  <li id="athleticz">ZARA ATHLETICS</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Link href="#">
              <u>Kids</u>
            </Link>
          </li>
          <li>
            <Link href="#">
              <u>SHOES &amp; BAGS</u>
            </Link>
          </li>
          <li>
            <Link href="#">
              <u>JOIN LIFE</u>
            </Link>
          </li>
          <br />
          <li>
            <Link href="#">
              <u>+ info</u>
            </Link>
          </li>
        </ul>
      </nav>
      <CSSTransition
        in={sidebarOpen}
        timeout={300}
        classNames="sidebar-overlay"
        unmountOnExit
      >
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      </CSSTransition>
    </div>
  );
};

export default Sidebar;

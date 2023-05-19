'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Login from '../pages/login';
import '../home/Home.css'
import '../tailwindcss/side.css'



const Home= () => {
  const [activeView, setActiveView] = useState('');

  const handleViewClick = (viewName: string) => {
    if (activeView === viewName) {
      setActiveView('');
    } else {
      setActiveView(viewName);
      
    }
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [log, setLog] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen)
  };

  const toggleLogin = () => {
    setLog(!log);
  };

  const [backgroundImage, setBackgroundImage] = useState(
    'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-join-life/subhome-xmedia-11//w/1920/IMAGE-landscape-default-fill-53c67ecf-62ae-4087-a1a7-2c575c06c8f2-default_0.jpg?ts=1679057887005'
  );

  const handleClick = () => {
    setBackgroundImage('https://www.strategyzer.com/hubfs/zara-large.jpg');
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setBackgroundImage(
          'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-07b13c36-46b1-440b-84a8-e3af731690ef-default_0.jpg?ts=1684086767489'
        );
      } else if (event.key === 'ArrowDown') {
        setBackgroundImage(
          'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-shoes//w/1920/IMAGE-landscape-default-fill-656fc2ed-09b8-4aa2-aa58-1ed1ebefaf31-default_0.jpg?ts=1683833294578'
        );
      } else if (event.key === 'ArrowLeft') {
        setBackgroundImage(
          'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-c858f95e-9272-423c-a1ee-40e7dfd5b638-default_0.jpg?ts=1684136380997'
        );
      } else if (event.key === 'ArrowRight') {
        console.log(event.key, 'hello');

        setBackgroundImage(
          'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-collection//w/1920/IMAGE-landscape-default-fill-9e19aff3-b564-484d-b0f0-11b64bfe7717-default_0.jpg?ts=1683832897603'
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  useEffect(() => {
    const toggleSidebar = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.toggle('active');
      }
    };

    const sidebarToggleBtn = document.querySelector('.sidebar-toggle-btn');
    if (sidebarToggleBtn) {
      sidebarToggleBtn.addEventListener('click', toggleSidebar);
    }

    return () => {
      if (sidebarToggleBtn) {
        sidebarToggleBtn.removeEventListener('click', toggleSidebar);
      }
    };
  }, []);

  return (
    

    <>
    <div className="sidebar">
      <div className="top-section">
        <div className="logo">
          <h1 className="logo-text"></h1>
        </div>
        <img
          src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-menu-vector-icon-png-image_3791388.jpg"
          className="sidebar-toggle-btn"
        />
        <i className="fas fa-angles-right"></i>
      </div>

      <div className="sidebar-menu">
        <div className="top-menu">
          <a
            href="#"
            className={`sidebar-link ${activeView === 'men' ? 'active' : ''}`}
            onClick={() => handleViewClick('men')}
          >
            <i className="fas fa-gauge"></i>
            <span>Man</span>
          </a>
          {activeView === 'men' && (
            <div className="category-menu">
              <a href="#" className="category-link">
                Category 1
              </a>
              <a href="#" className="category-link">
                Category 2
              </a>
              <a href="#" className="category-link">
                Category 3
              </a>
              {/* Add more categories as needed */}
            </div>
          )}
          <a
            href="#"
            className={`sidebar-link ${activeView === 'women' ? 'active' : ''}`}
            onClick={() => handleViewClick('women')}
          >
            <i className="fas fa-chart-simple"></i>
            <span>Woman</span>
          </a>
          {activeView === 'women' && (
            <div className="category-menu">
              {/* Add woman categories */}
            </div>
          )}
          <a
            href="#"
            className={`sidebar-link ${activeView === 'kids' ? 'active' : ''}`}
            onClick={() => handleViewClick('kids')}
          >
            <i className="fas fa-dollar-sign"></i>
            <span>Kids</span>
          </a>
          {activeView === 'kids' && (
            <div className="category-menu">
              {/* Add kids categories */}
            </div>
          )}
        </div>
        {/* Add more menu sections as needed */}
      </div>
    </div>
   
      <style>{`
        body {
          background: url(${backgroundImage}) no-repeat fixed center;
          background-size: cover;
        }
      `}</style>
       <div className="container">
            <div className="logo-container" onClick={openSidebar}>
             
              <img
                className="Logo"
          
                src="https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg"
                alt=""
              />
            </div>
        <span className="rightoptions">
         
            <input className='Search' type="search" placeholder='SEARCH FOR MORE' />
         
          <u>
            <p id=""  onClick={toggleLogin}>
              login
            </p>
          </u>

          <Link href="">
            <u>
              <p>HELP</p>
            </u>
          </Link>
          <Link href="">
            <u>
              <p>CART</p>
            </u>
          </Link>
        </span>
      </div>
     
      {log && <Login />}

    </>
  );
};
export default Home
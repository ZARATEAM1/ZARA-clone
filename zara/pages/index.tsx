'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Login from '../pages/login';
// import '../home/Home.css'
// import '../../tailwindcss/Home.css';
// import styles from '../home/Home.module.css'
// import '../tailwindcss/Log.css'
// import '../tailwindcss/side.css'




const Home= () => {
  const [activeView, setActiveView] = useState('');
  const [vd, setVd] = useState('');

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
  'https://www.leal.work/static/04dc9323f0cac4082a8657a2ba5c3bbe/zara-7.jpg')
  const handleClick = () => {
    setBackgroundImage('https://www.strategyzer.com/hubfs/zara-large.jpg');
    setVd('/videos/vd3.mp4');
    
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
        
        )
        setVd("")  ;
      } else if (event.key === 'ArrowRight') {
        setBackgroundImage(
          'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-atelier/subhome-xmedia-atelier-collection//w/1920/IMAGE-landscape-default-fill-9e19aff3-b564-484d-b0f0-11b64bfe7717-default_0.jpg?ts=1683832897603'
        );
      }
     else if (event.key === 'n') {
      setVd('/videos/vd3.mp4');
    }
    else if (event.key === ' ') {
      setVd('/videos/vd9.mp4');
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

    const sidebarToggleBtn = document.querySelector('#hambuger');
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
     <div className="background-video-container">
      { vd&& (<video className="background-video" autoPlay loop muted>
      <source src={vd} type="video/mp4" />
      </video>)}
    </div>
   
   
      <style>{`
        body {
          background: url(${backgroundImage}) no-repeat fixed center;
          background-size:cover;
          // background-size:500px


         
         
        }
      `}</style>
    
         <header>
        <div id="hambuger">
          <img
          onClick={()=>window.location.href='/All'}
            src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-16.jpg"
            alt=""
            id="hamburgerIcon"
          />
        </div>
        <div id="logohead">
          <a href="/">
            <img
              src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png"
              alt=""
              id="zara_logo"
            />
          </a>
          <div id="ul">
            <ul>
            <a >
                <li onClick={toggleLogin} className="log-help">LOGIN</li>
              </a>
              <a href="/Search">
                <li className="log-help">SEARCH</li>
              </a>
             
              <a href="/help">
                <li className="log-help">HELP</li>
              </a>
              
              <a href="/cart">
                <li>CART</li>
              </a>
            </ul>
          </div>
        </div>
      </header>
     
      {log && <Login />}
      <style jsx>
      {`  
      .background-video-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
      }
      
      .background-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      * {
            margin: 0;
            /* font-family: 'PT Sans', sans-serif; */
            font-family: "Karla", sans-serif;
            padding: 0;
          }
          header {
            display: flex;
            position: sticky;
           
            top: 0;
            z-index: 1;
          }
          
          /* top left side hamburger section  */
          #hambuger {
            width: 25%;
          
            /* border: 1px solid red; */
          }
          #hamburgerIcon {
            width: 15%;
            padding-top: 1.2em;
            padding-left: 1.5em;
            cursor: pointer;
          }
          
          /* right side logo head   */
          #logohead {
            /* border: 1px solid blue; */
            display: flex;
            padding-top: 0.8em;
          }
          
          #logohead>a{
              width:17.5%;
              
          }
          #zara_logo {
            width: 100%;
            height: 100%;
            cursor: pointer;
          
            /* border: 1px solid red; */
          }
          a{
              text-decoration: none;
              color: black;
          }
          
          ul {
            /* border: 2px solid green; */
            display: flex;
            list-style: none;
            position: absolute;
            right: 0;
            gap: 3.2em;
            padding-right: 4em;
            padding-top: 1em;
            font-size: 0.6em;
            font-weight: bolder;
          }
          li {
            cursor: pointer;
          }
          `}
       
      </style>

    </>
  );
};
export default Home

    {/* <>    */}
    {/* </> */}
    {/* <div className="sidebar">
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
            className={`sidebar-link ${activeView === 'men' ? 'active' : ''}`}
            onClick={() => handleViewClick('men')}
          >
            <i className="fas fa-gauge"></i>
            <span onClick={()=>window.location.href='/getmens'}>Man</span>
          </a>
          {activeView === 'men' && (
            <div className="category-menu">
             
            
            </div>
          )}
          <a
            className={`sidebar-link ${activeView === 'beauty' ? 'active' : ''}`}
            onClick={() => handleViewClick('beauty')}
          >
            <i className="fas fa-gauge"></i>
            <span onClick={()=>window.location.href='/beauty'}>beauty</span>
          </a>
          {activeView === 'men' && (
            <div className="category-menu">
             
            </div>
          )}
          <a

            className={`sidebar-link ${activeView === 'women' ? 'active' : ''}`}
            onClick={() => handleViewClick('women')}
          >
            <i className="fas fa-chart-simple"></i>
            <span onClick={()=>window.location.href='/Women'}>Woman</span>
          </a>
          {activeView === 'women' && (
            <div className="category-menu">
      
            </div>
          )}
          <a
            href="#"
            className={`sidebar-link ${activeView === 'kids' ? 'active' : ''}`}
            onClick={() => handleViewClick('kids')}
          >
            <i className="fas fa-dollar-sign"></i>
            <span onClick={()=>window.location.href='/getkids'}>Kids</span>
          </a>
          {activeView === 'kids' && (
            <div className="category-menu">
            
            </div> */}
        
        {/* </div> */}
       
      {/* </div> */}
    {/* </div> */}
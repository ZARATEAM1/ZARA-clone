'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './sideBar';
import Login from './Login';
// import '../tailwindcss/Home.css';
// import '../tailwindcss/Log.css'

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [log, setLog] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen)
  };

  const login = () => {
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

  return (
    <>
      <style>{`
        body {
          background: url(${backgroundImage}) no-repeat fixed center;
          background-size: cover;
        }
      `}</style>
       <div className="container">
        <Link href="/">
          <u>
            <div className="logo-container" onClick={openSidebar}>
              <Image
                className="Logo"
                height={140}
                width={220}
                src="https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg"
                alt=""
              />
            </div>
          </u>
        </Link>

        <span className="rightoptions">
          <Link href="/">
            <input className='Search' type="search" placeholder='SEARCH FOR MORE' />
          </Link>

          <u>
            <p id="/" onClick={login}>
              login
            </p>
          </u>

          <Link href="/">
            <u>
              <p>HELP</p>
            </u>
          </Link>
          <Link href="/">
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

export default Home;

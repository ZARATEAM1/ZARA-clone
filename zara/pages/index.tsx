'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Login from '../pages/login';
// import '../home/Home.css'
// import '../../tailwindcss/Home.css';
import styles from '../home/Home.module.css'

// import '../tailwindcss/Log.css'
// import '../tailwindcss/side.css'




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
       <>
    <div onClick={()=>window.location.href='/Women'}> women </div>
    <div onClick={()=>window.location.href='/beauty'}> beauty</div>
    <div onClick={()=>window.location.href='/getmens'}> mens</div>
    <div onClick={()=>window.location.href='/getkids'}> kids</div>
    
   
    </>
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
      <style jsx>
        {`
        *{
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
          box-sizing: border-box;
        }
        
        body{
          background: #ddd;
        }
        
        .sidebar{
          height: 100vh;
          position: fixed;
          background-color:transparent;
          width: 0px;
          transition: .4s linear;
          padding: 10px 14px;
        }
        
        .top-section{
          position: relative;
          margin-bottom: 40px;
        }
        
        
        .logo{
          display: flex;
          align-items: center;
        }
        
        .logo img{
          width: 50px;
          border-radius: 50%;
          margin-right: 14px;
        }
        
        .logo-text{
          color: #ddd;
          font-size: 28px;
          font-weight: 500;
        }
        
        .sidebar-toggle-btn{
          position: absolute;
          margin-top: 10px;
          right: -27px;
          transform: translateY(-50%);
          font-size: 17px;
          width: 26px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          border-radius: 50%;
          transition: .4s linear;
          cursor: pointer;
          background-image: url("https://png.pngtree.com/png-clipart/20190614/original/pngtree-menu-vector-icon-png-image_3791388.jpg");
        }
        
        
        
        .sidebar.active{
          width: 280px;
          background-color: aliceblue;
        }
        
        .sidebar.active .sidebar-toggle-btn{
          transform: translateY(-50%) rotate(180deg);
        }
        
        
        
        .sidebar-link span{
          opacity: 0;
          transition: .4s linear;
        }
        
        .sidebar.active .sidebar-link span{
          opacity: 1;
          transition: .4s linear;
        }
        
        
        .sidebar-link{
          height: 52px;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          color: #ddd;
          text-transform: uppercase;
          font-size: 17px;
          text-decoration: none;
          overflow: hidden;
          position: relative;
          border-radius: 12px;
        }
        
        .sidebar-link i{
          min-width: 52px;
          font-size: 18px;
          text-align: center;
        }
        
        .sidebar-link::before{
          content: "";
          position: absolute;
          width: 0;
          height: 100%;
          background-color: #2c3e50;
          z-index: -1;
          transition: .4s;
        }
        
        .sidebar-link:hover::before{
          width: 100%;
        }
        
        
        .sidebar-menu{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: calc(100% - 80px);
        }
        p {
  margin: 0;
  padding: 0;
  /* user-select: none;
  font-family: "Poppins", sans-serif;
  background-color: white; */
}

#header {
    position: sticky;
    top: 0;
  }
  .hamburger {
    margin: 10px;
    top: 15px;
    left: 0px;
    height: 45px;
    width: 45px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    transition: left 0.4s ease;
  }
  
  .hamburger.click {
    left: 260px;
  }
  
  .hamburger span {
    color: black;
    font-size: 25px;
    line-height: 45px;
  }
  
  .hamburger.click span:before {
    content: "\f00d";
  }
  
  /* .logo img {
    /* padding: 2px 0px 0px;
 padding-left: 30px;
    margin-top: -75px; */
  
  
  
  .rightoptions {
    display: flex;
    justify-content: end;
    margin-right: 32px;
    /* margin-top: -100px; */
    margin-top: -130px;
    overflow: hidden;
  }
  
  .rightoptions p {
    margin-left: 30px;
  }
  #search-input {
    font-size: 1.2em;
    right: 2ch;

    /* text-decoration: 3px underline; */
    margin-right: 50px;
    /* padding-bottom: 10px; */
    padding-right: 30px;
    border-bottom: 1px solid black;
  }
  #userCheck{
    font-size: 16px;
    top : -4px;
    pointer-events: visible;
  }
  * {
    box-sizing: border-box;
  }
  .mySlides {
    display: none;
  }
  #slideImg {
    vertical-align: middle;
    justify-content: center;
    height: 55%;
    width: 70%;
  }
  
  /* Slideshow container */
  .slideshow-container {
    width: 100%;
    /* position: relative; */
    margin-top: 5%;
    height: 30%;
    width: 45%;
    margin-left: 35%;
  }
  
  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    position: fixed;
    top: 52%;
    width: auto;
    padding: 16px;
    color: black;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  
  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  .prev {
    left: 0;
    border-radius: 3px 0 0 3px;
  }
  
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }
  
  /* Caption text */
  
  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  
  @-webkit-keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  
  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .prev,
    .next,
    .text {
      font-size: 11px;
    }
  }
  
  @media only screen and (max-width: 1200px) {
    #bookVdo {
      transform: rotateZ(90deg);
      width: 750px;
      height: 700px;
    }
    .slideshow-container {
      width: 80%;
      /* position: relative; */
      margin-top: 10%;
      font-size: 20px;
      height: 700px;
      margin-left: 25%;
      margin-bottom: 15%;
    }
    .rightoptions p,
    #search-input {
      font-size: 20px;
    }
    #footer a {
      font-size: 13px;
    }
  
    nav ul li a,
    #womenJacks,
    #womenAcc,
    #menShirts,
    #menShoes,
    #athleticz {
      position: relative;
      color: rgb(0, 0, 0);
      text-decoration: none;
      font-size: 40px;
      line-height: 1.5em;
      padding-left: 79px;
      display: block;
      width: 100%;
    }
  
    nav ul ul li u, #womenJacks, #womenAcc, #menShirts, #menShoes, #athleticz {
      font-size: 35px;
      color: black;
      background-color: gold;
      padding-left: 70px;
      line-height: 1.5em;
  }
  }
  #sale {
    margin-top: -20%;
    margin-left: 18%;
    color: #f4e623;
    font-size: 70px;
    font-weight: bold;
    font-family: Neue-Helvetica, Helvetica, Arial, sans-serif;
  }
  #saleTag {
    margin-left: 22%;
  }
  #bookVdo {
    margin-left: 9%;
    margin-top: 100px;
    /* transform: rotateZ(90deg); */
    justify-content: space-between;
  }
  #audio-control {
    cursor: pointer;
    /* padding: 1px 5px; */
    background: #000;
    color: #fff;
    border-radius: 100px;
    display: flex;
    margin-left: 4%;
    margin-top: -70px;
    width: 25px;
    height: 25px;
    /* align-items: center; */
    justify-content: center;
  }
  #smallText {
    margin-left: 12.8%;
    font-size: 8px;
    margin-top: -7px;
  }
  
  
  .sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: white;
    color: black;
    padding: 10px 15px;
    border: none;
  }
  
  .openbtn:hover {
    background-color: #444;
    color: white;
  }
  
  /* On smaller screens, decrease the sidebar width */
  @media screen and (max-height: 450px) {
    .sidebar {
      padding-top: 15px;
    }
    .sidebar a {
      font-size: 18px;
    }
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
  background-color: white;
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



/* main container   */
#main {
  width: 92.5%;
  /* border: 1px solid red; */
  margin-left: 7.5%;
}


/* search baar  */
#searchbar {
  margin-top: 1.6em;
  width: 98%;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  padding: 0.2em 0em;
  font-size: 1.9em;
  font-weight: bold;
}
#searchbar::placeholder {
  color: black;
}

/* below search baar tranding products  */
#trending_product {
  /* border: 1px solid red; */
  margin-top: 5em;
  /* line-height: 3.5em; */
  font-size: 0.68em;
  font-weight: bold;
}
#trending_product > :first-child {
  color: black;
  cursor: text;
  /* border: 1px solid red; */
  font-size: 1.5em;
}

#trending_product > p {
  cursor: pointer;
  color: #757575;
  margin-bottom: 2.1em;
}



.grid{
  display: grid;
}
.none{
  display: none;
}
#shirt-products {
  /* display: grid; */
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 0px 20px;
}
#shirt-products > div {
  margin-bottom: 2.8em;
}
#shirt-products > div > div {
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
}
#shirt-products > div > div >:nth-child(1):hover{
    text-decoration: underline;
    cursor: pointer;
}

#shirt-products > div > img {
  width: 100%;
}

/* shoes product   */
#shoes-products{
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 0px 20px;
}
#shoes-products > div {
  margin-bottom: 2.8em;
}
#shoes-products > div > div {
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
}
#shoes-products > div > div >:nth-child(1):hover{
    text-decoration: underline;
    cursor: pointer;
}

#shoes-products > div > img {
  width: 100%;
}

/* womenAccessories-products */

#womenAccessories-products{
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 0px 20px;
}
#womenAccessories-products > div {
  margin-bottom: 2.8em;
}
#womenAccessories-products > div > div {
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
}
#womenAccessories-products > div > div >:nth-child(1):hover{
    text-decoration: underline;
    cursor: pointer;
}

#womenAccessories-products > div > img {
  width: 100%;
}

/* women-jacket  */
#women-jacket {
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 0px 20px;
}
#women-jacket  > div {
  margin-bottom: 2.8em;
}
#women-jacket  > div > div {
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
}
#women-jacket  > div > div >:nth-child(1):hover{
    text-decoration: underline;
    cursor: pointer;
}

#women-jacket > div > img {
  width: 100%;
}

/* footer section   */
#about {
  display: flex;
  width: 92.5%;
  border-bottom: 1px solid rgb(212, 211, 211);
  padding-top: 50%;
  padding-bottom: 10%;
  /* border: 2px solid red; */

  /* margin-bottom: 50px; */
}
#about > :nth-child(3) {
  margin-left: 2.3em;
}
#about > :nth-child(4) {
  margin-left: 2.3em;
}
.about_info {
  margin-right: 1em;
}
.about_info > h4 {
  font-size: 1em;
  margin-bottom: 0.7em;
}
.about_info > p {
  cursor: pointer;
  font-size: 0.65em;
  font-weight: bold;
  margin-bottom: 0.4em;
}
.about_info > p:hover {
  text-decoration: underline;
}


#footer_section {
  /* border: 2px solid red; */
  margin-left: 7.5%;
}
footer {
  display: flex;
  justify-content: space-between;
  padding-top: 5.5em;
  padding-bottom: 8em;
  width: 92%;
  /* border: 2px solid red; */
}

#footer_left_box {
  /* border: 1px solid red; */
  font-size: 0.65em;
  font-weight: bold;
  width: 50%;
}
#footer_left_box > :nth-child(2) {
  margin-top: 15em;
}
#footer_right_box {
  /* border: 1px solid red; */
  font-size: 0.65em;
  font-weight: bold;
  width: 30%;
  text-align: right;
}
#footer_right_box > :nth-child(2) {
  margin-top: 2.2em;
  color: grey;
}

#searchProd {
  /* display: grid; */
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  padding: 0px 20px;
}
#searchProd > div {
  margin-bottom: 2.8em;
}
#searchProd > div > div {
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
}
#searchProd > div > div >:nth-child(1):hover{
    text-decoration: underline;
    cursor: pointer;
}

#searchProd > div > img {
  width: 100%;
}




/* media queries ---------------------------- */
@media screen and (min-width: 360px) and (max-width: 741px) {
  /* #ul,
  .none {
    display: none;
  } */
  .log-help{
    display: none;
  }

  #hambuger {
    width: 10%;

    /* border: 1px solid red; */
  }
  #hamburgerIcon {
    width: 50%;
    padding-left: 10px;
    padding-top: 1em;
    cursor: pointer;
  }
  #logohead {
    width: 90%;
    /* border: 1px solid blue; */
    display: flex;
    padding-top: 0.8em;
  }

  #logohead>a{
    width: 35%;

  }
  #zara_logo {
    width: 100%;
    height: 75px;
    cursor: pointer;

    /* border: 1px solid red; */
  }
  #main {
    width: 90%;
    margin: auto;
    /* border: 1px solid red; */
  }
  #searchbar {
    margin-top: 1.6em;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    padding: 0.2em 0em;
    font-size: 1.9em;
    font-weight: bold;
    /* border: 1px solid red; */
  }
  .grid{
    display: grid;
  }
  .none{
    display: none;
  }
  #shirt-products {
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #shoes-products{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #womenAccessories-products{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #women-jacket {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #about {
    display: flex;
    width: 90%;
    margin: auto;
    border-bottom: 1px solid rgb(212, 211, 211);
    padding-top: 50%;
    padding-bottom: 10%;

}
.about_info {
      display: none;
    margin-right: 1em;
  }
  footer {
    display: grid;
    grid-template-columns: repeat(1,1fr);
    justify-content: space-between;
    padding-top: 5.5em;
    padding-bottom: 8em;
    width:100%;
    /* border: 2px solid red; */
    text-align: center;
  }
  #footer_section {
    /* border: 2px solid red; */
    margin-left: 0%;
  }
  #footer_left_box {
    /* border: 1px solid red; */
    font-size: 0.65em;
    font-weight: bold;
    width: 100%;
  }
  #footer_right_box {
    /* border: 1px solid red; */
    font-size: 0.65em;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  
}

@media screen and (min-width: 0px) and (max-width: 360px) {
    /* #ul,
    .none {
      display: none;
    } */
    .log-help{
      display: none;
    }
    #hambuger {
      width: 10%;
  
      /* border: 1px solid red; */
    }
    #hamburgerIcon {
      width: 50%;
      padding-left: 10px;
      padding-top: 1em;
      cursor: pointer;
    }
    #logohead {
      width: 90%;
      /* border: 1px solid blue; */
      display: flex;
      padding-top: 0.8em;
    }

    #logohead>a{
      width: 40%;

    }
    #zara_logo {
      width: 100%;
      height: 70px;
      cursor: pointer;
  
      /* border: 1px solid red; */
    }
    #main {
      width: 90%;
      margin: auto;
      /* border: 1px solid red; */
    }
    #searchbar {
      margin-top: 1.6em;
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 2px solid black;
      padding: 0.2em 0em;
      font-size: 1.9em;
      font-weight: bold;
      /* border: 1px solid red; */
    }
    .grid{
      display: grid;
    }
    .none{
      display: none;
    }
    #shirt-products {
      /* display: grid; */
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 0px 20px;
    }
    #shoes-products{
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 0px 20px;
    }
    #womenAccessories-products{
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 0px 20px;
    }
    #women-jacket {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 0px 20px;
    }
    #about {
      display: flex;
      width: 90%;
      margin: auto;
      border-bottom: 1px solid rgb(212, 211, 211);
      padding-top: 50%;
      padding-bottom: 10%;
  
  }
  .about_info {
        display: none;
      margin-right: 1em;
    }
    footer {
      display: grid;
      grid-template-columns: repeat(1,1fr);
      justify-content: space-between;
      padding-top: 5.5em;
      padding-bottom: 8em;
      width:100%;
      /* border: 2px solid red; */
      text-align: center;
    }
    #footer_section {
      /* border: 2px solid red; */
      margin-left: 0%;
    }
    #footer_left_box {
      /* border: 1px solid red; */
      font-size: 0.65em;
      font-weight: bold;
      width: 100%;
    }
    #footer_right_box {
      /* border: 1px solid red; */
      font-size: 0.65em;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
   
  }
  .Search {
    width: 160px;
    height: 30px;
    padding: 5px;
    border: none;
    background-color: transparent;
    color: #000;
    font-size: 12px;
    font-weight: bold;
    font-style: initial;
    font-display:unset;
    outline: none;
  }
  
  .Search::placeholder {
    color: #000000;
  }
  
  .Logo {
    height: 140px;
    object-fit: contain;
    padding-left: 70px;
    padding-top: -10px;
  }
  `}
      </style>

    </>
  );
};
export default Home
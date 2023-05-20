import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

interface TokenPayload {
  email: string;
  iat: number;
}

const Navbar: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the token from local storage
    const savedToken = localStorage.getItem('token');

    if (savedToken) {
      // Parse the token and extract the payload
      const decodedToken = jwtDecode<TokenPayload>(savedToken);

      // Access the decoded payload properties
      const { email } = decodedToken;
      setToken(savedToken);
      setName(email);
    }
  }, []);

  const change = token ? `You're welcome ${name}` : 'LOG IN';

  return (
    <>
    <div id="logo">
    <a href="/">
        <img src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png" alt="zaralogo"/>
        </a>
    </div>
    
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',marginTop:'-140px' }}>
  <div id="ship">
    <div className="active" onClick={() => window.location.href = '/'}>Home</div>
    <div></div>
    <div>HELLO {change}</div>
    <div></div>
    <div onClick={() => window.location.href = '/Search'}>SEARCH</div>
  </div>

  <div id="help">
    <ul></ul>
  </div>
</div>

    
    <style jsx>
            {`*{
    margin: 0%;
    padding: 0%;
    font-family: Neue-Helvetica, Helvetica, Arial, sans-serif;;
}
nav{
    display: flex;
    position: sticky;
    top: 0%;
    background-color: white;
}
#logo{
    width: 210px;
    margin-top: 10px;
    margin-left: 8%;
    margin-bottom: 10px;
}
#logo>a>img{
    width: 100%;
}
a{
    text-decoration: none;
    color: black;
}
#ship{
    width: 16%;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    font-weight: bold;
    color: rgb(155, 154, 154);
    margin-top: 50px;
    margin-left: 17%;
}
.active{
    color: black;
}
#help{
    width: 8%;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    margin-top: 20px;
    margin-left: 33%;
    font-weight: bold;
}
#card>div{
    display: flex;
    margin-left: 69%;
}
#card{
    background-color: white;
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0%;
}
button{
    width: 240px;
    background-color: black;
    border: none;
    color: white;
    height: 40px;
    margin: 20px;
}

button:hover{
    background-color: rgb(53, 53, 53);
    cursor: pointer;
}

#price{
    font-size: 13px;
    font-weight: bold;
    margin-top: 20px;
}
#bottom{
    width: 84%;
    margin: auto;
    margin-top: 50px;
}
#bottom>p{
    border: 1px solid #ffae48;
    color: #ffae48;
    width: 600px;
    font-size: 11px;
    padding: 20px 0px 20px 20px;
    margin-top: 20px;
}
#bottom>h2{
    font-size: 22px;
    line-height: 28px;
}
#bottom>h3{
    margin-top: 35px;
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(202, 202, 202);
}
@media only screen and (min-width:391px) and (max-width:768px){
    #logo{
        width: 170px;
        margin-top: 10px;
        margin-left: 8%;
        margin-bottom: 10px;
    }
    #ship{
        width: 37%;
        font-size: 15px;
        margin-top: 40px;
        margin-left: 5%;
    }
    #help{
        width: 15%;
        font-size: 12px;
        margin-left: 9%;
    }
}
@media only screen and (min-width:0px) and (max-width:390px){
    #logo{
        width: 180px;
        height: 120px;
        margin-top: 30px;
        margin-left: 15%;
        margin-bottom: 10px;
    }
    #ship{
        display: none;
    }
    #help{
        display: none;
    }
    #bottom{
        width: 80%;
        margin-top: 10px;
    }
    #bottom>p{
        border: none;
        border-top: 1px solid rgb(179, 177, 177);
        border-bottom: 1px solid rgb(179, 177, 177);
        width: 100%;
        font-size: 12px;
        line-height: 17px;
        padding: 10px 0px 10px 10px;
    }
    #bottom>h2{
        font-size: 20px;
        margin-left: 10px;
    }
}`}
         </style>
         
    
    </>
  
  );
};

export default Navbar;

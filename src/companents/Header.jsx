import React from 'react';
import  "../assets/style.css"
const Header = () => {
    return (
        <div className='Header mx-auto' > 

<div className="container">
<nav className='row' >
   <div className="col-lg-6">
   <div className="brand text-center ">
<a href="https://sardordev-portfolio.netlify.app">
<img  width={76} height={76} src="https://sardordev-portfolio.herokuapp.com/images/logo.PNG" alt="Error Logo" />

</a>
    </div>
   </div>
    <div className="col-lg-6" >


            <h1 className='text-center' >Crypto Price Tracker</h1>
    

    </div>
</nav>
</div>

        </div>
    );
};


export default Header;
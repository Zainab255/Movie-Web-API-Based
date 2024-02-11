import React from 'react';
import Search from './Search';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--text-clr)' }}>
        <div className="container-fluid">
          <p className="nav-link active" aria-current="page" href="#" style={{ textAlign : 'center', fontSize: '4rem' }}>
            Movie_Searcher
          </p>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ">
              {/* Navbar links go here */}
            </ul>
        
        
         <h2 className='d-lg-block' style={{  color: 'black', fontSize: '2rem', marginRight : '2rem' , marginTop : '1rem', }}>Search Your Favourite Movie</h2>
          <Search className='d-lg-block'/>
        
          </div>
       </div>
      </nav>
      {/* This div contains elements that will be displayed below the navbar on small screens */}
      <div className="d-lg-none">
        <h2 style={{ paddingTop: '3rem' , textAlign : 'center',}}>Search Your Favourite Movie </h2>
        <Search />  
      </div>
    </div>
  )
}

export default Navbar;

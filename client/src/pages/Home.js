import React, { useState } from 'react';
import bootstrap from 'bootstrap'

//* Component Import
import Header from '../components/Header';

function Home() {

  return(
    <div className="d-flex flex-column min-vh-100 divMain">

      <header className="">
        <Header />
      </header>

      <div className='homeHeaderSpacer d-flex align-items-center justify-content-center'>

        <div className='row d-flex align-items-center justify-content-center homeLandingZone'>
          <div className='homeHelloText'>
            Hello my name is
          </div>
          <div className='mt-4 homeNameText'>
            Clayton Skaggs
          </div>
          <div className='mt-5 homeRoleText'>
            I build Full Stack applications for web and mobile platforms.
          </div>
          <div className='mt-5 homeDesText'>
            I am a Full Stack web developer with a degree in Computer Engineering from Oklahoma State University and 5+ years experience working as a Product Development Engineer at Intel developing Xeon class processors and chipsets. I am looking to leverage my existing programming skills to be a successful Full Stack developer by utilizing key web development technologies like HTML, CSS, Javascript, React, and Node.
          </div> 
        </div>

        <div className='container homeLinksBox'>
          <div class="container justify-content-center align-items-center text-center w-75">
            <div class="row mt-5">
              <a href="/DevPortfolio" className='homeLinkButtonsText'>
                <h1 className="col portfioloTitle p-3 homeLinkButtonsText homeLinkButtons">Dev Portfolio</h1>
              </a>
            </div>
            <div class="row mt-5">
              <a href="/About" className='homeLinkButtonsText'>
                <h1 className="col portfioloTitle p-3  homeLinkButtons homeLinkButtonsText">About Me</h1>
              </a>
            </div>
          </div>
        </div>

      </div>






      <div className="container py-5">
        <div className="col text-center">

          <div className="row d-flex container devLinksBox mt-5">
            <div className="d-flex container flex-row py-3 align-items-center justify-content-around" >
              
              <div className="flex-row align-items-center justify-content-center">
                <a href="https://github.com/DesertCow">
                  <img src={require('../img/Icons/github.png')}
                    className=""
                    width="50"
                    alt="GitHub Icon"/>
                </a>
              </div>
              
              <div className="flex-row align-items-center justify-content-center">
                <a href="https://www.linkedin.com/in/clayton-skaggs-3084b950">
                  <img src={require('../img/Icons/LinkedIn.png')}
                    className=""
                    width="50"
                    alt="LinkedIn Icon"/> 
                </a> 
              </div>
              
              <div className="flex-row align-items-center justify-content-center">
                <a href="https://www.instagram.com/skagggggggs/">
                  <img src={require('../img/Icons/Instagram.png')}
                    className=""
                    width="50"
                    alt="Instagram Icon"/>
                </a>
              </div>
              
              <div className="flex-row align-items-center justify-content-center">
                <a href="https://www.youtube.com/@MrClaytonskaggs">
                  <img src={require('../img/Icons/YouTube.png')}
                    className=""
                    width="50"
                    alt="YouTube Icon"/>
                </a>
              </div>

            </div>
          </div>
          <div className="w-100"></div>
        </div>
      </div>

    </div>
  )

}

export default Home;
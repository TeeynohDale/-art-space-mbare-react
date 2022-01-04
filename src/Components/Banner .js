import React from 'react'
import './Banner.css';
import PartnerText from './PartnerText';
 
 const Banner = () => {
     return (
         <section id="banner" className="banner">

             <div className="paint">
                 <div className="vert">
                     <div className="line"></div>
                     <h2>Welcome</h2>
                 </div>

                 <div className="center">
                     <img src="./img/marcus.png" className="banner-pic" />

                     <div className="logos">
                         <img src="./img/LOGO.png" className="logo" />
                         <img src="./img/0 (1).png" className="logo mid" />
                         <img src="./img/959aabe042c613ae6889b01862f0461e.png" className="logo" />
                     </div>
                 </div>



                 <div className="inner">
                     <PartnerText
                         head="Mbare Art Space"
                         brief="
                  Creating a space for artists to
                  showcase their work 
                  "
                         act="Empowering Communities"
                     />
                 </div>
             </div >
         </section>
     )
 }
 
 export default Banner ;
 
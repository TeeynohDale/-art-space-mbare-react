import React from 'react';
import PartnerText from './PartnerText';
import './ArtLovers.css';



const ArtLovers =()=> {
    return (
        <section className="art-lovers" id="art-lovers">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-6">
                       <PartnerText 
                          head="A Space For Art Lovers"
                          brief="
                          Mbare Art Space is being built as a 
                          multipurpose space where artists can create, eat 
                          and shop as well learning and playing with kids.
                          "
                          act="Take a Tour"
                       />
                   </div>
                   <div className="col-md-6">
                       <img src="./img/Group 3.png" className="khama" alt=''/>
                   </div>
               </div>
           </div>
        </section >
    )
}

export default ArtLovers

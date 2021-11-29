import React from 'react'
import PartnerText from './PartnerText'
import './AboutMbare.css'

function AboutMbare() {
    return (
        <section className="about-mbare" id="about-mbare">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="matapi">
                            <img src="./img/Group 6.png"  alt="image of matapi flats"/>
                            < button className="btns">View Matapi Flats</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inner">
                            <img src="./img/Group 7.png" alt="kids seated on a truck" className="kidz"/>
                            <PartnerText
                             head="About Mbare"
                             brief="Mbare is home to large number of artists in Zimbabwe,
                             from oil painters to material  recycle artists.
                             "
                             
                             act="More on the community"
                            >
                                <p>
                                    The main concern is getting exposure for those artist, that's
                                    where the urban culture and heritage initiative to come and 
                                    help. 

                                </p>
                            </PartnerText>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMbare

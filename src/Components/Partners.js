import React from 'react'
import PartnerLogo from './PartnerLogo'
import PartnerText from './PartnerText'

function Partners() {
    return (
        <section id="our-partners">
            <h2 className="thead">Our proud partners</h2>
            <div id="partners">
                <div className="logos">
                    <PartnerLogo
                        src="./img/LOGO.png"
                        name="National Gallery Zim"
                    />
                    <PartnerLogo
                        src="./img/0 (1).png"
                        name="Uncommon.org"
                    />
                    <PartnerLogo
                        src="./img/polylogo.png"
                        name="Harare Polytechnic"
                    />
                    <PartnerLogo
                        src="./img/959aabe042c613ae6889b01862f0461e.png"
                        name="City Of Harare"
                    />
                </div>
                <div className="milly">
                    <img src="./img/Group 12.png" alt=''/>
                    <button>Uncommon.org</button>
                </div>
                <PartnerText

                    brief="
                Our mission is empower young
                adults from low-income 
                communities with technology 
                education and the opportunities 
                they need. "

                    act="View Profile"
                />
            </div>
        </section>
    )
}

export default Partners

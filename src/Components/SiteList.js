import React from 'react'
import SocialSites from './SocialSites'

const SiteList =() =>{
    return (
        <div className="social">
            <div className="row">
                <SocialSites 
                    owner="kitchen_and_dining" 
                    src='./img/Stylizimo (1).png'
                    alt=''
                    icon='fa fas-instagram'
                />
                <SocialSites 
                    owner="Mbare_art_space" 
                    src='./img/mural close up boy.png'
                    alt=''
                    icon='fa fas-instagram'
                />
                <SocialSites 
                    owner="Uncommon_Org" 
                    src='./img/Sprout-hands on laptop.png'
                    alt=''
                    icon='fa fas-instagram'
                />
                <SocialSites 
                    owner="kitchen_and_dining" 
                    src='./img/mural.png'
                    alt=''
                    icon='fa fas-instagram'
                />
                <SocialSites 
                    owner="kitchen_and_dining" 
                    src='./img/filing.png'
                    alt=''
                    icon='fa fas-instagram'
                />
                <SocialSites 
                    owner="kitchen_and_dining" 
                    src='./img/3dplan.png'
                    alt=''
                    icon='fa fas-instagram'
                />
            </div>
        </div>
    )
}

export default SiteList

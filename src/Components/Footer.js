import React from 'react'
import './Footer.css'

const Footer =() =>{
    return (
        <footer>
            <h2>Get In Touch </h2>
            <div className="inner">
                <div className="item">
                    <p>
                        <span>Geri Kam, Project Coordinator</span>
                        <span>kamgeri@gmail.com</span>
                        <span>WhatsApp +263-782-744-881</span>
                    </p>
                    <p>
                        <span>Nora Müller, Project Coordinator</span>
                        <span>WhatsApp +263-784-618-590</span>

                    </p>
                </div>
                <div className="item">
                    <p>
                        <span>Moffat, Artist</span>
                        <span>WhatsApp +263-773-084-381</span>
                    </p>
                    <p>
                        <span>Gari, Community Liason</span>
                        <span>+263 773 601 931</span>
                    </p>
                    
                </div>
                <p className="invert">
                    Mbare_Art_Space
                </p>
                
            </div>
        </footer>
    )
}

export default Footer

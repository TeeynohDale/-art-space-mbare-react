import React from 'react'
import './Construction.css'

function Construction() {
    return (
        <section id="construction">
            <h2>The Space under construction</h2>
            <div className="spaces ">
                <div className="inner">
                    <div className="top">
                        <div className='lil'>
                            <img className='bigg' src="./img/IMG_2021.png"/>
                            <img  className='lyt' src="./img/brewery.png"/>
                        </div>
                        <div  className="large" >
                            <img  className='lyt' src="./img/kitchen.png"/>
                            <img  className='bigg' src="./img/ablution-wall2.png"/>
                        </div>
                       
                    </div>
                </div>
                <div className="side">
                    <img src="./img/rwth-1.png"/>
                </div>
            </div>
        </section>
    )
}

export default Construction

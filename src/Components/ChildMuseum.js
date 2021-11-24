import React, { Component } from 'react'
import Museums from './Museums'
import './ChildMuseum.css'


 class ChildMuseum extends Component {
   

    render( ) {
        return (
            <section id="child-museum">
                <h2>The Children's Museum</h2>
                <Museums 
                    play='./img/child museem2 - Copy.png' 
                    promise="
                    We are open for play! We're doing the best we can to serve
        as many families as possible while still abiding by the state
        order that greatly limits our capacity."
                />
                  <Museums 
                    play='./img/23.png' 
                    promise="Children's museums are institutions that provide
                    exhibits and programs to stimulate informal learning
                    experiences for children"
                />
                <Museums 
                    play='./img/13.png' 
                    promise="The children's museum of Mbare is a hands on
                    museum that allows children ages 0-8 to experience
                    the possibility of play. Explore the museum with us!"
                >
                </Museums>
                <button className="btn">Explore</button>
            </section>
            
        )
    }
}
export default ChildMuseum;
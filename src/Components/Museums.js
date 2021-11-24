import React, { Component,} from 'react'
import './ChildMuseum.css'

 class Museums extends Component {
   

    render(_children) {
        return (
            <div className="playrooms">
                <img className="play" src={this.props.play}/>
                <p className="promise">{this.props.promise}</p>
                
                {this.props.children}
            </div>
        )
    }
}
export default Museums;
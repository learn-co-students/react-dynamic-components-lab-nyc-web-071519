import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const op = this.props.opacity;

    if (this.props.opacity >= 0.2) {
        return (          
        <div className="color-box" style={{opacity: op}}>
          <ColorBox opacity={op - 0.1} />
        </div>
        );
    } else {
        return null;
    }
}
  
}

import React, {Component} from 'react';
export default class Image1 extends Component {  
  render() {
    let {src, width, maxWidth, style, ...props} = this.props;

    let defaults = {
      maxWidth: maxWidth || "500px",
      width: width || "100%",
      backgroundColor: 'off-white',
      height: 'auto',
    };

    let important = {
      src: src
    };

    // eslint-disable-next-line
    return <img {...props} {...important} style={{...defaults, ...style}} />
  }
}
import React, { useState } from "react";
import {} from 'react-dom';
import { Container } from "reactstrap";

    
function Image(props) {
 return(
    <div className="f-flex justify-content-center">
        <div style={styles.ImageStyle}>
                    <img style={styles.img} src={props.src} alt="image data" className="img-fluid rounded"/>
                </div>
    </div>
 );
}

const styles = {
    ImageStyle:{
        width :210,
        height: 155,
    },
    
  }

export default Image;
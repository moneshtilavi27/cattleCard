import React, { useState } from "react";
import {} from 'react-dom';
import QRCode from "react-qr-code";

    
function Qr(props) {
const {value} = props;
 return(
    <QRCode size={85} style={styles.qr} value={value}/>
 );
}

const styles = {
  
}


export default Qr;
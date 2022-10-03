import React, { useState } from "react";
import {} from 'react-dom';
import { Container } from "reactstrap";

    
function Details(props) {
const {title, value} = props;
 return(<p style={styles.p}>{title} : {value}</p>    );
}

const styles = {
    p:{
        margin:'0px',
        fontFamily:"Helvetica Neue",
        fontSize:'13px',
    }
}


export default Details;
import { ScrollDirection } from "@progress/kendo-react-dateinputs/dist/npm/virtualization/Virtualization";
import React, { Component } from "react";
import {p} from 'react-dom';
import { Container } from "reactstrap";
import Details from "../components/Details";
import Image from "../components/Image";
import Qr from "../components/Qr";
import styles from "./style";

class CattleCardFront extends Component{
   
    constructor(props)
    {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
                <div className="p-3 text-center" style={styles.mainBox}>
                    <div className="">
                        <img className="img-responsive" src="assets/images/logo1.png" style={styles.logo}/>
                    </div>
                    <hr style={styles.hr}/>
                    <p style={styles.mainHeading} className="text-center">REGISTRATION CERTIFICATE</p>
                    <p style={styles.cmpheading}>ADIS Unique Identification of Animal</p>
                    <hr style={styles.hr}/>

                    <div className="d-flex justify-content-center">
                        <Image src="assets/images/cattle2_4.jpg"/>
                    </div>

                    <div className="m-2">
                    <h3 style={{fontFamily:'Helvetica Neue'}}>166 323 064 2665</h3>
                    </div> <hr style={styles.hr}/>

                    <div className="text-start">
                        <p className="text-center m-1" style={styles.cmpheading}>Animal Didital Information System (ADIS)</p>
                        <Details title="Owner" value="Sujit Hukkerikar"/>
                        <Details title="Mobile" value="8762508040"/>
                        <Details title="Address" value="Belgaum, Karnataka."/>
                        <Details title="No. of owners" value="1"/>
                    </div><hr style={styles.hr}/>

                    <div className="text-start">
                        <Details title="Animal Name" value="Tanuja"/>
                        <Details title="Ear tag/ RFID" value="A0003527"/>

                        <div className="row text-start">
                            <div className="col-7">
                                <Details title="Species" value="Cow"/>
                            </div>
                            <div className="col-5">
                                <Details title=" Breed" value="Gir"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <Details title="Location" value="2"/>
                            </div>
                            <div className="col-5">
                                <Details title="Gender" value="Female"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <Details title="Animal DOB" value="15-09-2016"/>
                            </div>
                            <div className="col-5">
                                <Details title="Age" value="6y, 0m, 2d"/>
                            </div>
                        </div>
                        <Details title="Father Id" value=""/>
                        <Details title="Mother Id" value=""/>
                    </div><hr style={styles.hr}/>
                
                    <div className="text-start">
                        <Details title="Insurance by" value=""/>
                        <Details title="Insurance policy no." value=""/>
                        <Details title="Insurance valied upto." value=""/>
                        <Details title="Hypothecation" value=""/>
                    </div><hr style={styles.hr}/>

                    <div className="text-start">
                        <div className="row text-start">
                            <div className="col-8">
                                <Details title="Authenticated by" value=""/>
                            </div>
                            <div className="col-4">
                                <Qr value="Dinesh Hannurkar"/>
                            </div>
                        </div>
                        </div>
                        <hr style={styles.hr}/>
                    </div>
        );
    }
}

export default CattleCardFront;
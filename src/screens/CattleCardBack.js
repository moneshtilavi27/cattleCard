import React, { Component } from "react";
import Image from "../components/Image";
import styles from "./style";

class CattleCardBack extends Component{
   
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

                    <div className="d-flex justify-content-center m-4">
                        <Image src="assets/images/cattle2_4.jpg"/>
                    </div>
                    <div className="d-flex justify-content-center m-4">
                        <Image src="assets/images/cattle2_4.jpg"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Image src="assets/images/cattle2_4.jpg"/>
                    </div>

                    <div className="m-1 mt-4">
                        <p style={styles.disclaim}>Disclaimer : <span style={styles.subDisclaim}>ADIS TECHNOLOGIES Pvt Ltd has taken an initiative to organise 
                                the ANIMAL Care sector in India and create an ecosystem around it. We are 
                                the First and only BIO TAGGING, registration & recovery data-service provider in 
                                India, incorporated AS A PRIVATE LIMITED with registered office at KARNATAKA. 
                                The registration does not make any claims regarding the certification of variety/
                                breed/quality/value/price of pets. It also does not mandate monitor any Shows/ 
                                Pet events/Participation /Prizes/ any activities. ADIS TECHNOLOGIES Pvt Ltd 
                                understands the challenges involved in building an ecosystem like this, yet takes 
                                this initiative with the aim to serve animal owners with the best and need-based 
                                animal related services, products and support.</span></p>
                    </div><hr style={styles.hr}/>

                    <div className="row">
                        <div className="col-6 text-start">
                            <p style={styles.lastHead}>08762688442</p>
                        </div>
                        <div className="col-6 text-end">
                        <p style={styles.lastHead} >http:adis.co.in</p>
                        </div>
                    </div>
                    </div>
        );
    }
}


export default CattleCardBack;
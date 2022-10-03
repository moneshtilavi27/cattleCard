import React, { Component,useState } from "react";
import {} from 'reactstrap';
import CattleCardFront from './screens/CattleCardFront';
import CattleCardBack from "./screens/CattleCardBack";
 // ES2015 module syntax
 import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
 import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import './App.css';
import products from "./shares/product.json";
import Details from "./components/Details";
import Image from "./components/Image";
import axios from "axios";

function App() {

  const [ adharData, setAdharData ] = useState();
  const [ userData, setUserData ] = useState();

  const pdfExportComponent = React.useRef(null);
 
  const getCattleCard = () =>{
    const post = {
      'cattle_id': "1663226729188"
    };
    console.log(JSON.stringify(post));

     axios.post(`http://134.209.144.127/adis.co.in/api2/cattlelist`,{post})
      .then(response => {
        const posts = response.data;
        console.log(posts);
        setAdharData(posts);
      });
  }

  const exportPDFWithMethod = () => {
      let element = document.querySelector('.k-grid') || document.body;
      savePDF(element, {
      paperSize: 'A4'
      });
    };

    const exportPDFWithComponent = () => {
      if (pdfExportComponent.current) {
         pdfExportComponent.current.save();
      }
    };

  return (
    <div className="App">
    <div className="text-center">
          <PDFExport ref={ pdfExportComponent } paperSize="A3">
          <div className="row ">
            <div className="col-6">
              <CattleCardFront cattleData = {adharData}/>
            </div>
            <div className="col-6">
            <CattleCardBack/>
            </div>
      </div>
      </PDFExport>

      <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={()=>getCattleCard()}>
          call Api
        </button>
      <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithComponent}>
          Export to PDF with component
        </button>
        &nbsp;
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithMethod}
        >
          Export to PDF with method
        </button>
      </div>
    </div>
  );
}

export default App;

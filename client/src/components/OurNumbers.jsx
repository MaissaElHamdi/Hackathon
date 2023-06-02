import React from "react";
import Number from "./Numbers";
import "./OurNumbers.css";

function OurNumbers() {
  return (
    <div id="Numbcontent">
      
      <div id="Numb">
          <div className="separation">
              <Number number="2500" adding="+" />
              <div class="label">Participants</div> 
          </div>

            <div className="separation">
              <Number number="100" adding="+" />
              <div class="label">Exposants et Sponsors</div> 
            </div>
            <div className="separation">
              <Number number="300" adding="+" />
              <div class="label">Rencontres B2B</div> 
            </div>
            
            <div className="separation">
              <Number number="150" adding="+" />
              <div class="label">Speakers</div> 
            </div>

            <div className="separation">
                <Number number="10" adding="+" />
              <div class="label">Délégations internationales</div> 
            </div>
        

      </div>
    </div>
  );
}
export default OurNumbers;

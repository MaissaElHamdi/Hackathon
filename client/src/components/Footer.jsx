import React from 'react'
import logo from "../Assets/logo.png";
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="foot">
      <div className="container">
            <div className="f-col">
                    

                 <div className="imaglogo">
                
                 </div>   
                    
        
            </div>
          <div className="f-col">
              
          <h3>Navigation</h3>
              <ul className='ulfoot'>
                  <li><a href="">Acceuil</a></li>
                  <li><a href="">Agenda</a></li>
                  <li><a href="">Inscription</a></li>
                  <li><a href="">Orateurs</a></li>
                </ul>
              
  
          </div>
          <div className="f-col">
              <h3>Contacts</h3>
              <ul>
                  
                  <li className="icon-center">
                      <div>
                          <i className="fa fa-map-marker" ></i>
                      </div>
                      <div>
                          <p><span>121 Rock Street,21 Avenue</span>  New York, NY 92103-9000</p>
                  
                      </div>
                      
                      
                  </li>
                  <li className="icon-center">
                      <div>
                          <i className="fa fa-phone"></i>
                      </div>
                      <div>
                          <p id="phone">+216 14 122 001</p>
                      </div>
                      
                      
                  </li>
                  <li className="icon-center">
                      <div>
                          <i className="fa fa-envelope"></i>
                      </div>
                      <div>
                          <a href="mailto:social.innovation@gmail.com" target="_blank">social.innovation@gmail.com</a>
                      </div>
                      
                      
                  </li>
                  <li className="icon-center">
                      <div>
                          <i className="fa fa-globe"  ></i>
                      </div>
                      <div>
                          <a href="Home.html" target="_blank">social.innovation.com</a>
                      </div>
                      
                      
                  </li>
      
              </ul>
              
  
          </div>
  
          <div className="f-col">
              <h3>Follow Us</h3>
              
              <div className="icon-right">
                  <a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook"></i></a>
                  <a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram"></i></a>
                  <a href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin"></i></a>
                  
              </div>
  
          </div>
      </div>

      
      
    </footer>
    )
}

export default Footer
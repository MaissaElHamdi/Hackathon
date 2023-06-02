import React from 'react';
import "./Home.css";
import Video from '../../components/Video_home';
import OurNumbers from '../../components/OurNumbers';
import "../../components/OurNumbers.css"
import conference1 from "../../Assets/conference2.jpg"
import conference2 from "../../Assets/programming-background-with-person-working-with-codes-computer.jpg"
import SliderPartner from '../../components/Slider';

function Home() {
  return (
    <div className="main">

      <div className="first-part">
        <Video />
        <div className="content">
        <h2 >Social Innoviation</h2>
        <h1>HACKATHON</h1>
        
        </div>
        <button  class="btnins">Inscription</button>

      </div>
      <h1 className='h1about'>A Propos</h1>
      <div className='about-part'>
        <div className='photo'>
          <img src={conference2} />
        </div>
        <div className='paragraph'>
        
        <p>Cette activité stimule le sens de challenge chez les jeunes talents et les start’ups dans les domaines de la technologie en les invitant à résoudre pertinemment une critique problématique via une intelligente solution digitale dans le cadre d’un accompagnement assuré par nos mentors, nos coachs et nos experts tout en rémunérant les efforts fournis par un cash prize.</p>
        </div>
        
      </div>

      
      <div className='num-part'>
        <OurNumbers/>
      </div>
      
      <h1 className='h1agenda'>Un Programme des activités pour atteindre le sommet de vos attentes</h1>
      <div className='agenda-part'>
        <div className='photo'>
          <img src={conference1} />
        </div>
        <div className='paragraph'>
        
        <p>Bienvenue dans notre hackathon ! Nous sommes ravis de vous présenter un programme passionnant et innovant qui promet de stimuler votre créativité et de repousser les limites de vos compétences en matière de développement et de résolution de problèmes. Notre hackathon est conçu pour rassembler des esprits curieux, des développeurs passionnés et des entrepreneurs ambitieux afin de collaborer et de créer des solutions technologiques novatrices.</p>
           <button  class="btnprog">Voir Programme</button>
        </div>
        
      </div>

      <div className='partners-part'>
        <h1>Nos Sponsors et Partenaires</h1>
        <SliderPartner/>
      </div>

      
      

    </div>
    
  );
}

export default Home;
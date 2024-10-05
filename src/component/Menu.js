import React from 'react';
import linkedin from './images/linkedin.jpg';
import github from './images/github.jpg';
import resume from './docs/Resume.pdf';
import cv from './docs/CV.pdf';
import aws from './docs/AmazonWebServices.pdf';
import oracle from './docs/Oracle.pdf';
import './Menu.css';

const linkINURL = "https://www.linkedin.com/in/smadhavkv96/";
const gitHBURL = "https://github.com/kvsaimadhav/";
function Menu()
{
  return(
    <div className="Menu">
     <ul className="menu">
         <li><a href="#home" rel="no-referrer no-opener">Home</a></li>
         <li><a href="#work" rel="no-referrer no-opener">Work</a></li>
         <li><a href="#project" rel="no-referrer no-opener">Project</a></li>
         <li><a href="#academic" rel="no-referrer no-opener">Academic</a></li>
         <li><a href="#contact" rel="no-referrer no-opener">Contact</a></li>
         <li><a href="#" rel="no-referrer no-opener">Documents</a>
            <ul class="doc">
              <li><a href={resume} rel="no-referrer no-opener" target="_blank">Resume</a></li>
              <li><a href={cv} rel="no-referrer no-opener" target="_blank">Curriculum Vitae</a></li>
              <li><a href="#" rel="no-referrer no-opener">Certifications</a>
                <ul class="cert">
                  <li><a href={aws} rel="no-referrer no-opener" target="_blank">Amazon Web Services</a></li>
                  <li><a href={oracle} rel="nno-referrer o-opener" target="_blank">Oracle</a></li>
                </ul>
              </li>
            </ul>
         </li>
         <li>
            <a href="#" rel="no-opener">connect</a>
            <ul class="profile">
              <li><a href={linkINURL} rel="no-referrer no-opener" target="_blank"><img class="linkedin" src={linkedin} referrerPolicy="no-referrer"/>&nbsp;LinkedIn</a></li>
              <li><a href={gitHBURL} rel="no-referrer no-opener" target="_blank"><img class="github" src={github} referrerPolicy="no-referrer"/>&nbsp;GitHub</a></li>
            </ul>
         </li>
     </ul>
    </div>
  );
}

export default Menu;

import React from 'react';
import './Project.css';
import image1 from './images/covidtrack.jpg';
import image2 from './images/security.jpg';

function Project(){
  return(
    <div className="Project" id="project">
      <div class="heading">
        <h2><b>Masters' student</b></h2>
        <p>
          As a student of Central Michigan, performed research or non-research projects. I did research projects with extensive focus on Python based
          website development. <br/> I used django package with all round experience and specialization of website development. Both, Research and Non-Thesis 
          projects consists of keen interest in <br/> situations at that time. Hoped to believe for betterment every moment.
        </p>
      </div>
      <div class="content">
        <div class="ProjectBx">
          <img src={image1} alt="Non-Thesis Project under Chairperson"/>
            <h2>Website for Covid Tracking in Michigan Locale</h2>
              <p>
                Project consists of Industry oriented research under Dr. Patrick Kinnicutt, proposed website for covid 
                tracking hit in michigan locale when I started my college. Team continued for using timely updates and 
                stipulated presentations for the said proposal. Experience gained with progression doubtfully with prophet 
                algorithm as saturation or unsaturation usage. Project Concluded that 90 plus percentage can be obtained 
                with saturation and more than 70 percent dataset points. Thus, Project was closed with extensive results as 
                if it was a research or industry oriented web application <b>....</b> 
                <a href="https://github.com/kvsaimadhav/ITC691-Research/" rel="no-referrer no-opener" target="_blank"><i>view</i></a>
              </p>
              
        </div>
        <div class="ProjectBx">
          <img src={image2} alt="Course Project under Security Professor""/>
            <h2>Website for avoiding Phishing attacks through Client Puzzle</h2>
              <p>
                Research consists of security course under Dr. Qi Liao, proposed for avoiding phishing attacks on 
                website. Research continued with learnt skills, and Implemented website according to course interest. 
                Results formulated removing false negative rates on phishing attacks happened then. And, provided with 
                more than asked about client puzzle "if solved, only then benign user get access to website". Course 
                completed with website developed and research paper and presentation for good insight on work or 
                campus culture <b>....</b>
                <a href="https://github.com/kvsaimadhav/ITC520-Research/" rel="nno-referrer o-opener" target="_blank"><i>view</i></a>
              </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

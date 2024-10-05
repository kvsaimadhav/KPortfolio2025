import React from 'react';
import drdo from './images/drdo.jpg';
import ssg from './images/ssg.jpg';
import neemus from './images/neemus.jpg';
import './Work.css';

function Work()
{
  return(
    <div className="Work" id="work">
      <div clasName="workHeader">
        <h2 align="center">Work Experience</h2>
        <p>
          I am all rounder with district, state and national ranks and national medalist or winner at college. I am keen 
          observer, explorer and enthusiast for learning Software Technology as quickly possibly as it is. I define strict 
          rules which cannot be ruled out even by myself. I hope to self-learn and mutually learn with Industry. I have gut
          feeling that intuition will kill any negativity inside us and heal ourselves as fast as possible. 
        </p>
      </div>
      <div className="workContent">
      <div className="workBxCurr">
          <img src={neemus} alt="Current Company"/>
          <h3>Neemus Software Solutions</h3>
          <p>
            Projects consists of Core Backend Development with observation skillset. I worked on Qt Framework for 
            about a year for attaining C++ expertise. More than Two successfully delivered and helped business grow 
            with mutual benefit of learning technology. Firstly, Designed 60% modules of standalone C++ coding standards 
            with five membered team. Next, I was deputed to client location and managed 4 membered team and acted as 
            a key player for project completion. Thus, Software Development Life Cycle and Agile/ Waterfall were practiced
            with project life cycle understood.
            </p>
        </div>
        <div className="workBxICurr">
          <img src={drdo} alt="Previous Immediate Company"/>
          <h3>DRDL Kanchanbagh</h3>
          <p>
            Project consists of Software with Oracle database had learnt. Enhanced skillset PL/SQL, Java/ JSP, ASP.net,
            Excel Visual Basics and so on. I had interaction regularly with boss and timely failures of database servers 
            were taken. He gave idea consulting superior persons and then proceeded with Restore/ Backup since more than 
            five years. However, daily backup were not sufficing needs of users. Thus, external purchase was demanded with 
            successfully trained colleague and apprentice. Atlast, I was able to satisfy superior people and side projects were
            done many. Some of them are Employee Database and guided colleague with .NET technology.
          </p>
        </div>
        <div className="workBxPrev">
          <img src={ssg} alt="After Masters Degree in CS at CMich - Job Offered"/>
          <h3>Strategic Solutions Group</h3>
          <p>
            Project consists of Massachussets Virtual Epideomological Network, a diesease surveillence system 
            with website based on Java/JSP/Servlets. I was able to complete 15 jira's and used AWS workspace 
            for Production support tasks. Also, peer review for about few hours was done with colleague. And, 
            resolved cloud watch triggers arised by complex database queries debugging. Atlast, appreciation 
            received from by CTO, CXO and CFO during tenure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;

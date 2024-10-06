import React from 'react';
import './Contact.css';
import proInd from'./images/ProjectInd.jpg';
import proBud from './images/ProjectBud.jpg';
import proRsrch from './images/ProjectRsrch.jpg';
import proDB from './images/ProjectDB.jpg';

function Contact()
{
  return(
    <div className="Contact" id="contact">
        <div class="contactCard">
          <h2>Contact Me</h2>
        </div>
        <table class="contactTb">
          <tr>
            <td>
              <div class="contactInfo">
                <h3>Contact Info</h3>
                <div class="contactInfoBx">
                <div class="box">
                      <div class="text">
                         <h3>Designation:</h3>
                         <p>&nbsp;Software Engineer</p>
                      </div>
                   </div>
                   <div class="box">
                      <div class="text">
                         <h3>Home Address:</h3>
                         <p>&nbsp;Warangal, TS</p>
                      </div>
                   </div>
                   <div class="box">
                      <div class="text">
                         <h3>Mobile Phone:</h3>
                         <p>&nbsp;+91-8331065200</p>
                      </div>
                   </div>
                   <div class="box">
                      <div class="text">
                         <h3>Work Email:</h3>
                         <p>&nbsp;kvsaimadhav@gmail.com</p>
                      </div>
                   </div>
                </div>
              </div>
            </td>
            <td>
               <div class="formBx">
                <form>
                 <label>First:</label>&#9;&#9;<input type="text" name="firstName" placeholder="First Name" defaultValue={"John"}/><br/>
                 <label>Last:</label>&#9;&#9;;<input type="text" name="lastName" placeholder="Last Name" defaultValue={"Doe"}/><br/>
                 <label>Email:</label>&#9;&#9;<input type="Email" name="email" placeholder="Email Address" defaultValue={"john.doe@gmail.com"}/><br/>
                 <label>Contact:</label>&#9;&#9;&#9;<input type="text" name="phone" placeholder="Contact Number" defaultValue={"9999999999"}/><br/>
                 <label>Message:</label>&nbsp;<textarea placeholder="Your Message" defaultValue={"Hi, How are You ..."}/>
                 <br/><center><input type="submit" name="send" value="send"/></center><br/>
                </form>
               </div>
            </td>
            <td>
               <div class="projectH"> 
                  <h2>Projects URL</h2><br/>
               </div>
               <div class="projectCard">
                  <div class="projectBx">
                     <a href="https://github.com/kvsaimadhav/ITC691-Research" rel="no-opener no-referrer" target="_blank"><img src={proInd} alt="Industrial Project"/></a>
                     <a href="https://github.com/kvsaimadhav/ITC686-Research" rel="no-opener no-referrer" target="_blank"><img src={proBud} alt="Buddie Project"/></a>
                     <a href="https://github.com/kvsaimadhav/ITC520-Research" rel="no-opener no-referrer" target="_blank"><img src={proRsrch} alt="Research Project"/></a>
                     <a href="https://github.com/kvsaimadhav/CPS541-Research" rel="nno-opener no-referrer" target="_blank"><img src={proDB} alt="Database Project"/></a>
                  </div>
               </div>
            </td>
         </tr>
        </table> 
   </div>
  );
}

export default Contact;

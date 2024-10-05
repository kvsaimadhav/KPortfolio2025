import React from 'react';
import './Academic.css';
import CMich from './images/CMICH.jpg';
import BITS from './images/bits.jpg';

function Academic()
{
  return(
    <div className="Academic" id="academic">
      <div class="academicHeader">
        <h2 align="center">Academics</h2>
      </div>
      <div class="academicContent">
        <div class="academicBx">
          <img src={CMich} alt="Central Michigan University Logo"/>
          <h3>Masters' University</h3>
          <p>
            I did university degree with completion in 2021. And I know when life gives you infinity problems, We need to think
            &nbsp;that "How to apply lessons learnt in real-life situations. We feeling makes stronger and best. Also, I implement
            &nbsp;the same". However, I faced rejections, attended more than thousands' of interviews, got black mailed by companies
            &nbsp;and faith rejuvenated with family persons. That's how life throws you with problems. Once a good person said,
            &nbsp;"Hope, faith and belief can never be Lost. It can only been ..". I asked myself, how to complete that sentence
            &nbsp;Then, I graduated from public university and continued to think positively. I will never ever hurdle thoughts.,
          </p>
        </div>
        <div class="academicBx">
          <img src={BITS} alt="BITS Pilani Logo"/>
          <h3>Bachelors' Alumni</h3>
          <p>
            I graduated from college in 2018. And I strived for life, applied for higher degree in top most universities. 
            &nbsp;I got dual admits i.e., from Canada and later, I need not say. BITS Pilani is there for everyone and vise 
            &nbsp;versa. However, lessons learnt is that "How ever hard life situations be, You got to strive for betterment".
            &nbsp;I never expected those thoughts can be applied in basic skillset development. Thus, I thank everyone for
            valuable support.,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Academic;

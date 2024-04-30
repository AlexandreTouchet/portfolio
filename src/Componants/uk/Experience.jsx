import React from "react";
import '../../Assets/Scss/Experience.scss';

export default function Experience() {
    return (
        <>
      <hr />
      <h2 id="myExperience" className='projects'>My <span className='letter-blue'>Experience</span></h2>
        <ul class="timeline">
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="flag">Institut Marie Thérèse Solacroup</span>
                        <span class="time-wrapper"><span class="time">2021 - 2022</span></span>
                    </div>
                    <div class="desc">Bac+3 Application Developer Designer</div>
                </div>
            </li>
        
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="flag">Institut Marie Thérèse Solacroup</span>
                        <span class="time-wrapper"><span class="time">2019 - 2021</span></span>
                    </div>
                    <div class="desc">Bac+2 Developer web & web mobile</div>
                </div>
            </li>

            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="flag">Lycée Fontaine des eaux</span>
                        <span class="time-wrapper"><span class="time">2016 - 2018</span></span>
                    </div>
                    <div class="desc">Bac pro sen (System electronique numérique)</div>
                </div>
            </li>
        
        </ul>
        </>
    )
}
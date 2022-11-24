import React from 'react';

const Projects = () => {

    return (
        <div>
            <section class="work-bar">
                <section class="left-title">
                    <h1> Work</h1>
                </section>
                <section id="work" class="bar-columns">
                    <section class="upper-frame" id="upper-frame">
                        <img class="large-image" src="./assets/images/cheesecake.jfif"></img>
                        <section class="tile-labels">
                            Empire Cheesecakes  MERN Stack
                        </section>
                    </section>

                    <section class="lower-frame">
                        <section class="small-worktile" id="small-tile">
                            <img class="small-image" src="./assets/images/restaurant.png" alt="graphic of restaurant logo for Iberian Pig"></img>
                            <section class="tile-labels"> HTML/CSS Restaurant website </section>
                        </section>
                        <section class="small-worktile" id="small-tile">
                            <img class="small-image" src="./assets/images/rochambeau.jpg" alt="image of three hands playing rock, paper, scissors"></img>
                            <section class="tile-labels"> JavaScript  Rock, Paper, Scissors game</section>
                        </section>
                        <a class="small-worktile" href="https://moz.com/beginners-guide-to-seo" target="_blank" id="small-tile">
                            <img class="small-image" src="./assets/images/SEO.jfif" alt="image of a computer on a desk with a hand-drawn magnifying glass overlaying it"></img>
                            <section class="tile-labels"> SEO Search Engine Optimization</section>
                        </a>
                        <a class="small-worktile" href="https://www.wordstream.com/conversion-rate-optimization" target="_blank" id="small-tile">
                            <img class="small-image" src="./assets/images/CRO.jpg" alt="graphic of various digital devices and how they connect to the user"></img>
                            <section class="tile-labels"> CRO Conversion Rate Optimization </section>
                        </a>
                    </section>

                </section>
            </section>
        </div>
    )
}


export default Projects
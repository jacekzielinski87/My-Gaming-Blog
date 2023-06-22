import React from "react";
import Basim from '/src/Articles images/assasin creed mirage basim.webp';


const Content = () => {
    return (
      <div className="content">
        <section className="mainContent">
            <article className="articleItem">
                <img className="basimImage" src={Basim}></img>
                <p className="aboutMirage">Co wiemy o Assasin's Creed Mirage ?</p>
            </article>
        </section>
      </div>
    );
  };
  
  export default Content;
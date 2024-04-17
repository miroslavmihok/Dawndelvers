import React from "react";
import bg from "../../assets/backgrounds/main-home-rev-2.png";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function About() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0) 50%, rgba(28,16,36,1) 100%), url(${bg}) center center / cover no-repeat`,
      }}
    >
      <Breadcrumbs />
      <h2 className="mb-14">About us</h2>
      <div className="max-w-[800px] px-8 text-center lg:px-0">
        <p>
          Located in the beautiful region of Burgenland, Austria, Boosting
          Service is a premier gaming services provider founded by Miroslav
          Mihok. At Boosting Service, we specialize in offering top-notch
          services for boosting and coaching in various popular games. Our
          expert team is dedicated to helping gamers achieve their goals,
          whether it's acquiring in-game currency, conquering challenging raids
          and dungeons, defeating formidable bosses, or obtaining specific
          in-game items. With our reliable and professional assistance, players
          can level up their gaming experience and reach new heights of success
          in their favorite virtual worlds.
        </p>
      </div>
    </div>
  );
}

export default About;

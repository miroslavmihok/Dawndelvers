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
      <div className="max-w-[800px] text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolor ea
          assumenda debitis aperiam, praesentium reprehenderit libero? Quae
          provident libero, quas aperiam a praesentium asperiores eum repellat
          corrupti saepe expedita obcaecati culpa. Incidunt perspiciatis porro
          tempore accusamus et fuga aut libero. Facilis, aliquam. Quis,
          deserunt. Sit nihil excepturi enim fugit ad nemo temporibus harum
          inventore nam a facilis ut aspernatur qui laboriosam, expedita id
          quisquam, error placeat? Consequuntur sequi voluptate mollitia
          distinctio consequatur eius eveniet, aut quisquam omnis nesciunt sint
          illum vero fugiat magnam, aperiam earum sunt praesentium minima?
          Quaerat blanditiis aspernatur ex et iste beatae adipisci iure
          voluptates ipsa?
        </p>
      </div>
    </div>
  );
}

export default About;

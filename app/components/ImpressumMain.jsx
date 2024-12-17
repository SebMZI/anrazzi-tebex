import Link from "next/link";
import React from "react";

const ImpressumMain = () => {
  return (
    <main>
      <section id="hero-impressum" className=" py-[8.5rem] relative">
        <div className="max-w-screen-xl mx-auto relative z-10 px-5">
          <div className="text-center mb-10">
            <h1 className="font-bold text-left text-5xl sm:text-[4rem] mb-4 leading-none text-white-custom">
              <span className="text-ascent">Legal </span>Notices
            </h1>
          </div>
        </div>
      </section>
      <section
        id="main-impressum"
        className="max-w-screen-xl mx-auto flex flex-col justify-center items-center py-[2.5rem] px-5 relative"
      >
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Website Owner</h2>
          <ul>
            <li>Legal Name: Sébastien Morazzani-Marigny / Territa</li>
            <li>Status: Self-employed </li>
            <li>SIRET/SIREN: 98304430600014 </li>
          </ul>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Address</h2>
          <ul>
            <li>6 Les Rives de l&apos;Acheneau</li>
            <li>44710, Port Saint Père, France</li>
          </ul>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Contact Informations</h2>
          <ul>
            <li>Tel: 06 36 37 70 46</li>
            <li>mail: contact@sebastien-morazzani.com</li>
          </ul>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Website Host</h2>
          <ul>
            <li>Vercel Inc.</li>
            <li>440 N Barranca Avenue #4133</li>
            <li>Covina, CA 91723</li>
            <li>United States</li>
            <li>
              <Link href="https://vercel.com/">See Website</Link>
            </li>
          </ul>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Intellectual Property</h2>
          <p>
            All content on this website (scripts, text, images, videos, etc.) is
            the exclusive property of Sébastien Morazzani-Marigny / Territa
            unless otherwise stated. Any unauthorized reproduction or use is
            strictly prohibited.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Liability</h2>
          <p>
            The website owner cannot be held responsible for errors or
            interruptions of the service.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Applicable Law and Jurisdiction</h2>
          <p>
            This website is governed by French law. Any disputes will be subject
            to the exclusive jurisdiction of the courts of Nantes, France.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ImpressumMain;

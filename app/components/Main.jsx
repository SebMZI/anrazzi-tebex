import React from "react";
import Button from "./Button";
import Image from "next/image";
import Benefit from "./Benefit";
import Form from "./Form";
import content from "@/app/_data/content.json";
import Link from "next/link";
import FAQSection from "./FAQSection";

const Main = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Anrazzo - Home",
            description:
              "Anrazzi offers premium FiveM scripts, custom resources, and high-quality GTA 5 mods for an enhanced gaming experience. Explore exclusive content, mods, and resources to elevate your GTA 5 roleplay with top-tier FiveM scripts and customizations.",
            url: "https://anrazzi.fr",
            mainEntityOfPage: "https://anrazzi.fr",
            image: "/images/anrazzi-opengraph.webp",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are your files protected ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all our files are encrypted by cfx to preserve the intellectual property.",
                },
              },
              {
                "@type": "Question",
                name: "I have an issue, can I get assistance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Join our Discord server for comprehensive support. Response times may vary due to time zone differences, so we appreciate your patience!",
                },
              },
              {
                "@type": "Question",
                name: "Can I unsubscribe ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you can unsubscribe at any time. Your package will be instantly removed from Keymaster, and your access will be revoked until you subscribe again.",
                },
              },
              {
                "@type": "Question",
                name: "Are your scripts updated often ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our scripts are updated when needed. If a bug occurs we'll take care of it. You'll be notified when a fix has been done.",
                },
              },
              {
                "@type": "Question",
                name: "Can I get a custom script ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Of course! Just reach out to us via the form below or open a ticket on our Discord server. However, please note that prices may be higher later.",
                },
              },
            ],
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "https://anrazzi.fr",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Boutique",
                  item: "https://anrazzi.fr/store",
                },
              ],
            },
            publisher: {
              "@type": "Organization",
              name: "Anrazzi - Territa",
              logo: {
                "@type": "ImageObject",
                url: "https://anrazzi.fr/images/anrazzi-logo.png",
              },
            },
          }),
        }}
      ></script>
      <section
        id="main-hero"
        className="flex flex-col justify-center items-center py-[11.25rem] px-5 relative"
      >
        <div className="text-center mb-12 z-10">
          <h1 className="font-bold text-center text-5xl sm:text-[4rem] max-w-4xl mb-4 leading-tight">
            Level Up Your <span className="text-ascent">FiveM</span> Server with
            Our Scripts
          </h1>
          <h2 className="text-lg sm:text-xl">
            Handcrafted NUI Scripts and More for a Seamless Experience.
          </h2>
        </div>
        <Button text="Shop Now" link="/store" />
        <Image
          src="/images/background-img.png"
          alt="Dotted transparent background"
          width="1440"
          height="645"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center w-full py-28 gap-12 px-5">
          <h2 className="font-medium text-4xl sm:text-5xl text-left w-full">
            Our <span className="text-ascent">lastest </span>Resource
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-10 md:gap-20 mb-10">
            <div className="md:col-span-4">
              <Image
                src={content["hero_home"].mainImg.href}
                width={1280}
                height={720}
                alt={content["hero_home"].title}
                className="rounded"
              />
            </div>
            <div className="md:col-span-3">
              <div>
                <Link href={content["hero_home"].href}>
                  <h2
                    className="text-4xl lg:text-6xl font-bold mb-3 w-fit  relative hover:after:scale-x-100 hover:after:origin-left 
                after:content-[''] after:absolute after:left-0 after:-bottom-[8%] 
                after:w-full after:origin-right after:scale-x-0 after:h-[2px] 
                after:transition-transform after:duration-300 after:bg-ascent"
                  >
                    {content["hero_home"].title}
                  </h2>
                </Link>
                <h3 className="text-lg md:text-xl font-light">
                  {content["hero_home"].subtitle}
                </h3>
              </div>
              <div className="mt-10">
                <p className="opacity-60">Price</p>
                <p>
                  <span className="mr-2 text-3xl font-bold">
                    {content["hero_home"].price}€
                  </span>
                  <span>
                    {content["hero_home"].type === "Abonnement" && "/month"}
                  </span>
                </p>
              </div>
              <Link href={content["hero_home"].href}>
                <button className="bg-ascent  py-3 px-6 rounded-md z-10 text-black w-full mt-10 hover:opacity-80 transition-opacity uration-[400]">
                  <span className=" font-medium text-sm sm:text-base">Buy</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="main-benefits" className="bg-light-black ">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center w-full py-28 px-5 gap-20 lg:gap-0">
          <Benefit title={"Simple"} subtitle={"Installation"} />
          <Benefit title={"Dedicated"} subtitle={"Support"} />
          <Benefit title={"Regular"} subtitle={"Updates"} />
        </div>
      </section>
      <FAQSection />
      <section id="cta" className="bg-light-black px-5">
        <div className="max-w-screen-xl py-28 mx-auto">
          <h2 className=" text-4xl sm:text-[3.5rem] font-bold text-left max-w-4xl leading-tight mb-10 text-white-custom">
            Turn your server into a <span className="text-ascent">massive</span>{" "}
            success
          </h2>
          <Button text={"Start now"} link="/store" />
        </div>
      </section>
      <section id="contact" className="relative">
        <Form />
      </section>
      <section id="discord" className="bg-light-black px-5">
        <div className="max-w-screen-xl py-28 mx-auto">
          <h2 className=" text-4xl sm:text-[3.5rem] font-bold text-left max-w-4xl leading-tight mb-10 text-white-custom">
            Join Our <span className="text-ascent">Discord</span> to Make Sure
            You Don&apos;t Miss Anything
          </h2>
          <Button text={"Join now"} link="https://discord.gg/AbxHp6xKUV" />
        </div>
      </section>
    </main>
  );
};

export default Main;

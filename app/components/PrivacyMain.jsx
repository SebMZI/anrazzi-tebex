import React from "react";

const PrivacyMain = () => {
  return (
    <main>
      <section id="hero-impressum" className=" py-[8.5rem] relative">
        <div className="max-w-screen-xl mx-auto relative z-10 px-5">
          <div className="text-center mb-10">
            <h1 className="font-bold text-left text-5xl sm:text-[4rem] mb-4 leading-none text-white-custom">
              <span className="text-ascent">Privacy </span> Policy
            </h1>
          </div>
        </div>
      </section>
      <section
        id="main-impressum"
        className="max-w-screen-xl mx-auto flex flex-col justify-center items-center py-[2.5rem] px-5 relative"
      >
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Introduction</h2>
          <p>
            At Territa, we are committed to protecting your privacy and ensuring
            a secure online experience. This Privacy Policy explains how we
            collect, use, and protect your personal information when you visit
            or use our services. By using our site, you consent to the practices
            described in this policy.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Information We Collect</h2>
          <p>
            We may collect the following types of information when you use our
            website:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <p>Personal Information:</p>
              <p>We may collect personal details such as:</p>
              <ul className="list-disc pl-5">
                <li>Email address</li>
                <li>Discord ID</li>
                <li>
                  Any information you provide through forms or communications on
                  our site
                </li>
              </ul>
            </li>
            <li>
              <p>Usage Data:</p>
              <p>
                We automatically collect data related to how you use our
                website, including:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Pages visited, time spent on the site, and your interaction
                  with elements on the page
                </li>
                <li>IP address, browser type, and device details</li>
                <li>
                  Cookies and other tracking technologies to help us analyze
                  site traffic and enhance your experience.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-5">
            <li>
              To Provide Customer Support: To answer your questions and help you
              with any issues you might face on the site.
            </li>
            <li>
              To Notify You: We may send you notifications regarding updates to
              our products, new scripts available, or special offers.
            </li>
            <li>
              To Improve Site Functionality: We continually work to improve our
              website’s design, usability, and performance based on user
              behavior and feedback.
            </li>
            <li>
              For Legal or Administrative Reasons: To comply with legal
              requirements or enforce our terms and conditions.
            </li>
          </ul>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal information to third parties.
            However, we may share information with trusted third-party service
            providers who assist in operating our business and website:
          </p>
          <ul className="list-disc pl-5">
            <li>Tebex: To process payments and manage product deliveries.</li>
            <li>Discord: For communication purposes and customer support</li>
            <li>
              Analytics Providers: We use tools like Google Analytics and
              Microsoft Clarity to analyze website usage.
            </li>
            <p>
              We may also disclose your information if required by law or to
              protect our legal rights.
            </p>
          </ul>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure. Our website is secured with
            SSL encryption to ensure the safety of any sensitive data submitted.
            However, no method of transmission over the Internet is completely
            secure, so we cannot guarantee absolute security.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5">
            <li>Access your personal information that we hold</li>
            <li>Correct or update any inaccuracies in your data</li>
            <li>Request deletion of your personal data</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at
            contact@sebastien-morazzani.com
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Cookies</h2>
          <p>
            We use cookies to enhance your experience on our website. Cookies
            are small data files that are stored on your device. They help us
            analyze website traffic and understand user preferences.
          </p>
          <p>
            You can control cookie usage through your browser settings. If you
            prefer not to accept cookies, you may still browse our site, but
            some features may not function as intended.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">
            Retention of DataRetention of Data
          </h2>
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy. If you request
            deletion of your data, we will remove it from our records, subject
            to legal or contractual obligations.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Children’s Privacy</h2>
          <p>
            Our services are not intended for children under the age of 18. We
            do not knowingly collect personal data from children. If we become
            aware that we have collected personal information from a child under
            18, we will take steps to delete such information.
          </p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any updates will be
            posted on this page with an updated &quot;Effective Date.&quot;
          </p>
          <p>Effective Date: 12/17/2024</p>
        </div>
        <div className="w-full text-left mb-6">
          <h2 className="font-bold font-xl">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy
            or how we handle your personal data, please contact us at:
          </p>
          <ul className="list-disc pl-5">
            <li>Email: contact@sebastien-morazzani.com</li>
            <li>or On Discord</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PrivacyMain;

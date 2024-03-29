'use client'

import { useState } from 'react';
import ContactModal from '../components/ContactModal';
import SocialFooter from '../components/SocialFooter';
import Link from 'next/link'

export default function Home() {
  const [contactFormActive, setContactFormActive] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-12">
    
      { !contactFormActive && <div className="heroContainer container font-sans text-center flex flex-col gap-3 sm:gap-4">
        <p className="text-base sm:text-lg text-amber-400 leading-relaxed">Hi, I&apos;m Rob - welcome to my space.</p>

        <h1 className="text-3xl sm:text-4xl text-amber-400 font-semibold leading-none">Full-Stack Software Engineer</h1>
        <h4 className="text-xs sm:text-sm font-light text-gray leading-relaxed">JS Stacks (React, Vue, Angular, Node) - AWS - MongoDB - CI/CD</h4>
        
        <p className="text-xs text-gray leading-relaxed">Currently <strong>open</strong> to <strong>contract,</strong> <strong>freelance</strong> and <strong>full-time lead &amp; senior engineering</strong> opportunities</p>
      
        <div className="callToActions flex flex-col sm:flex-row my-2 justify-center">
          <Link href="/contact" className="border border-solid border-amber-500 bg-amber-500 hover:bg-amber-300 hover:border-amber-300 px-4 py-2 rounded-md text-white font-light mb-4 sm:mb-0 sm:mx-2 shadow-sm hover:shadow-md transition-all">
            Send me a message
          </Link>

          {/* <button className="border border-solid border-amber-500 bg-transparent hover:bg-amber-300 hover:border-amber-300 hover:text-white px-4 py-2 rounded-md text-amber-500 font-light sm:mx-2 shadow-sm hover:shadow-md transition-all">My passion projects</button> */}
        </div>

      </div> }

      {/* Social Footer */}
      <SocialFooter />

      {/* Contact modal */}
      { contactFormActive && <ContactModal /> }

      {/* <button onClick={(e) => setContactFormActive(!contactFormActive)}>TOggle Form</button> */}
    </main>
  )
}

'use client'

import { useState } from 'react';

export default function ContactPage() {
  const [contactFormActive, setContactFormActive] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-12 sm:px-24 md:px-36 lg:px-36 xl:px-64">
    
      { !contactFormActive && <div className="heroContainer container font-sans text-left flex flex-col gap-3 sm:gap-4">
        <h1 className="text-3xl sm:text-4xl text-amber-400 font-semibold -ml-1">Contact</h1>

        <p className="text-xs sm:text-sm font-light text-gray leading-relaxed">Looking to start a fresh and exciting project or hire a skilled engineer? Email me at <a href="mailto:rob@robbyl.co">rob@robbyl.co</a> or shoot me a message below and let&apos;s have a chat!</p>

        <p className="text-xs text-gray leading-relaxed mt-4 mb-2">Currently <strong>open</strong> to <strong>contract,</strong> <strong>freelance</strong> and <strong>full-time lead &amp; senior engineering</strong> opportunities</p>

        <form action="" className="flex flex-col">
            <label className="flex flex-col mb-4">
                <span className="text-gray text-xs font-bold">Name</span>
                <input className="rounded border border-amber-400 border-solid p-2 mt-1" type="text" />
            </label>
            <label className="flex flex-col mb-4">
                <span className="text-gray text-xs font-bold">Email / Phone</span>
                <input className="rounded border border-amber-400 border-solid p-2 mt-1" type="text" />
            </label>
            <label className="flex flex-col mb-4">  
                <span className="text-gray text-xs font-bold">Message</span>
                <textarea className="rounded border border-amber-400 border-solid p-2 mt-1 h-28" />
            </label>
             <button className="border border-solid border-amber-500 bg-amber-500 hover:bg-amber-300 hover:border-amber-300 px-4 py-2 mt-2 rounded-md text-white font-light shadow-sm hover:shadow-md transition-all w-full">Send me a message</button>
        </form>
      </div> }
    </main>
  )
}

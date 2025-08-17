import React from "react";

function RealEstateForm() {
  return (
    <div className="flex flex-col font-[biondi] md:flex-row w-full h-auto sm:h-screen">
      {/* Left image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="/askanova_landing.jpg" // replace with your image
          alt="Dubai Skyline"
          className="w-full h-full  object-cover"
        />
      </div>

      {/* Right form */}
      <div className="w-full py-20 md:w-1/2 bg-[#2f1316] text-[#f7f0f1] flex items-center justify-center px-6 sm:px-12">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full max-w-lg space-y-6"
        >
          {/* Required Web3Forms access key */}
          <input
            type="hidden"
            name="access_key"
            value="YOUR-WEB3FORMS-ACCESS-KEY"
          />

          {/* Heading */}
          <h1 className="font-[biondi] text-3xl sm:text-5xl">
            LOOKING FOR REAL ESTATE?
          </h1>
          <p className="font-[note] text-base sm:text-lg text-[#f7f0f1]/80">
            Fill a quick form and let us know your requirements
          </p>

          {/* Name & Number */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-full bg-transparent border border-[#f7f0f1]/30 px-4 py-3 focus:outline-none focus:border-[#a97a67]"
            />
            <input
              type="text"
              name="number"
              placeholder="Your number"
              required
              className="w-full rounded-full bg-transparent border border-[#f7f0f1]/30 px-4 py-3 focus:outline-none focus:border-[#a97a67]"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full rounded-full bg-transparent border border-[#f7f0f1]/30 px-4 py-3 focus:outline-none focus:border-[#a97a67]"
          />

{/* Investment & Buy/Sell */}
<div className="flex flex-col sm:flex-row gap-4">
  <select
    name="investment"
    required
    className="w-full rounded-full bg-transparent border border-[#f7f0f1]/30 px-4 py-3 
               focus:outline-none focus:border-[#a97a67] text-[#f7f0f1]"
  >
    <option value="" className="bg-[#2f1316] text-[#f7f0f1]">Purpose</option>
    <option value="Residency" className="bg-[#2f1316] text-[#f7f0f1]">Residency</option>
    <option value="Investment" className="bg-[#2f1316] text-[#f7f0f1]">Investment</option>
  </select>

  <select
    name="transaction"
    required
    className="w-full rounded-full bg-transparent border border-[#f7f0f1]/30 px-4 py-3 
               focus:outline-none focus:border-[#a97a67] text-[#f7f0f1]"
  >
    <option value="" className="bg-[#2f1316] text-[#f7f0f1]">Buy/Sell</option>
    <option value="Buy" className="bg-[#2f1316] text-[#f7f0f1]">Buy</option>
    <option value="Sell" className="bg-[#2f1316] text-[#f7f0f1]">Sell</option>
  </select>
</div>


          {/* Message */}
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            className="w-full rounded-2xl bg-transparent border border-[#f7f0f1]/30 px-4 py-3 focus:outline-none focus:border-[#a97a67]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full font-[note] text-lg bg-[#a97a67] text-[#f7f0f1] hover:bg-[#f7f0f1] hover:text-[#2f1316] transition-colors duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RealEstateForm;

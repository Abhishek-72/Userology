export default function Middle() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Loved by customer obsessed teams!
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://static.wixstatic.com/media/dc6608_0c5ffae63fb54bd595cd5b2b8908739a~mv2.jpg/v1/fill/w_116,h_39,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Density%20Exchange%20logo_edited.jpg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://assets-global.website-files.com/642da84d41c95fb04ea90ec3/64ca2f86c6fc8e1f6fe72bd0_shopflo-logo-justthelogo-black.svg"
            alt="Reform"
            width="158"
            height="40"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://www.matter.in/public/assets/images/logo.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="data:image/png;base64,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"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/PayU_India_Logo.svg/1280px-PayU_India_Logo.svg.png"
            alt="Statamic"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>
  );
}

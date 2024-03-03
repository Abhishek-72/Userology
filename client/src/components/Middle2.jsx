import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Middle2() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32 flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Configure AI in few clicks
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.3 5.6A2 2 0 0 0 7 7v10a2 2 0 0 0 3.3 1.5l5.9-4.9a2 2 0 0 0 0-3l-6-5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <dd className="inline text-white">
                    Personalize AI interviewer
                  </dd>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.3 5.6A2 2 0 0 0 7 7v10a2 2 0 0 0 3.3 1.5l5.9-4.9a2 2 0 0 0 0-3l-6-5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <dd className="inline text-white">
                    Select persona for customization
                  </dd>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.3 5.6A2 2 0 0 0 7 7v10a2 2 0 0 0 3.3 1.5l5.9-4.9a2 2 0 0 0 0-3l-6-5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <dd className="inline text-white">
                    Craft a unique discussion guide
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <video
              autoPlay
              loop
              playsInline
              className="max-w-full"
              src="https://video.wixstatic.com/video/dc6608_5c96b6868ea54a17895f7b0398b3b8b0/720p/mp4/file.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

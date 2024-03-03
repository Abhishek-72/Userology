import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-amber-100 dark:bg-slate-700 flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-5 md:p-10">
        <span className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white mb-6 text-center">
          🚀 We just got seed funded to build AI moderator
        </span>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4">
          10x deeper insights, faster with
        </h1>
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center mb-4">
          AI-moderated usability tests
        </h1>
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-center mb-6">
          Run 100s of tests with an AI-moderator, that is observant,
          inquisitive, & empathetic
        </h2>
        <div className="flex justify-center">
          <Link to="#">
            <div className="flex gap-2">
              <Button gradientDuoTone="purpleToBlue" outline>
                Talk to Founders
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

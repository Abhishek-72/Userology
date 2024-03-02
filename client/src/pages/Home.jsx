import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-amber-100 dark:bg-slate-700 flex items-center justify-center h-screen ">
      <div className="flex border border-teal-500 pt-5 pb-5 pl-5 pr-5 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center ">
        <div>
          <span className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
            🚀 We just got seed funded to build AI moderator
          </span>
          <h1 className="pt-3 font-bold text-4xl">
            10x deeper insights, faster with
          </h1>
          <h1 className="pt-3 font-bold text-6xl">
            AI-moderated usability tests
          </h1>
          <h2 className="pt-3 font-semibold">
            Run 100s of tests with an AI-moderator, that is observant,
            inquisitive, & empathetic
          </h2>
          <div className="flex justify-center pt-4 ">
            <Link to="#">
              <div className="flex gap-2 md:order-2">
                <Button gradientDuoTone="purpleToBlue" outline>
                  Talk to Founders
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

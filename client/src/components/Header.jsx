import { Navbar, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-centre whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Userology
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/about">About</Link>
        </Navbar.Link>

        <Navbar.Link>
          <Link to="/platform">Platform</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/resources">Resources</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="#">
            <div className="flex gap-2 md:order-2">
              <Button gradientDuoTone="purpleToBlue" outline>
                Book a Demo
              </Button>
              <Navbar.Toggle />
            </div>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
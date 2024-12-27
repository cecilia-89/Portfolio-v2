import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Header = () => {


  return (
    <>
      <header className="md:sticky md:top-0 lg:flex md:max-h-screen md:w-[50%] lg:w-[40%] lg:flex-col lg:justify-between pt-12">
        <div>
          <h1 className="text-5xl md:text-4xl font-bold tracking-tight text-slate-200">
            <ScrollLink
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              duration={500}
            >
              Atabong Cecilia
            </ScrollLink>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Software Engineer
          </h2>
          <i>Plateau, Nigeria</i>
          <p className="mt-2 leading-relaxed">
            I'm a detail-oriented software engineer with 5 years of experience creating, developing, 
            and maintaining scalable, high-performing web applications. I enjoy 
            working with cross-functional teams and thrive on solving complex technical challenges 
            to bring ideas to life.
          </p>

          <div className="mt-4 max-w-xs flex gap-8">
            <Link
              href="/resume/Cecilia's Detailed Europass Curriculum Vitae.pdf"
              className="resume-button flex items-center rounded uppercase border border-violet-300 px-4 py-2 text-xs text-violet-300 font-medium"
              aria-label="Download CV"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-download mr-2 h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>{" "}
              Resume
            </Link>
          </div>

          <nav className="nav hidden md:block" aria-label="In-page jump links">
            <ul className="mt-8 w-max">
              <li>
                <ScrollLink
                  activeClass="active"
                  to="about"
                  className="group flex items-center py-3 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={200}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">
                    About
                  </span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="experience"
                  className="group flex items-center py-3 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">
                    Experience
                  </span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="projects"
                  className="group flex items-center py-3 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={200}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">
                    Projects
                  </span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="education"
                  className="group flex items-center py-3 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={200}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500">
                    Education
                  </span>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

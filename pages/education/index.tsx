import Image from "next/image";

const Education = () => {
  return (
    <>
      <section
        id="education"
        className="mb-8 pt-8 scroll-mt-16 lg:scroll-mt-24 section"
        aria-label="Selected education"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 md:sr-only md:relative md:top-auto md:w-full md:py-0 md:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 md:sr-only">
            Education
          </h2>
        </div>

        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-base"
                      href="https://lasu.edu.ng/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Apex4u"
                    >
                      <span className="group/link text-slate-200 hover:text-violet-300 focus-visible:text-teal-300">
                        Lagos State University
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <header aria-label="september 2024 to present">
                    November 2016 — September 2021
                  </header>
                  <header aria-label="september 2024 to present">
                    <b>Bachelor&apos;s in Computer Science (Bsc)</b>
                  </header>
                  <div className="mt-2 leading-normal">
                  <ul>
                    <li>
                      - Gained a solid foundation in computer science principles and algorithms.
                    </li>
                    <li>
                      - Developed skills in software development and debugging processes.
                    </li>
                    <li>
                      - Acquired knowledge in database management and data structures.
                    </li>
                    <li>
                      - Gained expertise in programming languages such as Python, Java, and C++.
                    </li>
                    <li>
                      - Proficient in operating systems concepts and command-line interface tools.
                    </li>
                    <li>
                      - Mastered object-oriented programming (OOP) concepts, including encapsulation, inheritance, and polymorphism.
                    </li>
                    <li>
                      - Acquired a strong understanding of computer security principles, including encryption, network security, and threat mitigation.
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Education;

import Image from "next/image";

const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className="mb-8 pt-8 scroll-mt-16 lg:scroll-mt-24 section"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 md:sr-only md:relative md:top-auto md:w-full md:py-0 md:opacity-0">
          <h2 className="font-bold uppercase tracking-widest text-slate-200 md:sr-only">
            Experience
          </h2>
        </div>

        <div>
          <ol className="group/list">
            <li className="mb-12">
              <div className="group relative pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
                {/* <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide  sm:col-span-2">
                  <Image
                    alt=""
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded transition  sm:order-1 sm:col-span-2 sm:translate-y-1 images"
                    style={{ color: "transparent" }}
                    src={"/images/experiences/Nexapay.jpg"}
                  />
                </div> */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="items-baseline font-medium leading-tight text-base"
                        href="https://www.hogarth.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Frontend Developer at Nexa Innovations"
                      >
                      
                        <span className="group/link text-slate-300 hover:text-violet-300 focus-visible:text-violet-300">
                          Frontend Developer, {" "}
                          <span className="inline-block">
                            Nexa Innovations
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
                        <div aria-label="march 2024 to present" className="text-xs uppercase text-slate-500 font-semibold">
                          May 2024 — Present
                        </div>
                      </a>
                    </div>
                  </h3>
                  <div className="mt-2 leading-normal text-justify">
                    In my role as a Frontend Developer at Nexapay, I am
                    responsible for understanding requirements, implementing 
                    enhancements & fixes and Translating UI/UX designs into responsive, 
                    pixel-perfect web pages with HTML5, CSS3 and React. I also 
                    collaborate with backend engineers to integrate APIs for seamless 
                    data flow while focusing on maintaining codebase consistency.
                  </div>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        CSS3
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        HTML5
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        Fetch API
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="mb-12">
              <div className="group relative pb-1 transition-all md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                {/* <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <Image
                    alt=""
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded transition  sm:order-1 sm:col-span-2 sm:translate-y-1 images"
                    style={{ color: "transparent" }}
                    src={"/images/experiences/ADM.jpg"}
                  />
                </div> */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className=" items-baseline font-medium leading-tight text-base"
                        href="https://www.adm.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Fullstack Developer at ADM Asia"
                      >

                        <span className="group/link text-slate-300 hover:text-violet-300 focus-visible:text-violet-300">
                          Web Developer, {" "}
                          <span className="inline-block">
                            ADM Asia{" "}
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
                      <div aria-label="march 2024 to august 2024" className="text-xs uppercase text-slate-500 font-semibold">
                          September 2023 — March 2024
                      </div>
                    </div>
                  </h3>
                  <div className="mt-2 leading-normal text-justify">
                  As a Fullstack Developer at ADM, my role involved building 
                  and maintaining a dynamic raffle draw system using HTML, CSS,
                  and JavaScript, ensuring real-time updates and seamless user
                  interaction. I optimized the frontend for responsiveness and 
                  accessibility, automated the draw process with a randomized 
                  algorithm to guarantee fairness and transparency, and implemented
                  batch loading to efficiently handle large name lists, enhancing 
                  performance and memory efficiency.
                  </div>
                  <p className="mt-4 leading-normal text-justify">
                    Additionally, I made numerous fixes and improvements to the website, 
                    addressing bugs, enhancing functionality, and refining the overall 
                    user experience to meet evolving requirements and ensure a polished, 
                    high-quality product.
                  </p>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        PUG
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        HTML5
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        CSS3
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        XLSX
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="mb-12">
              <div className="relative pb-1 transition-all  md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                {/* <div className="z-10 mb-2 mt-1 tracking-wide sm:col-span-2">
                  <Image
                    alt=""
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded transition  sm:order-1 sm:col-span-2 sm:translate-y-1 images"
                    style={{ color: "transparent" }}
                    src={"/images/experiences/Aldoj Amazing Consults logo.jpg"}
                  />
                </div> */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="items-baseline font-medium leading-tight text-base"
                        href="https://www.asthait.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Frontend Developer at Aldoj amazing consults"
                      >

                        <span className="group/link text-slate-300 hover:text-violet-300 focus-visible:text-violet-300">
                          Frontend Developer, {"  "}
                          <span className="inline-block">
                            Aldoj Consults{" "}
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

                      <div aria-label="march 2024 to august 2024" className="text-xs uppercase text-slate-500 font-semibold">
                        November 2022 — October 2023
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 leading-normal text-justify">
                    As a Fullstack Developer, I developed user interfaces using HTML, 
                    tailwind, JavaScript, TypeScript and React, ensuring a user-friendly experience. 
                    I regularly debugged code to maintain high-quality standards, 
                    assisted in gathering requirements and designing user stories, 
                    and implemented and tested application functionality to ensure 
                    seamless operations across all platforms.
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        Git
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        Next
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300 ">
                        HTML
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Experience;

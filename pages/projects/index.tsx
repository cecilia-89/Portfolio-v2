import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <>
      <section
        id="projects"
        className="mb-8 pt-8 scroll-mt-16 lg:scroll-mt-24 section"
        aria-label="Selected projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 backdrop-blur px-6 py-5  md:-mx-12 md:px-12 md:sr-only md:relative md:top-auto md:w-full md:py-0">
          <h2 className="font-bold uppercase tracking-widest text-slate-200 md:sr-only">
            Project
          </h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight"
                      href="https://nenes-delicacy.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Nenee's Delicacy"
                    >
                      <span className="group/link  text-slate-200 hover:text-violet-300 focus-visible:text-violet-300 text-base">
                        Nenee&apos;s Delicacy
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
                  <p className="mt-2 tleading-normal text-justify">
                    Nenee&apos;s Delicacy is a brand that offers a wide variety of baked goods, 
                    including pastries, cakes, cookies, and more for every occasion. 
                    It is designed to provide customers with a seamless 
                    digital experience: accessible, responsive, and crafted to grow and 
                    adapt with ease.
                  </p>
                </div>
                <Image
                  alt="Nenee's delicacy thumbnail image"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 images"
                  style={{ color: "transparent" }}
                  src={"/images/projects/nenee's Delicacy.jpg"}
                />
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-base"
                      href="https://nexapay.ng/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Nexapay"
                    >
                      <span className="group/link  text-slate-200 hover:text-violet-300 focus-visible:text-violet-300 text-base">
                        Nexapay
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
                  <p className="mt-2 leading-normal text-justify">
                    NexaPay is a fintech service provider, offering a variety of financial solutions 
                    such as insurance, data and airtime purchases, money transfers, and deposits. 
                    Designed with security and ease of use in mind, our platform ensures a smooth 
                    and efficient experience for managing your finances, all while being scalable 
                    to accommodate future growth and evolving needs.
                  </p>
                </div>
                <Image
                  alt="An image of nexapay"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 images"
                  style={{ color: "transparent" }}
                  src={"/images/projects/nexapay.jpg"}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Project;

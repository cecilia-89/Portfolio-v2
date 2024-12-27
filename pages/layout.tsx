import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {

  const PhoneStyles = {
    marginTop: "15px",
    marginBottom: "10px",
  };

  return (
    <>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 font-sans">
          <div className="md:flex md:justify-between md:gap-8">
            <Sidebar />
            <main className="md:w-[50%] lg:w-[60%] pt-12">{children}</main>
          </div>
          <div className="text-center py-4">
          <ul
              className="ml-1 m-0 flex items-center justify-center"
              style={PhoneStyles}
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-white"
                  href="https://www.linkedin.com/in/cecilia-atabong"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-slate-200"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>

              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-white"
                  href="https://github.com/cecilia-89"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6 text-slate-200"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>

              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-white"
                  href="https://x.com/CAtabong"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">X</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    role="img" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" 
                    className="h-6 w-6 text-slate-200"
                    stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round" >
                      <title>Twitter</title>
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </li>

              {/* <li className="mr-5 text-xs">
                <a
                  className="block hover:text-white"
                  href="mailto:catabong89@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg"  
                    role="image"
                    stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-slate-200">
                    <path d="M88 23H12c-1.1 0-2 .9-2 2v50c0 1.1.9 2 2 2h76c1.1 0 2-.9 2-2V25c0-1.1-.9-2-2-2zm-4.8 4L50 60.2 16.8 27h66.4zM14 29.8 34.2 50 14 70.2V29.8zM16.9 73 37 52.9l11.6 11.6c.8.8 2 .8 2.8 0L63 52.9 83.1 73H16.9zM86 70.2 65.8 50 86 29.8v40.4z"></path>
                  </svg>
                </a>
              </li> */}
            </ul>
            © {new Date().getFullYear()}, Atabong Cecilia.
          </div>
        </div>
    </>
  );
}

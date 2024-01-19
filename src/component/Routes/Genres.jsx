import { useEffect } from "react";
import Glide from "@glidejs/glide";
import Footer from "./Footer";
export default function Genres() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const genrse = [
    {
      url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572295234-51dRjo8NJeL.jpg?crop=1.00xw:0.896xh;0.00336xw,0.102xh&resize=980:*",
      cotegory: "Horror",
    },
    {
      url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572296390-51fiEAOae4L.jpg?crop=1.00xw:0.950xh;0,0.0240xh&resize=980:*",
      cotegory: "Romance",
    },
    {
      url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572296624-419TWZk7luL.jpg?crop=1xw:0.987xh;center,top&resize=980:*",
      cotegory: "Science Fiction",
    },
    {
      url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572361188-51H2uCluCBL.jpg?crop=0.995xw:1xh;center,top&resize=980:*",
      cotegory: "Cook Books",
    },
    {
      url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572364317-41D-FHiBeeL.jpg?crop=1.00xw:0.968xh;0,0.00800xh&resize=980:*",
      cotegory: "True Crime",
    },
  ];
  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full" id="Genres">
        {/*    <!-- Slides --> */}
        <h1 className="text-2xl flex justify-center mt-10  font-bold tracking-tightn text-black sm:text-6xl">
          <span className="border-b-4  "> Genres</span>
        </h1>
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-centertext-slate-700 transition duration-300 hover:border-slate-900  focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              className="w-9 h-9 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center    text-slate-700 transition duration-300 hover:border-slate-900  focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              className="w-9 h-9 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {genrse.map((data, index) => {
              return (
                <div key={index}>
                  <li >
                    <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] flex flex-col items-center">
                      <img
                        src={data.url}
                        alt="AirMax Pro"
                        className="z-0 h-full w-full rounded-md object-cover  backdrop-blur-md"
                      />
                      <div className="absolute bottom-40">
                        <a 
                          href="#_"
                          className="relative  inline-flex items-center justify-start py-3 pl-10 pr-20 overflow-hidden font-semibold text-yellow-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                        >
                          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"></span>
                          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg
                              className="w-5 h-5 text-green-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg
                              className="w-5 h-5 text-green-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                            {data.cotegory}
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Glide from "@glidejs/glide";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
// eslint-disable-next-line react/prop-types
export default function Items({ addItem }) {
  const featured = [
    {
      name: "One Piece, Vol. 103",
      url: "https://www.bookswagon.com/productimages/images200/700/9781974738700.jpg",
      price: 618,
      Genres: "Anime",
      Status: "Trending",
      Description:
        "Luffy dreamed of becoming King of the Pirates. But his life changed when he accidentally gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, Luffy sets off in search of the One Piece, said to be the greatest treasure in the world",
    },
    {
      name: "Ruskin Bond",
      url: "https://www.bookswagon.com/productimages/images200/613/9789355208613.jpg",
      price: 1069,
      Genres: "horror",
      Status: "New",
      Description:
        "he story revolves around the meeting of strangers on a train. In the story two handicap people had met, who had a brief conversation until the station arrived. They both strive to act as though they are blind and are oblivious of each others handicap.",
    },
    {
      name: "You are the Best Wife",
      url: "https://www.bookswagon.com/productimages/images200/540/9789382665540.jpg",
      price: 618,
      Genres: "Romantic",
      Status: "20% off",
      Description:
        "You are the Best Wife: A True Love Story You Are The Best Wife: A True Love Story is a story about how people find true love and comfort in dissimilarities; about how two people with absolutely different ideologies meet and fall in love. The story revolves around Bhavna and Ajay.",
    },
    {
      name: "The Love Hypothesis",
      url: "https://www.bookswagon.com/productimages/images200/764/9781408725764.jpg",
      price: 228,
      Genres: "Romantic",
      Status: "Trending",
      Description:
        "The Love Hypothesis follows the main character Olive in trying to convince her best friend, Anh into thinking that her dating life is going great. In order to convince Anh, she pretends to date her professor, Adam. Olive and Adam try to convince everyone around them they are in love.",
    },
    {
      name: "Good Bye fri",
      url: "https://www.bookswagon.com/productimages/images200/939/9781974738939.jpg",
      price: 728,
      Genres: "Anime",
      Status: "New",
      Description:
        "hrough the lens of a pet fish who has lost his companion, Todd Parr tells a moving and wholly accessible story about saying goodbye. Touching upon the host of emotions children experience, Todd reminds readers that its okay not to know ",
    },
    {
      name: "Uzumaki 3-in-1 ",
      url: "https://www.bookswagon.com/productimages/images200/325/9781421561325.jpg",
      price: 1852,
      Genres: "Anime",
      Status: "Trending",
      Description:
        "Kurouzu-cho, a small fogbound town on the coast of Japan, is cursed. According to Shuichi Saito, the withdrawn boyfriend of teenager Kirie Goshima, their town is haunted not by a person or being but a pattern: UZUMAKI, the spiral—the hypnotic secret shape of the world.",
    },
    {
      name: "The Magic Of The Lost",
      url: "https://www.bookswagon.com/productimages/images200/166/9780143333166.jpg",
      price: 205,
      Genres: "Anime",
      Status: "40% off",
      Description:
        'The Magic of the Lost Story" by Sudha Murty is a charming and heartwarming book that takes readers on a delightful journey through the eyes of a young girl named Nooni. The story begins with Noonis visit to her Ajja-Ajjis village after being stuck in lockdown for over a year.',
    },
    {
      name: "That Night",
      url: "https://www.bookswagon.com/productimages/images200/877/9780143451877.jpg",
      price: 728,
      Genres: "Historic",
      Status: "Trending",
      Description:
        "This book follows the life of four friends who commits a terrible mistake by playing with Ouija Board in the name of prank twenty years ago during their teens. They make a vow, not to speak about that particular night which changed their world upside down ever again.",
    },
  ];

  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 6,
      autoplay: 2000,
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

  return (
    <>
      <div className="glide-06 relative w-full">
        <h1 className="text-1xl flex justify-center mt-10  font-bold tracking-tightn text-black sm:text-6xl">
          <span className="border-b-4  mb-10 "> Featured Product</span>
        </h1>

        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center    text-slate-700 transition duration-300 hover:border-slate-900  focus-visible:outline-none lg:h-12 lg:w-12"
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
              className="w-9 h-9  text-gray-800 dark:text-white"
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
          <ul className="whitespace-no-wrap [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {featured.map((data, index) => {
              return (
                <div key={index}>
                  <li>
                    <div className="relative aspect-[16/9]  hover:shadow-lg w-auto rounded-md md:aspect-auto md:h-[430px] pb-10  flex flex-col items-center bg-white">
                      <img src={data.url} className="w " />

                      <div className="absolute left-3 top-3">
                        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] block sm:text-xs font-bold tracking-wide text-white uppercase bg-yellow-400 rounded-full">
                          {data.Status}
                        </p>
                      </div>
                      <div className="absolute right-3 top-3">
                        <button className="">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className=" h-5 text-slate-400 hover:text-red-600"
                          />
                        </button>
                      </div>
                      <div className="absolute center  mt-48">
    <div className=" w-full">
        <div className="px-4 sm:px-8 max-w-5xl m-auto">
            <div className="mx-auto inline-flex w-full justify-center">
          
            <a className="group  max-w-max relative mx-1 flex flex-col items-center justify-center rounded-full  0 p-1  hover:text-gray-600" href="#">
            <a href="#_" className="relative text-sm px-5 py-1 font-medium text-white group">
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-yellow-500 group-hover:bg-yellow-500 group-hover:skew-x-12"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
<span className="relative ">Quick View</span>
</a>
                <div className=" absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden text-white group-hover:block w-auto">
                    <div className="flex max-w-xs flex-col items-center">
                        <div className="rounded bg-gray-900 p-2 w-60  text-sm text-center shadow-lg">{data.Description}
                        <svg className="absolute left-0 top-full h-4 w-full text-black" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>

                        </div>
                    </div>
                </div>
            </a>
            </div>
      
    </div>
</div>
                      </div>

                      <div className="flex items-start justify-center mt-4 space-x-4">
                        <div>
                          <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <p>
                              {data.name}
                              <span
                                className="absolute "
                                aria-hidden="true"
                              ></span>
                            </p>
                          </h3>
                          <div className="flex items-center mt-2.5 space-x-px">
                            <svg
                              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            ₹{data.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button
                          className="inline-flex overflow-hidden font-medium  text-sm text-md xl text-center mr-2 mb-2  text-white bg-gray-900 rounded group"
                          onClick={() => addItem(data, data.name)}
                        >
                          <span className="px-3.5 py-2 text-white bg-yellow-500 group-hover:bg-purple-600 flex items-center justify-center">
                            <svg
                              className="w-7 h-7"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              ></path>
                            </svg>
                          </span>

                          <span className="pl-4 pr-5 py-2.5">Shop Now</span>
                        </button>
                      </div>
                    </div>
                  </li>
                                

                </div>
              );
            })}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
      </div>
      <Footer />

      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}

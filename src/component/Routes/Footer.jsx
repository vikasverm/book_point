import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"
export default function Footer() {
  return (
    <section className="relative overflow-hidden py-10 mt-20" style={{backgroundColor:"black"}}>
    <div className="relative z-10 mx-auto max-w-7xl px-4">
      <div className="-m-6 flex flex-wrap">
        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 inline-flex items-center">
            <div className="flex flex-shrink-0 items-center">
          <FontAwesomeIcon className="h-8 w-auto pr-3 text-yellow-400" icon={faBook} beat />
        <span className="text-white font-bold">Book Point</span>
        </div>
            </div>
            <div>
              <p className="mb-4  text-base font-medium">
                The Tailwind CSS Component library
              </p>
              <p className="text-sm text-gray-600">
                © Copyright 2022. All Rights Reserved by DevUI.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
          <div className="h-full">
            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
              Company
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
          <div className="h-full">
            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Account
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Help
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-6 md:w-1/2 lg:w-3/12">
          <div className="h-full">
            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className=" text-base font-medium text-white hover:text-gray-700"
                  href="#"
                >
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

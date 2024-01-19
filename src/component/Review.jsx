import { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function CarouselIndicatorsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
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
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators inside --> */}
      <div className="glide-02 relative w-full mt-10">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
            <div className="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200">
                        <div className="relative p-6">
                            <figure className="relative z-10">
                                <blockquote className="p-6 text-lg leading-relaxed">
                                    <p>Wind-ui, is probably one of the best libraries Ive came across. Good looking, easy to use and above all super accessible.</p>
                                </blockquote>
                                <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-emerald-500">
                                    <span className="flex gap-1 text-amber-400" role="img" aria-label="Rating: 3 out of 5 stars">
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="flex items-center gap-4 pt-4 text-sm text-emerald-500">
                                        <img src="https://i.pravatar.cc/40?img=11" alt="user name" title="user name" width="48" height="48" className="max-w-full rounded-full shrink-0" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold uppercase">Bill Gates</span>
                                            <cite className="not-italic"><a href="http://www.microsoft.com">CEO, Microsoft</a></cite>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <svg aria-hidden="true" className="absolute z-0 h-16 left-6 top-6" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z" className="fill-emerald-50" />
                            </svg>
                        </div>
                    </div>
            </li>
            <li>
            <div className="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200">
                        <div className="relative p-6">
                            <figure className="relative z-10">
                                <blockquote className="p-6 text-lg leading-relaxed">
                                    <p>Wind-ui, is probably one of the best libraries Ive came across. Good looking, easy to use and above all super accessible.</p>
                                </blockquote>
                                <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-emerald-500">
                                    <span className="flex gap-1 text-amber-400" role="img" aria-label="Rating: 3 out of 5 stars">
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="flex items-center gap-4 pt-4 text-sm text-emerald-500">
                                        <img src="data:image/jpeg;base64,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" alt="user name" title="user name" width="50" height="48" className="max-w-full rounded-full shrink-0" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold uppercase">Jane Smith</span>
                                            <cite className="not-italic"><a href="http://www.microsoft.com">WAI-ARIA, Representative</a></cite>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <svg aria-hidden="true" className="absolute z-0 h-16 left-6 top-6" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z" className="fill-emerald-50" />
                            </svg>
                        </div>
                    </div>
            </li>
            <li>
            <div className="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200">
                        <div className="relative p-6">
                            <figure className="relative z-10">
                                <blockquote className="p-6 text-lg leading-relaxed">
                                    <p>Wind-ui, is probably one of the best libraries Ive came across. Good looking, easy to use and above all super accessible.</p>
                                </blockquote>
                                <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-emerald-500">
                                    <span className="flex gap-1 text-amber-400" role="img" aria-label="Rating: 3 out of 5 stars">
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="flex items-center gap-4 pt-4 text-sm text-emerald-500">
                                        <img src="https://media.licdn.com/dms/image/D4E03AQG1yA9sZUWsqw/profile-displayphoto-shrink_200_200/0/1696392540440?e=2147483647&v=beta&t=F3AQ-bwbDdHS0YIwgOZQm2TPlRtPHKysySkluloL9Io" alt="user name" title="user name" width="48" height="48" className="max-w-full rounded-full shrink-0" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold uppercase">Shubham Chauhan</span>
                                            <cite className="not-italic"><a href="http://www.microsoft.com">Software Engineer</a></cite>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <svg aria-hidden="true" className="absolute z-0 h-16 left-6 top-6" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z" className="fill-emerald-50" />
                            </svg>
                        </div>
                    </div>
            </li>
            <li>
            <div className="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200">
                        <div className="relative p-6">
                            <figure className="relative z-10">
                                <blockquote className="p-6 text-lg leading-relaxed">
                                    <p>Wind-ui, is probably one of the best libraries Ive came across. Good looking, easy to use and above all super accessible.</p>
                                </blockquote>
                                <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-emerald-500">
                                    <span className="flex gap-1 text-amber-400" role="img" aria-label="Rating: 3 out of 5 stars">
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="flex items-center gap-4 pt-4 text-sm text-emerald-500">
                                        <img src="https://media.licdn.com/dms/image/D5603AQERedjjL17XQA/profile-displayphoto-shrink_200_200/0/1704004206461?e=2147483647&v=beta&t=8IHUPtTQ6Li7_0HpRmml0w73QBMEcVfAB3dQ3YFA7CA" alt="user name" title="user name" width="48" height="48" className="max-w-full rounded-full shrink-0" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold uppercase">Vikas Verma</span>
                                            <cite className="not-italic"><a href="http://www.microsoft.com">CEO, CodeSpot</a></cite>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <svg aria-hidden="true" className="absolute z-0 h-16 left-6 top-6" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z" className="fill-emerald-50" />
                            </svg>
                        </div>
                    </div>
            </li>
            <li>
            <div className="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200">
                        <div className="relative p-6">
                            <figure className="relative z-10">
                                <blockquote className="p-6 text-lg leading-relaxed">
                                    <p>Wind-ui, is probably one of the best libraries Ive came across. Good looking, easy to use and above all super accessible.</p>
                                </blockquote>
                                <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-emerald-500">
                                    <span className="flex gap-1 text-amber-400" role="img" aria-label="Rating: 3 out of 5 stars">
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg></span>
                                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="flex items-center gap-4 pt-4 text-sm text-emerald-500">
                                        <img src="https://media.licdn.com/dms/image/D4D03AQFfs4Ul_rzaBg/profile-displayphoto-shrink_200_200/0/1695536403570?e=2147483647&v=beta&t=q42hrXI169VozBES6kRwVUP8lfD1EugwfXNbJaBPO8g" alt="user name" title="user name" width="48" height="48" className="max-w-full rounded-full shrink-0" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold uppercase">Abhay Shukla</span>
                                            <cite className="not-italic"><a href="http://www.microsoft.com">CEO, HAVAS</a></cite>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <svg aria-hidden="true" className="absolute z-0 h-16 left-6 top-6" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z" className="fill-emerald-50" />
                            </svg>
                        </div>
                    </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators inside --> */}
    </>
  )
}

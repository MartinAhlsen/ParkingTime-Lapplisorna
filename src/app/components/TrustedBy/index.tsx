interface Partners {
  url: string;
  alt: string;
}

interface TrustedByProps {
  arrayOne: Partners[];
  arrayTwo: Partners[];
}

const TrustedBy = ({ arrayOne, arrayTwo }: TrustedByProps) => {
  return (
    <>
      <div className="flex flex-col md:p-[80px] gap-7 md:overflow-visible">
        <div className="p1 md:h7 text-center text-pt-darkblue2">Trusted by</div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] md:[mask-image:none] md:gap[30px] md:overflow-visible">
          <ul className="flex items-center justify-center md:justify-evenly [&_li]:mx-8 md:[&_li]:mx-0 [&_img]:max-w-none animate-infinite-scroll-left md:animate-none md:w-full md:overflow-visible">
            {arrayOne.map((logo, index) => (
              <li
                className="md:flex md:justify-center md:items-center md:w-[179px] md:p-3"
                key={index}
              >
                <img className="max-h-[70px]" src={logo.url} alt={logo.alt} />
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_li]:mx-0 [&_img]:max-w-none animate-infinite-scroll-left md:hidden"
            aria-hidden="true"
          >
            {arrayOne.map((logo, index) => (
              <li key={index}>
                <img className="max-h-[70px]" src={logo.url} alt={logo.alt} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)] md:[mask-image:none]">
          <ul className="flex items-center justify-center md:justify-evenly [&_li]:mx-8 md:[&_li]:mx-0 [&_img]:max-w-none animate-infinite-scroll-right md:animate-none md:w-full md:overflow-visible">
            {arrayTwo.map((logo, index) => (
              <li
                className="md:flex md:justify-center md:items-center md:w-[179px] md:p-3"
                key={index}
              >
                <img
                  className="max-h-[70px] md:object-contain"
                  src={logo.url}
                  alt={logo.alt}
                />
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 md:[&_li]:mx-0 [&_img]:max-w-none animate-infinite-scroll-right md:hidden"
            aria-hidden="true"
          >
            {arrayTwo.map((logo, index) => (
              <li key={index}>
                <img src={logo.url} alt={logo.alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrustedBy;

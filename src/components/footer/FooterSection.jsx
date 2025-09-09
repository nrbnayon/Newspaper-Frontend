import { MessageSquareIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

export const FooterSection = () => {
  // Resources section links
  const resourceLinks = [
    { title: "News", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Make Advertise", link: "/advertise" },
  ];

  const termsLinks = [
    { title: "Terms and Conditions", link: "/terms" },
    { title: "Privacy Policy", link: "/terms" },
  ];

  // Category section links
  const categoryLinks = [
    { title: "Breaking News", link: "/" },
    { title: "Politics", link: "/" },
    { title: "Business", link: "/" },
    { title: "Technology", link: "/" },
    { title: "Sports", link: "/" },
    { title: "Etc. all", link: "/" },
  ];

  return (
    <section className="flex flex-col w-full lg:flex-row items-start justify-between gap-6 xl:gap-32 p-4 sm:p-6 md:p-8 lg:p-10 bg-[#00254a]">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-1/2 items-start gap-4 md:gap-6 lg:gap-10">
        <h1 className="self-stretch font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight lg:leading-[78px] font-sans">
          ALAMOCITYPULSE
        </h1>

        <div className="flex flex-col w-full items-start gap-2.5">
          <h2 className="self-stretch font-semibold text-white text-base sm:text-lg font-sans">
            Alamocitypulse is a news/blog site that covers local San Antonio
            news, whether it's new businesses, events, town fairs, we cover it.
          </h2>

          <p className="self-stretch font-normal text-gray-300 text-sm md:text-base tracking-[0] leading-6 font-sans">
            We also cover the negative side of news globally. Our primary source
            of income is coming from paid advertising on our site and
            memberships. You can pay to have anything as an ad on the site for
            whatever amount agreed upon. The daily membership allows you to
            comment and interact with everyone on the site as free accounts
            don't allow you to.
          </p>
        </div>

        <div className="hidden w-full sm:w-80 lg:w-[304px]">
          <button className="w-full h-12 sm:h-14 cursor-pointer rounded-xl border-[0.5px] border-solid border-white bg-transparent text-white text-lg sm:text-xl font-normal flex justify-between items-center px-4 sm:px-5 hover:bg-white hover:text-[#00254a] transition-colors">
            <div>Reach Out</div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
              <MessageSquareIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00254a]" />
            </div>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full lg:w-1/2 items-start gap-4 lg:gap-[23px]">
        <div className="hidden xl:flex self-stretch w-full h-8  md:h-12 lg:h-20 bg-transparent" />

        <Card className="w-full bg-transparent border-none shadow-none">
          <CardContent className="flex flex-col items-start justify-end gap-4 sm:gap-6 p-0 pt-2">
            {/* Links Section */}
            <div className="flex flex-col sm:flex-row w-full items-start justify-between gap-6 sm:gap-4 lg:gap-8">
              {/* Resources Column */}
              <div className="flex flex-col w-full sm:w-auto items-start gap-3 sm:gap-4 min-w-0">
                <h3 className="font-bold text-white text-lg sm:text-xl tracking-[0] leading-6 font-sans">
                  Resources
                </h3>

                <div className="flex flex-col items-start gap-2 sm:gap-3">
                  {resourceLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      className="font-normal text-white text-sm lg:text-base tracking-[0] leading-normal font-sans hover:text-gray-300 transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Terms Column */}
              <div className="flex flex-col w-full sm:w-auto items-start gap-3 sm:gap-4 min-w-0">
                <h3 className="font-bold text-white text-lg sm:text-xl tracking-[0] leading-6 font-sans">
                  ALAMOCITYPULSE
                </h3>

                <div className="flex flex-col gap-2 sm:gap-3">
                  {termsLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      className="font-normal text-white text-sm lg:text-base tracking-[0] leading-[21px] font-sans hover:text-gray-300 transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Category Column */}
              <div className="flex flex-col w-full sm:w-auto items-start gap-3 sm:gap-4 min-w-0">
                <h3 className="font-bold text-white text-lg sm:text-xl tracking-[0] leading-6 font-sans">
                  Category
                </h3>

                <div className="font-normal text-white text-sm lg:text-base tracking-[0] leading-[20px] sm:leading-[27.2px] font-sans">
                  {categoryLinks.map((category, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={category.link}
                        className="hover:text-gray-300 transition-colors"
                      >
                        {category.title}
                      </a>
                      {index < categoryLinks.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

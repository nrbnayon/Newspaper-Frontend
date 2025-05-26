import { Instagram, Linkedin, MessageSquareIcon, Twitter, Youtube } from "lucide-react";
import { FaPinterestP } from "react-icons/fa";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const FooterSection = () => {
  // Resources section links
  const resourceLinks = [
    { title: "News" },
    { title: "About Us" },
    { title: "Home" },
    { title: "Make Advertise" },
  ];

  // JETSTRATIX section links
  const jetstratixLinks = [
    { title: "Terms and Conditions" },
    { title: "Privacy Policy" },
  ];

  // Category section links
  const categoryLinks = [
    "Top Stories",
    "Breaking News",
    "World",
    "National",
    "Politics",
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
    "Health",
  ];

  return (
    <section className="flex flex-col w-full lg:flex-row items-start gap-6 lg:gap-[131px] p-4 sm:p-6 md:p-8 lg:p-10 bg-[#00254a]">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-1/2 items-start gap-4 md:gap-6 lg:gap-[41px]">
        <h1 className="self-stretch font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight lg:leading-[78px] font-sans">
          ALAMOCITYPULSE
        </h1>

        <div className="flex flex-col w-full items-start gap-2.5">
          <h2 className="self-stretch font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] tracking-[0] leading-tight lg:leading-[38.4px] font-sans">
            Experience the pinnacle of luxury air travel with JETSTRATIX, where
            excellence and trust are our guiding principles.
          </h2>

          <p className="self-stretch font-normal text-[#9b9b9b] text-sm md:text-base tracking-[0] leading-6 font-sans">
            With over 30 years of unparalleled hospitality and aviation
            expertise, we ensure your journey is seamless and exceptional.
          </p>
        </div>

        <div className="w-full sm:w-80 lg:w-[304px]">
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
        <div className="self-stretch w-full h-8 sm:h-10 md:h-12 lg:h-[84px] bg-white" />

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
                      href="#"
                      className="font-normal text-white text-sm lg:text-base tracking-[0] leading-normal font-sans hover:text-gray-300 transition-colors"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* JETSTRATIX Column */}
              <div className="flex flex-col w-full sm:w-auto items-start gap-3 sm:gap-4 min-w-0">
                <h3 className="font-bold text-white text-lg sm:text-xl tracking-[0] leading-6 font-sans">
                  JETSTRATIX
                </h3>

                <div className="flex flex-col gap-2 sm:gap-3">
                  {jetstratixLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-normal text-white text-sm lg:text-base racking-[0] leading-[21px] font-sans hover:text-gray-300 transition-colors"
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
                      <a href="#" className="hover:text-gray-300 transition-colors">
                        {category}
                      </a>
                      {index < categoryLinks.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-5 flex-wrap w-full">
              <button className="flex items-center cursor-pointer text-white justify-center p-2 sm:p-2.5 bg-[#094A8B] rounded-full border-none hover:bg-[#0a5aa0] transition-colors">
                <Linkedin size={14} className="sm:w-4 sm:h-4" color="#fdfdfd" strokeWidth={3} />
              </button>
              <button className="flex items-center cursor-pointer text-white justify-center p-2 sm:p-2.5 bg-[#094A8B] rounded-full border-none hover:bg-[#0a5aa0] transition-colors">
                <Twitter size={14} className="sm:w-4 sm:h-4" color="#fdfdfd" strokeWidth={3} />
              </button>
              <button className="flex items-center cursor-pointer text-white justify-center p-2 sm:p-2.5 bg-[#094A8B] rounded-full border-none hover:bg-[#0a5aa0] transition-colors">
                <Youtube size={14} className="sm:w-4 sm:h-4" color="#fdfdfd" strokeWidth={3} />
              </button>
              <button className="flex items-center cursor-pointer text-white justify-center p-2 sm:p-2.5 bg-[#094A8B] rounded-full border-none hover:bg-[#0a5aa0] transition-colors">
                <Instagram size={14} className="sm:w-4 sm:h-4" color="#fdfdfd" strokeWidth={3} />
              </button>
              <button className="flex items-center cursor-pointer text-white justify-center p-2 sm:p-2.5 bg-[#094A8B] rounded-full border-none hover:bg-[#0a5aa0] transition-colors">
                <FaPinterestP  size={14} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
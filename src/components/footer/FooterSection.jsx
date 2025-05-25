import { Instagram, Linkedin, MessageSquareIcon, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const FooterSection = ()=> {
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

  // Social media icons
  const socialIcons = [
    { src: "/icon.svg", alt: "Icon" },
    { src: "/icon-1.svg", alt: "Icon" },
    { src: "/icon-2.svg", alt: "Icon" },
    { src: "/group-25911.png", alt: "Group" },
    { src: "/icon-3.svg", alt: "Icon" },
  ];

  return (
    <section className="flex w-full items-center gap-[131px] p-10 bg-[#00254a]">
      <div className="flex  flex-col w-full items-start gap-[41px]">
        <h1 className="self-stretch font-bold text-white text-6xl  tracking-[0] leading-[78px] font-sans">
          ALAMOCITYPULSE
        </h1>

        <div className="flex flex-col w-full max-w-[545px] items-start gap-2.5">
          <h2 className="self-stretch font-semibold text-white text-[32px] tracking-[0] leading-[38.4px] font-sans">
            Experience the pinnacle of luxury air travel with JETSTRATIX, where
            excellence and trust are our guiding principles.
          </h2>

          <p className="self-stretch font-normal text-[#9b9b9b] text-base tracking-[0] leading-6 font-sans">
            With over 30 years of unparalleled hospitality and aviation
            expertise, we ensure your journey is seamless and exceptional.
          </p>
        </div>

        <div className=" w-[304px] h-12">
          <button
            variant="outline"
            className="w-[302px] h-14 cursor-pointer rounded-xl border-[0.5px] border-solid border-white bg-transparent text-white text-xl font-normal flex justify-between items-center px-5"
          >
            <div>Reach Out</div>
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <MessageSquareIcon className="w-6 h-6 text-[#00254a]" />
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full  items-start gap-[23px]">
        <div className="self-stretch mb-4 w-full h-[84px] bg-white" />

        <Card className="w-full  bg-transparent border-none shadow-none">
          <CardContent className="flex flex-col h-[310px] items-start justify-end gap-2 p-0 pt-2">
            <div className="flex w-full items-start justify-between mb-auto">
              {/* Resources Column */}
              <div className="flex flex-col items-start gap-4">
                <h3 className="w-[104px] font-bold text-white text-xl tracking-[0] leading-6 font-sans">
                  Resources
                </h3>

                <div className="flex flex-col w-[118px] items-start gap-3">
                  {resourceLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="self-stretch font-normal text-white text-base tracking-[0] leading-normal font-sans"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* JETSTRATIX Column */}
              <div className="flex flex-col w-[145px] items-start gap-4">
                <h3 className="self-stretch font-bold text-white text-xl tracking-[0] leading-6 font-sans">
                  JETSTRATIX
                </h3>

                <div className="w-[149px]">
                  {jetstratixLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap mt-3 first:mt-0 font-sans"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Category Column */}
              <div className="flex flex-col w-[168px] items-start gap-4">
                <h3 className="self-stretch font-bold text-white text-xl tracking-[0] leading-6 font-sans">
                  Category
                </h3>

                <div className="font-normal text-white text-base tracking-[0] leading-[27.2px] font-sans">
                  {categoryLinks.map((category, index) => (
                    <React.Fragment key={index}>
                      <a href="#">{category}</a>
                      {index < categoryLinks.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
              
                <button
                  variant="outline"
                  size="icon"
                  className={`flex items-center cursor-pointer text-white justify-center p-2.5 bg-[#094A8B] rounded-full border-none `}
                >
                  <Linkedin size={16} color="#fdfdfd" strokeWidth={3}/>
                </button>
                <button
                  variant="outline"
                  size="icon"
                  className={`flex items-center cursor-pointer text-white justify-center p-2.5 bg-[#094A8B] rounded-full border-none `}
                >
                  <Twitter size={16} color="#fdfdfd" strokeWidth={3}/>
                </button>

                <button
                  variant="outline"
                  size="icon"
                  className={`flex items-center cursor-pointer text-white justify-center p-2.5 bg-[#094A8B] rounded-full border-none `}
                >
                  <Youtube size={16} color="#fdfdfd" strokeWidth={3} />
                </button>

                <button
                  variant="outline"
                  size="icon"
                  className={`flex items-center cursor-pointer text-white justify-center p-2.5 bg-[#094A8B] rounded-full border-none `}
                >
                  <Instagram size={16} color="#fdfdfd" strokeWidth={3} />
                </button>

                <button
                  variant="outline"
                  size="icon"
                  className={`flex items-center cursor-pointer text-white justify-center p-2.5 bg-[#094A8B] rounded-full border-none `}
                >
                  <Twitter />
                </button>
                
              
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

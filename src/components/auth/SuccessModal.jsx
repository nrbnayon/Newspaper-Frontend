import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const UploadFileWebLink = () => {
  return (
    <main className="bg-[#f6f6fb] flex justify-center items-center min-h-screen w-full">
      <Card className="bg-app-background w-full max-w-[768px] border-none shadow-none">
        <CardContent className="flex flex-col items-center gap-8 py-12">
          <div className="relative w-[279px] h-[279px] flex items-center justify-center">
            <div className="absolute w-[228px] h-[228px] rotate-[15deg] blur-[38.22px]">
              <div className="relative w-[186px] h-[186px] bg-[#00254a] rounded-full rotate-[-15deg] blur-[38px] opacity-40" />
            </div>

            <div className="relative w-[216px] h-[216px] bg-[#ffffff66] rounded-full backdrop-blur-[9.76px] flex items-center justify-center">
              <CheckCircleIcon className="w-[178px] h-[178px] text-[#00254a]" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-side-bar-text text-center leading-[48px]">
            Congratulation
          </h1>

          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-[#8d8d8d] text-center font-para-text-3 leading-[var(--para-text-3-line-height)]">
              Your details have been successfully recorded. The educational
              platform is currently being enhanced. Please give us a moment to
              ensure it provides accurate responses for our clients.
            </p>

            <Button className="bg-[#00254a] hover:bg-[#00254a]/90 text-white rounded-xl px-6 py-3 flex items-center gap-3">
              <span className="font-para-text-2 text-[length:var(--para-text-2-font-size)]">
                Next
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

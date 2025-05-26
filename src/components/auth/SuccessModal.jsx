// src\components\auth\SuccessModal.jsx
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Modal, ModalContent } from "@/components/ui/modal";

export const SuccessModal = ({ onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalContent onClose={onClose} className="min-w-3xl  ">
        <div className="bg-[#f6f6fb] rounded-lg">
          <Card className="bg-transparent w-full border-none shadow-none">
            <CardContent className="flex flex-col items-center gap-8 py-12">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                <div className="absolute w-5/6 h-5/6 rotate-[15deg] blur-xl">
                  <div className="relative w-4/5 h-4/5 bg-[#00254a] rounded-full rotate-[-15deg] blur-xl opacity-40" />
                </div>

                <div className="relative w-5/6 h-5/6 bg-white/40 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <CheckCircleIcon className="w-3/4 h-3/4 text-[#00254a]" />
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00254a] text-center leading-tight">
                Congratulation
              </h1>

              <div className="flex flex-col items-center gap-4 w-full">
                <p className="text-[#8d8d8d] text-center text-sm leading-relaxed px-4">
                  Your details have been successfully recorded. The educational
                  platform is currently being enhanced. Please give us a moment
                  to ensure it provides accurate responses for our clients.
                </p>

                <Button
                  onClick={onClose}
                  className="bg-[#00254a] hover:bg-[#001a38] text-white rounded-xl px-6 py-3 flex items-center gap-3 mt-4"
                >
                  <span className="font-medium">Next</span>
                  <ArrowRightIcon className="w-6 h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </ModalContent>
    </Modal>
  );
};

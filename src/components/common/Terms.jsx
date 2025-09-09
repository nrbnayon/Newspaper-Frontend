import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../layout/Navbar";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `By accessing and using ALAMOCITYPULSE ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      id: "use-license",
      title: "Use License",
      content: `Permission is granted to temporarily download one copy of the materials on ALAMOCITYPULSE for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      
      • Modify or copy the materials
      • Use the materials for any commercial purpose or for any public display
      • Attempt to reverse engineer any software contained on the website
      • Remove any copyright or other proprietary notations from the materials`,
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      content: `The materials on ALAMOCITYPULSE are provided on an 'as is' basis. ALAMOCITYPULSE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
    },
    {
      id: "limitations",
      title: "Limitations",
      content: `In no event shall ALAMOCITYPULSE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ALAMOCITYPULSE, even if ALAMOCITYPULSE or its authorized representative has been notified orally or in writing of the possibility of such damage.`,
    },
    {
      id: "accuracy",
      title: "Accuracy of Materials",
      content: `The materials appearing on ALAMOCITYPULSE could include technical, typographical, or photographic errors. ALAMOCITYPULSE does not warrant that any of the materials on its website are accurate, complete, or current. ALAMOCITYPULSE may make changes to the materials contained on its website at any time without notice.`,
    },
    {
      id: "links",
      title: "Links",
      content: `ALAMOCITYPULSE has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ALAMOCITYPULSE of the site. Use of any such linked website is at the user's own risk.`,
    },
    {
      id: "modifications",
      title: "Modifications",
      content: `ALAMOCITYPULSE may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.`,
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: `These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms and Conditions - ALAMOCITYPULSE</title>
        <meta
          name="description"
          content="Read the terms and conditions for using ALAMOCITYPULSE news website."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header matching your news site style */}
        <Navbar />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 md:mt-40">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our
              service.
            </p>
        
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Welcome to ALAMOCITYPULSE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions ("Terms", "Terms and Conditions")
              govern your relationship with ALAMOCITYPULSE website operated by
              ALAMOCITYPULSE ("us", "we", or "our"). Please read these Terms and
              Conditions carefully before using our Service.
            </p>
          </div>

          {/* Expandable Sections */}
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="bg-white rounded-lg shadow-sm border overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      activeSection === section.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeSection === section.id && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-blue-50 rounded-lg border border-blue-200 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Contact Information
            </h2>
            <p className="text-blue-800 mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="space-y-2 text-blue-700">
              <p>• By email: alamocitypulse@alamocitypulse.com</p>
              <p>
                • On our contact page:{" "}
                <a href="/contact" className="underline hover:no-underline">
                  Contact Us
                </a>
              </p>
              <p>• By mail: ALAMOCITYPULSE Legal Department</p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

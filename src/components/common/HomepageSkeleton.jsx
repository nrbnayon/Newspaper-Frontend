const SkeletonBox = ({ className = "", height = "h-4" }) => (
  <div
    className={`bg-gray-200 rounded animate-pulse ${height} ${className}`}
  ></div>
);

const SkeletonImage = ({ className = "" }) => (
  <div
    className={`bg-gray-300 rounded animate-pulse ${className} flex items-center justify-center`}
  >
    <div className='w-8 h-8 bg-gray-400 rounded'></div>
  </div>
);

const SkeletonNavbar = () => (
  <nav className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b'>
    <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center h-16'>
        <SkeletonBox className='w-32 h-8' />
        <div className='hidden md:flex space-x-8'>
          {[1, 2, 3, 4, 5].map((i) => (
            <SkeletonBox key={i} className='w-16 h-4' />
          ))}
        </div>
        <SkeletonBox className='w-8 h-8 rounded-full' />
      </div>
    </div>
  </nav>
);

const SkeletonFeaturedCard = () => (
  <div className='bg-white rounded-lg shadow-sm border overflow-hidden'>
    <SkeletonImage className='w-full h-64 sm:h-80' />
    <div className='p-6'>
      <SkeletonBox className='w-20 h-3 mb-3' />
      <SkeletonBox className='w-full h-6 mb-2' />
      <SkeletonBox className='w-3/4 h-6 mb-4' />
      <SkeletonBox className='w-full h-4 mb-2' />
      <SkeletonBox className='w-5/6 h-4 mb-4' />
      <div className='flex items-center justify-between'>
        <SkeletonBox className='w-24 h-4' />
        <div className='flex space-x-4'>
          <SkeletonBox className='w-12 h-8 rounded-full' />
          <SkeletonBox className='w-12 h-8 rounded-full' />
        </div>
      </div>
    </div>
  </div>
);

const SkeletonAudioCard = () => (
  <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border'>
    <div className='flex items-center justify-between'>
      <div className='flex-1'>
        <SkeletonBox className='w-32 h-4 mb-3' />
        <SkeletonBox className='w-full h-6 mb-2' />
        <SkeletonBox className='w-2/3 h-4 mb-4' />
        <div className='flex items-center space-x-4'>
          <SkeletonBox className='w-12 h-12 rounded-full' />
          <SkeletonBox className='w-32 h-2 rounded-full' />
          <SkeletonBox className='w-16 h-4' />
        </div>
      </div>
      <SkeletonImage className='w-24 h-24 ml-6' />
    </div>
  </div>
);

const SkeletonStandardCard = () => (
  <div className='bg-white rounded-lg shadow-sm border overflow-hidden'>
    <div className='flex'>
      <SkeletonImage className='w-24 h-20 flex-shrink-0' />
      <div className='flex-1 p-4'>
        <SkeletonBox className='w-16 h-3 mb-2' />
        <SkeletonBox className='w-full h-4 mb-1' />
        <SkeletonBox className='w-3/4 h-4 mb-3' />
        <div className='flex items-center justify-between'>
          <SkeletonBox className='w-20 h-3' />
          <div className='flex space-x-2'>
            <SkeletonBox className='w-8 h-6 rounded' />
            <SkeletonBox className='w-8 h-6 rounded' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SkeletonLiveUpdates = () => (
  <div className='bg-white rounded-lg shadow-sm border p-6'>
    <div className='flex items-center mb-6'>
      <div className='w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse'></div>
      <SkeletonBox className='w-32 h-6' />
    </div>
    <div className='space-y-4'>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className='flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-b-0'
        >
          <SkeletonImage className='w-16 h-12 flex-shrink-0' />
          <div className='flex-1'>
            <SkeletonBox className='w-full h-4 mb-2' />
            <SkeletonBox className='w-2/3 h-3 mb-2' />
            <div className='flex items-center justify-between'>
              <SkeletonBox className='w-16 h-3' />
              <SkeletonBox className='w-12 h-3' />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkeletonTabbedSection = () => (
  <div className='bg-white rounded-lg shadow-sm border'>
    <div className='border-b'>
      <div className='flex space-x-8 px-6 py-4'>
        {[1, 2, 3, 4].map((i) => (
          <SkeletonBox key={i} className='w-20 h-4' />
        ))}
      </div>
    </div>
    <div className='p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className='space-y-3'>
            <SkeletonImage className='w-full h-40' />
            <SkeletonBox className='w-16 h-3' />
            <SkeletonBox className='w-full h-4' />
            <SkeletonBox className='w-3/4 h-4' />
            <div className='flex items-center justify-between'>
              <SkeletonBox className='w-20 h-3' />
              <div className='flex space-x-2'>
                <SkeletonBox className='w-8 h-6 rounded' />
                <SkeletonBox className='w-8 h-6 rounded' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SkeletonListedSection = () => (
  <div className='bg-white rounded-lg shadow-sm border'>
    <div className='border-b'>
      <div className='flex space-x-8 px-6 py-4'>
        {[1, 2, 3].map((i) => (
          <SkeletonBox key={i} className='w-20 h-4' />
        ))}
      </div>
    </div>
    <div className='p-6'>
      <div className='space-y-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className='flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-b-0'
          >
            <SkeletonImage className='w-20 h-16 flex-shrink-0' />
            <div className='flex-1'>
              <SkeletonBox className='w-16 h-3 mb-2' />
              <SkeletonBox className='w-full h-4 mb-1' />
              <SkeletonBox className='w-4/5 h-4 mb-3' />
              <div className='flex items-center justify-between'>
                <SkeletonBox className='w-20 h-3' />
                <div className='flex space-x-2'>
                  <SkeletonBox className='w-8 h-6 rounded' />
                  <SkeletonBox className='w-8 h-6 rounded' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SkeletonSidebar = () => (
  <aside className='w-full xl:w-full'>
    {/* Mobile Ad Spaces */}
    <div className='xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-6'>
      <SkeletonBox className='w-24 h-4' />
    </div>

    {/* Mobile Trending Section */}
    <div className='xl:hidden w-full mb-6'>
      <SkeletonBox className='w-32 h-5 mb-4' />
      <div className='space-y-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SkeletonStandardCard key={i} />
        ))}
      </div>
    </div>

    <div className='xl:hidden w-full h-28 sm:h-36 bg-gray-300 rounded-lg flex items-center justify-center mb-6'>
      <SkeletonBox className='w-20 h-4' />
    </div>

    {/* Mobile More Articles */}
    <div className='xl:hidden w-full mb-6'>
      <div className='space-y-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SkeletonStandardCard key={i} />
        ))}
      </div>
    </div>

    <div className='xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-8'>
      <SkeletonBox className='w-24 h-4' />
    </div>

    {/* Desktop Sidebar */}
    <div className='xl:block bg-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center'>
      <SkeletonBox className='w-32 h-6 mb-4' />

      <div className='w-full h-48 sm:h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-6'>
        <SkeletonBox className='w-20 h-4' />
      </div>

      <div className='w-full'>
        <SkeletonBox className='w-28 h-5 mb-4' />
        <div className='space-y-4'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <SkeletonStandardCard key={i} />
          ))}
        </div>
      </div>

      <div className='w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center my-6'>
        <SkeletonBox className='w-20 h-4' />
      </div>

      <div className='w-full'>
        <div className='space-y-4'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <SkeletonStandardCard key={i} />
          ))}
        </div>
      </div>

      <div className='w-full h-32 sm:h-48 bg-gray-300 rounded-lg flex items-center justify-center mt-6'>
        <SkeletonBox className='w-24 h-4' />
      </div>
    </div>
  </aside>
);

const SkeletonFooter = () => (
  <footer className='bg-gray-900 text-white py-12'>
    <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {[1, 2, 3, 4].map((section) => (
          <div key={section}>
            <SkeletonBox className='w-24 h-5 mb-4 bg-gray-700' />
            <div className='space-y-3'>
              {[1, 2, 3, 4].map((item) => (
                <SkeletonBox key={item} className='w-full h-3 bg-gray-700' />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='border-t border-gray-700 mt-8 pt-8 text-center'>
        <SkeletonBox className='w-64 h-4 mx-auto bg-gray-700' />
      </div>
    </div>
  </footer>
);

export default function HomepageSkeleton() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <SkeletonNavbar />
      <main className='w-full py-4 mt-12 sm:py-8'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Main Content Sections */}
          {[1, 2].map((sectionIndex) => (
            <div
              key={sectionIndex}
              className='grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6 xl:gap-8 mb-12'
            >
              {/* Main Content Area */}
              <div className='w-full'>
                {/* Featured Article */}
                <div className='mb-8'>
                  <SkeletonFeaturedCard />
                </div>

                {/* Audio News */}
                <div className='mb-8'>
                  <SkeletonAudioCard />
                </div>

                {/* Long Read Article */}
                <div className='mb-8'>
                  <SkeletonFeaturedCard />
                </div>

                {/* Live Updates */}
                <div className='mb-8'>
                  <SkeletonLiveUpdates />
                </div>

                {/* Tabbed News Section */}
                <div className='mb-8'>
                  <SkeletonTabbedSection />
                </div>

                {/* Center Ad Space */}
                <div className='w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6'>
                  <SkeletonBox className='w-32 h-4' />
                </div>

                {/* Listed News Section */}
                <div className='mb-8'>
                  <SkeletonListedSection />
                </div>

                {/* Bottom Ad Space */}
                <div className='w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6'>
                  <SkeletonBox className='w-32 h-4' />
                </div>
              </div>

              {/* Sidebar */}
              <SkeletonSidebar />
            </div>
          ))}
        </div>
      </main>

      <SkeletonFooter />
    </div>
  );
}

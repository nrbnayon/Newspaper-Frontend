export const ErrorComponent = ({ error }) => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-red-600 mb-4'>
        Error Loading News
      </h2>
      <p className='text-gray-600'>{error}</p>
      <button
        onClick={() => window.location.reload()}
        className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
      >
        Retry
      </button>
    </div>
  </div>
);

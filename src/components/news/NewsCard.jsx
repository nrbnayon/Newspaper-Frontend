export default function NewsCard({ article }) {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-sm'>
      <img
        src={article.image || "/placeholder.svg?height=200&width=300"}
        alt={article.title}
        className='w-full h-48 object-cover'
      />
      <div className='p-4'>
        <div className='inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-2'>
          {article.category}
        </div>
        <h3 className='font-bold text-gray-900 mb-2 line-clamp-2'>
          {article.title}
        </h3>
        <p className='text-gray-600 text-sm mb-3 line-clamp-3'>
          {article.excerpt}
        </p>
        <div className='flex items-center justify-between text-xs text-gray-500'>
          <span>{article.readTime} MIN READ</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
}

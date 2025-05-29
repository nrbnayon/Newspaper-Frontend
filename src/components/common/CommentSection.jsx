import { useState } from "react";
import { Send } from "lucide-react";

const CommentsSection = ({ comments, setComments }) => {
  const [showAllComments, setShowAllComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "You",
        content: newComment.trim(),
        time: "Just now",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face"
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitComment();
    }
  };

  const displayedComments = showAllComments ? comments : comments.slice(0, 2);

  return (
    <div className='w-full mt-4 border-t pt-4'>
      {/* Comment Input */}
      <div className='mb-4'>
        <div className='flex gap-3'>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face"
            alt="Your avatar"
            className='w-8 h-8 rounded-full object-cover'
          />
          <div className='flex-1 flex gap-2'>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Write a comment..."
              className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm'
            />
            <button
              onClick={handleSubmitComment}
              disabled={!newComment.trim()}
              className='px-3 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className='space-y-3'>
        {displayedComments.map((comment) => (
          <div key={comment.id} className='flex gap-3'>
            <img
              src={comment.avatar}
              alt={`${comment.author}'s avatar`}
              className='w-8 h-8 rounded-full object-cover flex-shrink-0'
            />
            <div className='flex-1 min-w-0'>
              <div className='bg-gray-50 rounded-lg px-3 py-2'>
                <div className='flex items-center gap-2 mb-1'>
                  <span className='font-medium text-sm text-gray-900'>{comment.author}</span>
                  <span className='text-xs text-gray-500'>{comment.time}</span>
                </div>
                <p className='text-sm text-gray-700 leading-relaxed'>{comment.content}</p>
              </div>
            </div>
          </div>
        ))}

        {/* See All Comments Button */}
        {comments.length > 2 && (
          <button
            onClick={() => setShowAllComments(!showAllComments)}
            className='text-blue-600 cursor-pointer hover:text-blue-800 text-sm font-medium transition-colors duration-200 ml-11'
          >
            {showAllComments 
              ? 'Show fewer comments' 
              : `See all ${comments.length} comments`
            }
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
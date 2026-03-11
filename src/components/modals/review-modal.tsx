import { X, Star, Send } from 'lucide-react';
import { useState } from 'react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  turfName?: string;
  onSubmit?: (rating: number, review: string) => void;
}

export function ReviewModal({ isOpen, onClose, turfName = 'Elite Sports Arena', onSubmit }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }

    if (review.trim().length < 10) {
      alert('Please write a review with at least 10 characters');
      return;
    }

    console.log('Review submitted:', { rating, review });
    
    if (onSubmit) {
      onSubmit(rating, review);
    }
    
    // Reset form
    setRating(0);
    setReview('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg glass-card border border-primary/30 rounded-2xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card border border-border hover-neon flex items-center justify-center group"
        >
          <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#b800ff] mb-4 neon-glow">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Rate Your Experience
          </h2>
          <p className="text-sm text-muted-foreground">
            How was your experience at <span className="text-primary font-semibold">{turfName}</span>?
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground block text-center">
              Select Your Rating *
            </label>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-12 h-12 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-[#FFD700] text-[#FFD700]'
                        : 'text-muted-foreground'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-primary font-semibold">
                {rating === 1 && 'Poor'}
                {rating === 2 && 'Fair'}
                {rating === 3 && 'Good'}
                {rating === 4 && 'Very Good'}
                {rating === 5 && 'Excellent'}
              </p>
            )}
          </div>

          {/* Review Text */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Write Your Review *
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience with other users. What did you like? What could be improved?"
              rows={5}
              className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              required
              minLength={10}
            />
            <p className="text-xs text-muted-foreground text-right">
              {review.length} characters (minimum 10)
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl neon-button text-white font-semibold flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Submit Review
          </button>
        </form>

        {/* Info */}
        <p className="mt-4 text-xs text-center text-muted-foreground">
          Your review will be publicly visible and help others make informed decisions.
        </p>
      </div>
    </div>
  );
}

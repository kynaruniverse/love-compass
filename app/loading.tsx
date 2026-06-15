export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-5">

        {/* Breathing plum heart */}
        <div className="flex items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: "lc-breathe 2.2s ease-in-out infinite" }}
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="loading-heart-grad" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#a06ebe" stopOpacity="1" />
                <stop offset="55%" stopColor="#9E3B4E" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#32144a" stopOpacity="0.7" />
              </radialGradient>
            </defs>
            <path
              d="M24 40.5C24 40.5 5 29 5 16.5C5 10.5 9.5 6 15.5 6C18.9 6 21.8 7.7 24 10.2C26.2 7.7 29.1 6 32.5 6C38.5 6 43 10.5 43 16.5C43 29 24 40.5 24 40.5Z"
              fill="url(#loading-heart-grad)"
            />
          </svg>
        </div>

        <p
          className="font-serif italic"
          style={{ fontSize: 16, color: "var(--primary)", opacity: 0.65 }}
        >
          Preparing your space…
        </p>

      </div>
    </div>
  );
}
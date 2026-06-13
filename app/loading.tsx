export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-3">
        <div className="w-8 h-8 rounded-full border-2 border-[var(--primary)] border-t-transparent animate-spin mx-auto" />
        <p className="text-sm opacity-50 font-serif">Just a moment...</p>
      </div>
    </div>
  );
}
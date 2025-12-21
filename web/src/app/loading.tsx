export default function Loading() {
  return (
    <div className="min-h-screen bg-sahayak-cream flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-sahayak-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sahayak-muted">Loading...</p>
      </div>
    </div>
  );
}

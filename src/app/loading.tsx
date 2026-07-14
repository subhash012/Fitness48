export default function Loading() {
  return (
    <div className="min-h-screen bg-black px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl animate-pulse space-y-6">
        <div className="h-10 w-48 rounded-full bg-white/10" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-96 rounded-[2rem] bg-white/10" />
          <div className="space-y-4">
            <div className="h-8 w-3/4 rounded-full bg-white/10" />
            <div className="h-8 w-1/2 rounded-full bg-white/10" />
            <div className="h-28 rounded-[2rem] bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
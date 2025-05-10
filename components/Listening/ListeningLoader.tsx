export default function ListeningLoader() {
  return (
    <div className="flex items-center justify-center gap-0.5 animate-pulse size-5">
      <div className="w-1 h-3 bg-red-500 rounded-sm animate-[pulse_0.6s_ease-in-out_infinite]"></div>
      <div className="w-1 h-4 bg-red-500 rounded-sm animate-[pulse_0.6s_ease-in-out_infinite_0.2s]"></div>
      <div className="w-1 h-2 bg-red-500 rounded-sm animate-[pulse_0.6s_ease-in-out_infinite_0.4s]"></div>
    </div>
  );
}

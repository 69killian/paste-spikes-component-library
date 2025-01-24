import { Search } from "lucide-react";

export function CommandDemo() {
  return (
    <div className="relative rounded-lg shadow-md md:min-w-[681.16px] md:min-h-[37px] bg-[#151515]">
      <input 
        type="text" 
        className="w-full py-2 pl-10 pr-4 bg-[#151515] text-white rounded-sm border border-[#1d1d1d] placeholder:text-neutral-500 outline-none transition-all duration-100"
        placeholder="Search for specific components, sections, wireframes, and more..." 
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 w-5" />
    </div>
  );
}

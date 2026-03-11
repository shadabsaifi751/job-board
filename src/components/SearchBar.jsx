import { Search, MapPin } from "lucide-react";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  locationTerm,
  setLocationTerm,
  selectedCategory,
  setSelectedCategory,
  selectedJobType,
  setSelectedJobType,
  selectedLocation,
  setSelectedLocation,
  selectedRemote,
  setRemote,
}) {
  return (
    <section className="bg-white rounded-2xl p-4 shadow-xl mb-12 animate-slideUp">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 border-b-0 md:border-b border-gray-200 pb-0 md:pb-4 mb-4">
        <div className="flex-1 flex items-center gap-3 p-2">
          <Search size={20} className="text-gray-400 shrink-0" />
          <input
            type="text"
            className="flex-1 border-none outline-none text-[1rem] text-gray-900 bg-transparent w-full placeholder-gray-400 font-sans"
            placeholder="Search by title or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="block md:hidden w-full h-[1px] bg-gray-200 shrink-0"></div>
        <div className="hidden md:block w-px h-6 bg-gray-200 mx-4 shrink-0"></div>

        <div className="flex-1 flex items-center gap-3 p-2">
          <MapPin size={20} className="text-gray-400 shrink-0" />
          <input
            type="text"
            className="flex-1 border-none outline-none text-[1rem] text-gray-900 bg-transparent w-full placeholder-gray-400 font-sans"
            placeholder="Search by city or country"
            value={locationTerm}
            onChange={(e) => setLocationTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <select
          className="filter-select flex-grow"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>Category</option>
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
        </select>

        <select className="filter-select flex-grow">
          <option>Related tags</option>
        </select>

        <select
          className="filter-select flex-grow"
          value={selectedJobType}
          onChange={(e) => setSelectedJobType(e.target.value)}
        >
          <option>Job type</option>
          <option>Permanent</option>
          <option>Fixed term</option>
        </select>

        <select
          className="filter-select flex-grow"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option>Location</option>
          <option>San Jose, CA, USA</option>
          <option>San Francisco, CA, USA</option>
          <option>Berlin, Germany</option>
        </select>

        <select
          className="filter-select flex-grow"
          value={selectedRemote}
          onChange={(e) => setRemote(e.target.value)}
        >
          <option>Remote</option>
          <option>Flexible</option>
          <option>On-site</option>
        </select>
      </div>
    </section>
  );
}

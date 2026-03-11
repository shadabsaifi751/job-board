import { useState, useMemo } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedJobType, setSelectedJobType] = useState("Job type");
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedRemote, setRemote] = useState("Remote");

  const [mainFilter, setMainFilter] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLocation =
        locationTerm === "" ||
        job.location.toLowerCase().includes(locationTerm.toLowerCase());

      const matchMain =
        mainFilter === "" ||
        (mainFilter === "Web Design" && job.category === "Design") ||
        (mainFilter === "Web Development" && job.category === "Development") ||
        (mainFilter === "Web Entry" && job.tags.includes("Entry Level"));

      const matchCategory =
        selectedCategory === "Category" || job.category === selectedCategory;
      const matchJobType =
        selectedJobType === "Job type" || job.type === selectedJobType;

      return (
        matchSearch &&
        matchLocation &&
        matchMain &&
        matchCategory &&
        matchJobType
      );
    });
  }, [searchTerm, locationTerm, mainFilter, selectedCategory, selectedJobType]);

  const toggleMainFilter = (filterName) => {
    if (mainFilter === filterName) setMainFilter("");
    else setMainFilter(filterName);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 pb-16">
      <main>
        <Hero mainFilter={mainFilter} toggleMainFilter={toggleMainFilter} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedJobType={selectedJobType}
          setSelectedJobType={setSelectedJobType}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedRemote={selectedRemote}
          setRemote={setRemote}
        />

        <section className="flex flex-col gap-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center p-12 text-gray-500">
              No jobs found matching your criteria.
            </div>
          ) : (
            filteredJobs.map((job, idx) => (
              <JobCard key={job.id} job={job} index={idx} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

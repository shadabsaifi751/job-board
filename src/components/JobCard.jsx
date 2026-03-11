export default function JobCard({ job, index = 0 }) {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 shadow-sm cursor-pointer hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 animate-fadeUp opacity-0"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-14 h-14 rounded-lg bg-white p-2 border border-gray-200 flex justify-center items-center shrink-0">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
          <div className="text-sm text-gray-500 font-medium flex items-center flex-wrap gap-2">
            <span>{job.company}</span>
            <span className="text-gray-300">•</span>
            <span>{job.type}</span>
            <span className="text-gray-300">•</span>
            <span>{job.arrangement}</span>
            <span className="text-gray-300">•</span>
            <span>{job.location}</span>
            {job.salary && (
              <>
                <span className="text-gray-300">•</span>
                <span>{job.salary}</span>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 border border-gray-300 text-gray-500 py-1 px-2 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between mt-4 md:flex-col md:items-end md:mt-0 md:h-full">
        <span className="text-sm text-gray-900 font-semibold">
          {job.timeAgo}
        </span>
      </div>
    </div>
  );
}

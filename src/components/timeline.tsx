import React from "react";

export default function Timeline() {
  const timelineData = [
    {
      id: 1,
      date: "11th November, 2024",
      title: "Initial (1st Round)",
      description: "Mode - Online",
      side: "left",
    },
    {
      id: 2,
      date: "19th November, 2024",
      title: "Final (Last Round)",
      description: "Mode - Physical, On Site",
      side: "right",
    },
  ];

  return (
    <div className="border-cover underscan text-green-500">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-green-500 hidden md:block" />

        <div className="relative">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className={`mb-8 relative flex md:gap-8 items-center ${item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div
                className={`hidden md:block w-1/2 ${item.side === "left" ? "text-right" : "text-left"} pr-4`}
              >
                <span className="inline-block px-2 py-1 bg-black border border-green-500 animate-pulse">
                  [{item.date}]
                </span>
              </div>

              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-green-500 rounded-full" />
              <div
                className={`w-full md:w-1/2 ${item.side === "left" ? "md:pl-4" : "md:pr-4"}`}
              >
                <div className="p-4 hover:bg-green-900/20 transition-all duration-300 relative group">
                  <div className="md:hidden text-sm mb-2 opacity-75">
                    [{item.date}]
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:animate-pulse">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed opacity-90">
                    &gt; {item.description}
                  </p>

                  <div className="absolute top-2 right-2 opacity-25 text-xs">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="text-right">
                        {Math.random().toString(2).slice(2, 10)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

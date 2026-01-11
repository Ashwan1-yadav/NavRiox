import React from "react";

const App = () => {
  const services = [
    {
      title: "Web Development",
      image: "https://framerusercontent.com/images/PGqhbyNizzg0WF0Ff8Ct1xJCz4.png?scale-down-to=512",
      overlayImage: "https://framerusercontent.com/images/R8KAWJ8XJ7xyTu7ucAu7MwYY.png?scale-down-to=512",
    },
    {
      title: "Creative Design",
      image: "https://framerusercontent.com/images/icQGsV71x2rSlISc1VdMnw1qP0.png?scale-down-to=512",
      overlayImage: "https://framerusercontent.com/images/lXJpgpSzhcdgjAHyzQ8gL6xZio.png?scale-down-to=512",
    },
    {
      title: "Branding",
      image: "https://framerusercontent.com/images/fDuEIn62K1IFn5Ej7fSyTMA71og.png?scale-down-to=512",
      overlayImage: "https://framerusercontent.com/images/swGfymsPbpYnmJh0xWYUDsjYEVw.png?scale-down-to=512",
    },
    {
      title: "Product Design",
      image: "https://framerusercontent.com/images/fTivRAMCNvUFDAp9M0oddRMjk.png?scale-down-to=512",
      overlayImage: "https://framerusercontent.com/images/ykQMkxdWQtCI1O7dEHnQs9vQmME.png?scale-down-to=512",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-black py-20 px-4 sm:px-6 font-sans text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Services We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Let’s turn your vision into something exceptional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex h-[320px] flex-col rounded-3xl border border-white/10 bg-neutral-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
            >
              {/* Images */}
              <div className="relative flex flex-grow items-center justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute w-44 rounded-xl shadow-lg transform -rotate-6 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/512x512/111827/9ca3af?text=Image";
                  }}
                />
                <img
                  src={service.overlayImage}
                  alt={service.title}
                  className="absolute w-44 rounded-xl shadow-xl transform rotate-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/512x512/1f2937/d1d5db?text=Image";
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="mt-auto text-lg font-medium text-white">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;

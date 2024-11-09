import React from 'react';

function Slash() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Slash</h2>
        <p className="text-xl text-gray-800 mb-8">
          Slash is a renowned guitarist, best known as the lead guitarist of Guns N' Roses. His expressive solos and iconic
          look have cemented his place as a rock icon.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-48 h-48">
            <img
              src="slash2.jpg" // Replace with the correct path for the image
              alt="Slash"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Saul Hudson, known as Slash, was born on July 23, 1965. His remarkable guitar work on tracks like "Sweet Child O' Mine"
            and "November Rain" showcases his distinctive sound and virtuosity. Slash's influence on hard rock is undeniable,
            inspiring guitarists across the globe.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Slash;

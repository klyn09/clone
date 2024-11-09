import React from 'react';

function EddieVanHalen() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Eddie Van Halen</h2>
        <p className="text-xl text-gray-800 mb-8">
          Eddie Van Halen was an innovative guitarist and founding member of the rock band Van Halen. Known for his dazzling solos
          and finger-tapping technique, he redefined guitar playing for a new generation.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-48 h-48">
            <img
              src="vanhallen.jpg" // Replace with the correct path for the image
              alt="Eddie Van Halen"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Edward Lodewijk Van Halen, born on January 26, 1955, was a groundbreaking guitarist whose revolutionary techniques,
            including the "two-handed tapping" style, have left a lasting impact on rock music. Hits like "Eruption" showcase
            his technical mastery and creativity, inspiring countless musicians worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EddieVanHalen;

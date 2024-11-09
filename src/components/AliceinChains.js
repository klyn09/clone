import React from 'react';

function AliceinChains() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">Alice in Chains</h2>
        <p className="text-xl text-gray-800 mb-8">
          Alice in Chains is an American rock band formed in 1987, known for their heavy, sludgy sound that incorporates elements of grunge, hard rock, and metal.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-72 h-48">
            <img
              src="aicmtv.jpg" // Replace with the correct path for the image
              alt="Alice in Chains"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            With the haunting vocals of Layne Staley and the heavy riffs of Jerry Cantrell, Alice in Chains became one of the key bands in the Seattle grunge movement. Their albums like *Dirt* and *Jar of Flies* are iconic in the alternative rock and metal scenes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AliceinChains;

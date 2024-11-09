import React from 'react';

function LinkinPark() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">Linkin Park</h2>
        <p className="text-xl text-gray-800 mb-8">
          Linkin Park was an American rock band formed in 1996, known for their fusion of alternative rock, nu-metal, and electronic elements. 
          With hit albums like *Hybrid Theory* and *Meteora*, they became one of the most successful bands of the 2000s, blending rap and rock in innovative ways.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-72 h-48"> {/* Adjusted for rectangular image */}
            <img
              src="linkinpark.jpg" // Replace with the correct path for the image
              alt="Linkin Park"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Formed by Mike Shinoda, Brad Delson, and other members in Agoura Hills, California, Linkin Park gained prominence with their debut album *Hybrid Theory*, which was certified Diamond in the U.S. The band’s ability to blend hard rock, rap, and electronic music made them pioneers in the nu-metal genre.
            Tragically, their lead vocalist Chester Bennington passed away in 2017, leaving behind a lasting legacy in the world of music.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LinkinPark;

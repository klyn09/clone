import React from 'react';

function Nirvana() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Nirvana</h2>
        <p className="text-xl text-gray-800 mb-8">
          Nirvana was an American rock band formed in 1987, led by the iconic Kurt Cobain. The band became a symbol of the
          grunge movement and influenced an entire generation with its raw sound and introspective lyrics.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-72 h-48"> {/* Changed to make the image rectangular */}
            <img
              src="mtvnirvana.jpg" // Replace with the correct path for the image
              alt="Nirvana"
              className="w-full h-full object-cover shadow-lg" // Removed rounded-full and added shadow-lg
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kurt Cobain, the frontman of Nirvana, was born on February 20, 1967. He formed Nirvana with bassist Krist Novoselic and drummer Dave Grohl.
            The band's groundbreaking album "Nevermind" redefined the rock landscape in the early 90s and became a cultural phenomenon.
            Despite their brief career, Nirvana's impact on music and pop culture remains legendary.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Nirvana;

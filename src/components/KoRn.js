import React from 'react';

function KoRn() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">KoRn</h2>
        <p className="text-xl text-gray-800 mb-8">
          KoRn is an American metal band formed in 1993. They are credited with pioneering the nu-metal genre, blending heavy metal, hip hop, and industrial sounds.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-72 h-48">
            <img
              src="korn1.jpg" // Replace with the correct path for the image
              alt="KoRn"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Formed by Jonathan Davis, James "Munky" Shaffer, and Brian "Head" Welch, KoRn's self-titled debut album changed the face of modern rock music. With their unique sound and themes of alienation and pain, they became one of the most influential bands in the genre.
          </p>
        </div>
      </div>
    </section>
  );
}

export default KoRn;

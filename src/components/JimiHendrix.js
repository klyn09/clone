import React from 'react';

function JimiHendrix() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Jimi Hendrix</h2>
        <p className="text-xl text-gray-800 mb-8">
          Jimi Hendrix was an American rock guitarist, singer, and songwriter, widely considered to be one of the greatest
          and most influential electric guitarists in the history of popular music.
        </p>

        <div className="flex justify-center gap-8">
          {/* Menampilkan gambar Jimi Hendrix */}
          <div className="w-48 h-48">
            <img
              src="hendrix.jpg" // Ganti dengan path gambar yang sesuai
              alt="Jimi Hendrix"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            James Marshall Hendrix (November 27, 1942 – September 18, 1970) was an American musician, widely regarded as one
            of the most influential electric guitarists in the history of rock music. His innovative and unique style redefined
            the boundaries of guitar performance, combining blues, rock, and psychedelia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default JimiHendrix;

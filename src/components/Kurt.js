import React from 'react';

function Kurt() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Kurt Cobain</h2>
        <p className="text-xl text-gray-800 mb-8">
          Kurt Cobain was an American musician and the lead singer, guitarist, and primary songwriter of the rock band Nirvana.
          His powerful lyrics and raw musical style influenced generations of musicians.
        </p>

        <div className="flex justify-center gap-8">
          {/* Menampilkan gambar Kurt Cobain */}
          <div className="w-48 h-48">
            <img
              src="kurtcobain.jpg" // Ganti dengan path gambar yang sesuai
              alt="Kurt Cobain"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kurt Donald Cobain (February 20, 1967 – April 5, 1994) was the frontman of the influential rock band Nirvana.
            Cobain's raw, emotive performances and his band's blend of punk, rock, and heavy metal made them the defining sound of
            the 1990s.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Kurt;

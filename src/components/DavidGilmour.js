import React from 'react';

function DavidGilmour() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">David Gilmour</h2>
        <p className="text-xl text-gray-800 mb-8">
          David Gilmour is an English musician, best known as the guitarist and co-lead vocalist of the progressive rock band Pink Floyd.
          His smooth, expressive guitar playing and haunting vocals have earned him a place among the most influential musicians in rock history.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-48 h-48">
            <img
              src="gilmour.jpg" // Ganti dengan path gambar yang sesuai
              alt="David Gilmour"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            David Jon Gilmour, born on March 6, 1946, joined Pink Floyd in 1968 and helped shape the band's signature sound.
            His guitar work on tracks like "Comfortably Numb" and "Shine On You Crazy Diamond" is renowned for its emotional depth and technical mastery.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DavidGilmour;

import React from 'react';

function LedZeppelin() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Led Zeppelin</h2>
        <p className="text-xl text-gray-800 mb-8">
          Led Zeppelin was an English rock band formed in 1968, known for pioneering hard rock and heavy metal. With legendary
          guitarist Jimmy Page, iconic vocals by Robert Plant, and groundbreaking music, they became one of the greatest and
          most influential rock bands in history.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-72 h-48"> {/* Adjusted for rectangular image */}
            <img
              src="led.jpg" // Replace with the correct path for the image
              alt="Led Zeppelin"
              className="w-full h-full object-cover shadow-lg" // Added shadow-lg for a more visible shadow
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Led Zeppelin, consisting of Robert Plant (vocals), Jimmy Page (guitar), John Paul Jones (bass/keyboards), and
            John Bonham (drums), revolutionized rock music with their powerful sound and genre-blending style. Their albums,
            especially *Led Zeppelin IV* and *Physical Graffiti*, are considered masterpieces. The band’s blend of blues, folk,
            and heavy rock has left a lasting legacy on the music world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LedZeppelin;

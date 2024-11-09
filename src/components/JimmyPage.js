import React from 'react';

function JimmyPage() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Jimmy Page</h2>
        <p className="text-xl text-gray-800 mb-8">
          Jimmy Page is a legendary English guitarist, best known as the founder of the rock band Led Zeppelin.
          His unique guitar style and iconic compositions have made him one of the most influential musicians in rock history.
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-48 h-48">
            <img
              src="page.jpg" // Replace with the correct path for the image
              alt="Jimmy Page"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            James Patrick Page, born on January 9, 1944, is celebrated for his innovative guitar techniques and his role in shaping
            the heavy rock genre. Known for his work on classics like "Stairway to Heaven" and "Whole Lotta Love," Page's skillful
            playing and powerful riffs have inspired generations of musicians.
          </p>
        </div>
      </div>
    </section>
  );
}

export default JimmyPage;

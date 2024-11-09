import React from 'react';

function LimpBizkit() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">Limp Bizkit</h2>
        <p className="text-xl text-gray-800 mb-8">
          Limp Bizkit is an American nu-metal band formed in 1994. Known for their mix of rap, rock, and metal, the band
          gained massive popularity with their album *Significant Other*, featuring hit singles like "Nookie" and "Break Stuff".
        </p>

        <div className="flex justify-center gap-8">
          <div className="w-72 h-48">
            <img
              src="lb.jpg" // Replace with the correct path for the image
              alt="Limp Bizkit"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Limp Bizkit, led by frontman Fred Durst, became known for their energetic, often controversial, performances.
            With a unique blend of rap and rock, they were one of the leading bands of the nu-metal movement in the late 90s and early 2000s.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LimpBizkit;

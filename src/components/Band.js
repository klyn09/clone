import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Band() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Memicu animasi saat komponen dimuat
  }, []);

  return (
    <section id="band" className="max-w-4xl mx-auto py-10 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Favorite Guitarists</h2>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 ${isVisible ? 'animate-fadeIn' : ''}`}>
        <Link to="/nirvana" className="group transition-transform transform hover:scale-105">
          <img
            src="nirvana.jpg"
            alt="Nirvana"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">Nirvana</div>
        </Link>

        <Link to="/ledzeppelin" className="group transition-transform transform hover:scale-105">
          <img
            src="ledzepellin.jpg"
            alt="Led Zeppelin"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">Led Zeppelin</div>
        </Link>

        <Link to="/limpbizkit" className="group transition-transform transform hover:scale-105">
          <img
            src="limpbizkit.jpg"
            alt="Limp Bizkit"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">Limp Bizkit</div>
        </Link>

        <Link to="/korn" className="group transition-transform transform hover:scale-105">
          <img
            src="korn.jpg"
            alt="KoRn"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">KoRn</div>
        </Link>

        <Link to="/aliceinchains" className="group transition-transform transform hover:scale-105">
          <img
            src="aic.jpg"
            alt="Alice in Chains"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">Alice in Chains</div>
        </Link>

        <Link to="/linkinpark" className="group transition-transform transform hover:scale-105">
          <img
            src="lp.jpg"
            alt="Linkin Park"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">Linkin Park</div>
        </Link>
      </div>
    </section>
  );
}

export default Band;

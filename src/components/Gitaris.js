import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Gitaris() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section id="gitaris" className="max-w-4xl mx-auto py-10 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Favorite Guitarists</h2>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-6 ${isVisible ? 'animate-fadeIn' : ''}`}
        ref={ref}
      >
        <Link to="/kurt" className="group transition-transform transform hover:scale-105">
          <img
            src="kurt.jpg"
            alt="Kurt Cobain"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">
            Kurt Cobain
          </div>
        </Link>

        <Link to="/jimihendrix" className="group transition-transform transform hover:scale-105">
          <img
            src="jimi.jpg"
            alt="Jimi Hendrix"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">
            Jimi Hendrix
          </div>
        </Link>

        <Link to="/davidgilmour" className="group transition-transform transform hover:scale-105">
          <img
            src="david.jpg"
            alt="David Gilmour"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">
            David Gilmour
          </div>
        </Link>

        <Link to="/jimmypage" className="group transition-transform transform hover:scale-105">
          <img
            src="jimmy.jpg"
            alt="Jimmy Page"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">
            Jimmy Page
          </div>
        </Link>

        <Link to="/eddievanhalen" className="group transition-transform transform hover:scale-105">
          <img
            src="edie.jpg"
            alt="Eddie Van Halen"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">
            Eddie Van Halen
          </div>
        </Link>

        <Link to="/slash" className="group transition-transform transform hover:scale-105">
          <img
            src="slashgnr.jpg"
            alt="Slash"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-700">
            Slash
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Gitaris;

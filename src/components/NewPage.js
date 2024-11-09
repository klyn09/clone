import React from 'react';

function NewPage() {
  return (
    <div className="max-w-3xl mx-auto my-16 p-8 bg-gradient-to-b from-blue-50 via-white to-white text-gray-900 rounded-2xl shadow-lg transform transition duration-500 hover:shadow-2xl hover:scale-105">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700 tracking-wider">
        MY FAVORITE
      </h1>
      <div className="text-lg text-gray-700 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Discovering My Passion for Music
          </h2>
          <p>
            Music has always been more than just a hobby for me; it's a profound passion that has shaped my life in countless ways. From the moment I first heard the sound of a melody, I knew that music would play an essential role in my journey. It’s the rhythm of my daily life, providing a soundtrack to both my joys and challenges. Music is where I find comfort, where I draw inspiration, and where I connect with the deeper parts of myself.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            The Power of Melody and Emotion
          </h2>
          <p>
            There's something magical about how music can express what words sometimes cannot. A single song can evoke a thousand emotions, from happiness and excitement to reflection and peace. Whether it’s the upbeat tempo of a lively tune or the soothing flow of a gentle ballad, music has a unique ability to resonate with my inner thoughts and feelings. It’s this connection that fuels my love for music, as it provides a space to explore and express emotions in a way that feels both personal and universal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            A Journey of Endless Exploration
          </h2>
          <p>
            Every day, I find myself drawn to new sounds, genres, and artists, always eager to discover something that speaks to me in a fresh and exciting way. The world of music is vast and ever-changing, offering endless opportunities to explore and grow. Whether I’m delving into the classics or uncovering new hits, music continues to be a source of inspiration, relaxation, and joy in my life. It’s a journey that I’m thrilled to be on, and one that I look forward to sharing with others who feel the same passion.
          </p>
        </section>
      </div>
    </div>
  );
}

export default NewPage;

import React from 'react';

const sections = [
  {
    id: 'about',
    title: 'About the Regiment',
    content: `1st Virtual Australian Combat Regiment (1VACR) is a casual-first gaming community built around milsim-lite experiences in DCS World and Arma 3. We're here for immersive, combined arms gameplay—without the rigid structure or time demands of hardcore milsim units.

Whether you're flying fast jets or rolling with armour, we focus on teamwork, tactical coordination, and having a good time. No mandatory ops, no rank ladders—just a solid crew of like-minded players who enjoy working together.

We run regular missions, training sessions, and community events, and welcome players of all skill levels. If you're into military aviation and ground ops and want to play in a chill but organised setting, 1VACR is for you.

Jump in, suit up, and bring the fight.`,
  },
  {
    id: 'games',
    title: 'Games We Play',
    content: `• DCS World: High-fidelity flight simulation
• ARMA 3: Combined arms military operations`,
  },
];

export default function InfoSection() {
  return (
    <div className="w-full px-4 py-12">
      {sections.map((sec) => (
        <div
          key={sec.id}
          className="w-full max-w-4xl mx-auto mb-8 transition-transform transform hover:scale-105 duration-300"
        >
          <section id={sec.id} className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {sec.title}
            </h3>
            <div className="prose text-gray-800 dark:text-gray-200 whitespace-pre-line max-w-none">
              {sec.content}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
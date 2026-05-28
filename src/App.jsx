import { useState } from "react";

import photo1 from "./assets/pic1.jpeg";
import photo2 from "./assets/smile.jpeg";
import photo3 from "./assets/moment.jpeg";
import photo4 from "./assets/beaut.jpeg";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const memories = [
    {
      image: photo2,
      text: "My favorite smile ❤️",
    },
    {
      image: photo3,
      text: "Moments I'll always cherish 💖",
    },
    {
      image: photo4,
      text: "You make life beautiful ✨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 overflow-hidden relative">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400 rounded-full blur-3xl opacity-30"></div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="heart left-10">❤️</div>
        <div className="heart left-1/3">💖</div>
        <div className="heart left-2/3">💕</div>
        <div className="heart right-10">❤️</div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/20 border-b border-white/20">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-2xl font-bold text-pink-700">
            LoveSpace 💖
          </h1>

          <div className="flex gap-4 items-center">

            <a
              href="#memories"
              className="text-gray-700 hover:text-pink-600 transition font-medium"
            >
              Memories
            </a>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full shadow-lg transition hover:scale-105">
              Forever ❤️
            </button>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 grid md:grid-cols-2 items-center gap-12">

        {/* Left Side */}
        <div>

          <p className="uppercase tracking-[4px] text-pink-600 font-semibold">
            Made with love
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-800 mt-4">
            A tiny website
            <span className="text-pink-600">
              {" "}for Akshay's Kiran  ❤️
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-8 animate-pulse">
            Every moment with you feels magical.
            This little website is just a reminder
            of how important you are to me.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <button
              onClick={() => setShowMessage(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-4 rounded-2xl shadow-2xl transition hover:scale-105"
            >
              Open Surprise ✨
            </button>

            <a
              href="#memories"
              className="bg-white/40 backdrop-blur-md border border-white/30 px-7 py-4 rounded-2xl text-gray-800 shadow-xl hover:scale-105 transition"
            >
              View Memories
            </a>

          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">

          <div className="absolute -inset-4 bg-white/20 rounded-[40px] blur-xl"></div>

          <img
            src={photo1}
            alt=""
            className="relative rounded-[40px] shadow-2xl h-[500px] w-full object-cover border border-white/30"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mt-24">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/40 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl border border-white/20 text-center">

            <h2 className="text-5xl font-black text-pink-600">
              ∞
            </h2>

            <p className="mt-3 text-gray-700 text-lg">
              Endless Love
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl border border-white/20 text-center">

            <h2 className="text-5xl font-black text-pink-600">
              100%
            </h2>

            <p className="mt-3 text-gray-700 text-lg">
              Happiness Boost
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl border border-white/20 text-center">

            <h2 className="text-5xl font-black text-pink-600">
              ❤️
            </h2>

            <p className="mt-3 text-gray-700 text-lg">
              Favorite Person
            </p>
          </div>

        </div>
      </section>

      {/* Popup */}
      {showMessage && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[32px] max-w-lg shadow-2xl border border-white/30">

            <h2 className="text-3xl font-bold text-pink-600">
              Dear Love 💖
            </h2>

            <p className="mt-5 text-gray-700 leading-8 text-lg">
              Thank you for making life brighter,
              happier, and full of beautiful memories.
              You truly make ordinary days feel special.
            </p>

            <button
              onClick={() => setShowMessage(false)}
              className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* Memories Section */}
      <section
        id="memories"
        className="relative z-10 max-w-6xl mx-auto px-6 py-28"
      >

        <div className="text-center">

          <p className="text-pink-600 font-semibold uppercase tracking-[3px]">
            Memories
          </p>

          <h2 className="text-5xl font-black text-gray-800 mt-3">
            Our Favorite Moments ✨
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {memories.map((memory, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-[30px] overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500"
            >

              <img
                src={memory.image}
                alt=""
                className="h-80 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xl text-gray-700 font-medium">
                  {memory.text}
                </p>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default App;
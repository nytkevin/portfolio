"use client";

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-nyt/",
      color: "hover:text-blue-400 hover:glow-blue",
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com",
    //   color: "hover:text-cyan-400 hover:glow-cyan",
    // },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nyt_kevin/",
      color: "hover:text-pink-400 hover:glow-pink",
    },
    {
      name: "Github",
      url: "https://github.com/nytkevin",
      color: "hover:text-purple-400 hover:glow-purple",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-15 pb-20 md:pb-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="text-cyan-400">03.</span>
            <span className="text-white">Contact Me</span>
            <div className="hidden sm:flex flex-1 h-0.5 bg-linear-to-r from-cyan-400 to-transparent ml-4"></div>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-gray-400 text-xs sm:text-sm max-w-2xl w-full md:w-auto">
            <p>
              You can find me on
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
              >
                @Twitter
              </a>
              for a chat or
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition duration-300 hover:shadow-lg hover:shadow-blue-400/50"
              >
                @LinkedIn
              </a>
              for something a bit more professional. Come say hello, Id love to
              hear from you.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-6 justify-center md:justify-end w-full md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition duration-300 text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-cyan-400/50 underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-4 text-gray-500 text-xs sm:text-sm">
          <p>Designed & Built by Kevin NZAYITURIKI </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 10px currentColor;
          }
          50% {
            text-shadow:
              0 0 20px currentColor,
              0 0 30px currentColor;
          }
        }
        .hover\:glow-blue:hover {
          animation: glow 0.6s ease-in-out;
        }
        .hover\:glow-cyan:hover {
          animation: glow 0.6s ease-in-out;
        }
        .hover\:glow-pink:hover {
          animation: glow 0.6s ease-in-out;
        }
        .hover\:glow-purple:hover {
          animation: glow 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}

"use client";

import Image from "next/image";

const ClientLogoCarousel = () => {
  // Client logos with imported images
  const logos = [
    { name: "Client 1", url: "/AAA_Client/Pasted image.png" },
    { name: "Client 3", url: "/AAA_Client/Pasted image (2).png" },
    { name: "Client 4", url: "/AAA_Client/Pasted image (3).png" },
    { name: "Client 5", url: "/AAA_Client/Pasted image (4).png" },
    { name: "Client 6", url: "/AAA_Client/Pasted image (5).png" },
    { name: "Client 7", url: "/AAA_Client/Pasted image (6).png" },
    { name: "Client 8", url: "/AAA_Client/Pasted image (7).png" },
    { name: "Client 9", url: "/AAA_Client/Pasted image (8).png" },
    { name: "Client 10", url: "/AAA_Client/Pasted image (9).png" },
    { name: "Client 11", url: "/AAA_Client/Pasted image (10).png" },
    { name: "Client 12", url: "/AAA_Client/Pasted image (11).png" },
    { name: "Client 13", url: "/AAA_Client/Pasted image (12).png" },
    { name: "Client 14", url: "/AAA_Client/Pasted image (13).png" },
    { name: "Client 15", url: "/AAA_Client/Pasted image (14).png" },
    { name: "Client 16", url: "/AAA_Client/Pasted image (15).png" },
    { name: "Client 17", url: "/AAA_Client/Pasted image (16).png" },
    { name: "Client 18", url: "/AAA_Client/Pasted image (17).png" },
    { name: "Client 19", url: "/AAA_Client/Pasted image (18).png" },
    { name: "Client 20", url: "/AAA_Client/Pasted image (19).png" },
    { name: "Client 21", url: "/AAA_Client/Pasted image (20).png" }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gray-50 bg-[url('/images/bg-leaders.png')] bg-cover bg-center py-12">
      <div className="text-center mb-8">
        <h2 className="lg:text-4xl font-bold text-[#f58a1f] uppercase mb-2">Trusted by Industry Leaders</h2>
        <p className="text-gray-600 ">Join a network of industry pioneers</p>
      </div>
      
      <div className="relative">
        {/* Main scrolling container */}
        <div className="flex animate-scroll space-x-8">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center group"
            >
              <Image
                src={logo.url}
                alt={`${logo.name} logo`}
                width={160}
                height={80}
                sizes="160px"
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback instanceof HTMLElement) {
                    fallback.style.display = "flex";
                  }
                }}
              />
              <div 
                className="hidden items-center justify-center w-full h-full text-gray-500 text-sm font-medium"
              >
                {logo.name}
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientLogoCarousel;
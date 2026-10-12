type GalleryImage = {
  src: string;
  title: string;
  description: string;
};

type GalleryProps = {
  bannerTitle: string;
  bannerSubtitle?: string;
  images?: GalleryImage[];
};

const Gallery = ({ bannerTitle, bannerSubtitle, images = [] }: GalleryProps) => {
  return (
    <div>
      {/* Banner Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">{bannerTitle}</h1>
        {bannerSubtitle && <p className="text-lg mt-2">{bannerSubtitle}</p>}
      </div>

      {/* Gallery Section */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-white text-lg font-semibold">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

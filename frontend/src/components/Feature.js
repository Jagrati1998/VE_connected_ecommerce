import React, { useEffect, useState } from 'react';

const FeatureSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="bg-slate-50 py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-center mb-8 lg:mb-0">
            {/* Replace this with the actual image/illustration */}
            <img
              src="https://via.placeholder.com/150x50/008000/FFFFFF?text=Image"
              alt="Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
              lacus quam. Sed accumsan quam vitae est luctus fringilla. Pellentesque
              dapibus vestibulum sem a erat.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

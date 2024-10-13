import React from 'react';

const CommunitySection = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">
          Manage your entire Community in a single system
        </h2>
        <p className="text-gray-500 mt-2">Who is Newcom suitable for?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:scale-110 hover:bg-green-50" >
          <div className="mb-4">
            {/* Replace with an actual icon */}
            <svg
              className="w-12 h-12 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0-2a9 9 0 110 18A9 9 0 0110 1z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium">Membership Organisations</h3>
          <p className="text-gray-500 text-center mt-2">
            Our membership management software...
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:scale-110 hover:bg-green-50">
          <div className="mb-4">
            {/* Replace with an actual icon */}
            <svg
              className="w-12 h-12 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0-2a9 9 0 110 18A9 9 0 0110 1z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium">National Associations</h3>
          <p className="text-gray-500 text-center mt-2">
            Our membership management software...
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:scale-110 hover:bg-green-50">
          <div className="mb-4">
            {/* Replace with an actual icon */}
            <svg
              className="w-12 h-12 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0-2a9 9 0 110 18A9 9 0 0110 1z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium">Clubs and Groups</h3>
          <p className="text-gray-500 text-center mt-2">
            Our membership management software...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;

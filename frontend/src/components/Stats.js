import React from 'react';

const StatsComponent = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              Helping a local <br />
              <span className="text-green-600">business reinvent itself</span>
            </h2>
            <p className="text-gray-500 mt-2">We reached them with trust and dedication</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {/* Stat 1 */}
            <div className="transition transform hover:scale-105 hover:bg-green-50 p-4 rounded-lg shadow-lg hover:shadow-2xl">
              <div className="flex justify-center mb-2">
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5V10a2 2 0 00-2-2H4a2 2 0 00-2 2v10h5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6 6m0-6l-6 6"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gray-800">2,245,341</p>
              <p className="text-gray-500">Members</p>
            </div>

            {/* Stat 2 */}
            <div className="transition transform hover:scale-105 hover:bg-green-50 p-4 rounded-lg shadow-lg hover:shadow-2xl">
              <div className="flex justify-center mb-2">
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gray-800">46,328</p>
              <p className="text-gray-500">Clinics</p>
            </div>

            {/* Stat 3 */}
            <div className="transition transform hover:scale-105 hover:bg-green-50  p-4 rounded-lg shadow-lg hover:shadow-2xl">
              <div className="flex justify-center mb-2">
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18V6h3m0 0h9"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gray-800">828,867</p>
              <p className="text-gray-500">Event Bookings</p>
            </div>

            {/* Stat 4 */}
            <div className="transition transform hover:scale-105 hover:bg-green-50 p-4 rounded-lg shadow-lg hover:shadow-2xl">
              <div className="flex justify-center mb-2">
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 12h6"
                  />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gray-800">1,926,436</p>
              <p className="text-gray-500">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;

import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      description: 'Readmore',
      image: 'https://via.placeholder.com/150', // Replace with actual image
      link: '#'
    },
    {
      title: 'What are your safeguarding responsibilities and how can you manage them?',
      description: 'Readmore',
      image: 'https://via.placeholder.com/150', // Replace with actual image
      link: '#'
    },
    {
      title: 'Revamping the Membership Model with Triathlon Australia',
      description: 'Readmore',
      image: 'https://via.placeholder.com/150', // Replace with actual image
      link: '#'
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 mt-4">
          The NextGen blog is the best place to read about the latest membership insights, trends, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{post.title}</h3>
              <a href={post.link} className="text-green-600 font-semibold">
                {post.description} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

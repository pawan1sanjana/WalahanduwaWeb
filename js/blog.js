import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';

const TeaBlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const postsPerPage = 9;

  const blogPosts = [
    { img: "images/blog1.jpg", title: "Sustainable Tea Farming", desc: "How eco-friendly practices are shaping the future of tea farming.", link: "blog1.html" },
    { img: "images/blog2.jpg", title: "The Science Behind Tea Oxidation", desc: "Understanding how oxidation influences tea flavor and quality.", link: "blog2.html" },
    { img: "images/blog3.jpg", title: "Tea and Mental Wellness", desc: "Exploring the stress-relieving and cognitive benefits of tea.", link: "blog3.html" },
    { img: "images/blog4.jpg", title: "Future Trends in the Tea Industry", desc: "Innovations and market shifts in the global tea industry.", link: "blog4.html" },
    { img: "images/blog5.jpg", title: "Cold Brew Tea: A Refreshing Trend", desc: "Why cold-brewed tea is gaining popularity worldwide.", link: "blog5.html" },
    { img: "images/blog6.jpg", title: "Women in the Tea Industry", desc: "The impact of women in tea cultivation and leadership roles.", link: "blog6.html" },
    { img: "images/blog7.jpg", title: "How Terroir Affects Tea Flavor", desc: "The role of climate and soil in defining tea characteristics.", link: "blog7.html" },
    { img: "images/blog8.jpg", title: "The Rise of Specialty Tea", desc: "Why connoisseurs are seeking rare and artisanal teas.", link: "blog8.html" },
    { img: "images/blog9.jpg", title: "Biodegradable Tea Packaging", desc: "Sustainability initiatives in tea packaging solutions.", link: "blog9.html" },
    { img: "images/blog10.jpg", title: "AI and Automation in Tea Processing", desc: "How technology is transforming tea manufacturing.", link: "blog10.html" },
    { img: "images/blog11.jpg", title: "Caffeine Content in Different Teas", desc: "Comparing caffeine levels across various tea types.", link: "blog11.html" },
    { img: "images/blog12.jpg", title: "Tea Blending: The Art and Science", desc: "How master blenders create unique tea flavors.", link: "blog12.html" },
    { img: "images/blog13.jpg", title: "Tea Tourism: Exploring the Best Tea Plantations", desc: "Top destinations for tea lovers around the world.", link: "blog13.html" }
  ];

  // Calculate pagination
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // AOS-like animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      currentPosts.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedCards(prev => new Set([...prev, `${currentPage}-${index}`]));
        }, index * 100);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      setAnimatedCards(new Set());
    };
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Tea Blog
            </h1>
            <p className={`text-lg transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover the world of tea through our curated articles
            </p>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post, index) => {
            const cardId = `${currentPage}-${index}`;
            const isAnimated = animatedCards.has(cardId);
            
            return (
              <div
                key={cardId}
                className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                  darkMode ? 'bg-gray-800 shadow-gray-900/50' : 'bg-white'
                } ${
                  isAnimated 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`w-full h-full transition-all duration-500 group-hover:scale-110 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    {/* Placeholder for image */}
                    <div className={`w-full h-full flex items-center justify-center ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      <span className="text-sm font-medium">Image: {post.title}</span>
                    </div>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-green-600 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-3 leading-relaxed transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.desc}
                  </p>
                  <a
                    href={post.link}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:translate-x-1 ${
                      darkMode
                        ? 'bg-green-600 text-white hover:bg-green-500'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    Read More
                    <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Decorative elements */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                  darkMode ? 'bg-green-400' : 'bg-green-500'
                } opacity-0 group-hover:opacity-100 group-hover:scale-150`}></div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className={`flex items-center justify-center space-x-4 p-6 rounded-2xl transition-colors duration-300 ${
          darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
        }`}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === 1
                ? darkMode
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : darkMode
                ? 'bg-green-600 text-white hover:bg-green-500 hover:-translate-x-1'
                : 'bg-green-600 text-white hover:bg-green-700 hover:-translate-x-1'
            }`}
          >
            <ChevronLeft size={16} className="mr-1" />
            Previous
          </button>

          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            <span className={`font-medium transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Page {currentPage} of {totalPages}
            </span>
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === totalPages
                ? darkMode
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : darkMode
                ? 'bg-green-600 text-white hover:bg-green-500 hover:translate-x-1'
                : 'bg-green-600 text-white hover:bg-green-700 hover:translate-x-1'
            }`}
          >
            Next
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        {/* Stats */}
        <div className={`mt-8 text-center transition-colors duration-300 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <p className="text-sm">
            Showing {startIndex + 1}-{Math.min(endIndex, blogPosts.length)} of {blogPosts.length} articles
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeaBlogGrid;

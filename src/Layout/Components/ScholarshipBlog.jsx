const ScholarshipBlog = () => {
    const blogs = [
      {
        id: 1,
        title: "Top 10 Fully Funded Scholarships in 2025",
        image: "https://i.ibb.co.com/cJCgRx8/baim-hanif-p-YWu-OMhtc6k-unsplash.jpg",
        author: "Hashirama Senju",
        date: "Jan 10, 2025",
        excerpt: "Discover the top fully funded scholarships for international students in 2025. Learn about eligibility, deadlines, and application tips.",
      },
      {
        id: 2,
        title: "How to Write a Winning Scholarship Essay",
        image: "https://i.ibb.co.com/T2KkgB8/aaron-burden-CKl-HKt-CJZKk-unsplash.jpg",
        author: "Might Guy",
        date: "Feb 5, 2025",
        excerpt: "Writing a strong scholarship essay can set you apart from other applicants. Read our expert tips on crafting an outstanding application.",
      },
      {
        id: 3,
        title: "Step-by-Step Guide to Scholarship Applications",
        image: "https://i.ibb.co.com/K7b1rVh/victoria-heath-b7-CRDcwf-NFU-unsplash.jpg",
        author: "Itachi Uchiha",
        date: "Mar 3, 2025",
        excerpt: "Not sure how to apply for scholarships? Follow this detailed guide to make your application process smooth and successful.",
      },
    ];
  
    return (
      <section className="mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary font-poppins">
            Scholarship Blog & Tips
          </h2>
          <p className="text-center text-gray-600 dark:text-white mb-8 font-roboto">
            Stay updated with the latest scholarship opportunities and expert advice!
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 md:h-56 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white font-poppins">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-roboto">
                  By {blog.author} | {blog.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2 font-roboto">
                  {blog.excerpt}
                </p>
                <button className="mt-4 text-primary font-semibold hover:underline font-roboto">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ScholarshipBlog;
  
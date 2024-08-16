import Link from "next/link";
import Navbars1 from "../../component/Navbars1/page";
import Footer from "../../component/Footer/page";

export const metadata={
    title:"Blog Page",
    description:"Blog Page description",
};

export default function Blog(){
    const posts = [
      {
        title: 'Exploring the Basics of React.js',
        date: 'July 5, 2024',
        excerpt: 'React.js is a popular JavaScript library for building user interfaces. In this post, I explore the basics of React and how you can get started.',
        link: '#'
      },
      {
        title: 'Understanding Asynchronous JavaScript',
        date: 'June 20, 2024',
        excerpt: 'Asynchronous JavaScript can be tricky to understand. This post breaks down async concepts and how to use them effectively in your projects.',
        link: '#'
      },
      {
        title: 'A Guide to Responsive Web Design',
        date: 'June 10, 2024',
        excerpt: 'Responsive web design is crucial in today’s mobile-first world. Learn the principles of responsive design and how to implement them.',
        link: '#'
      }
    ];
  
    return (
    <main>
     <div className="overflow-hidden">
     <Navbars1/>
      <section className="bg-[rgb(187,192,195)] dark:bg-gray-900 text-black dark:text-white py-10 px-4 md:px-8">
        <div className="container mx-auto font-logo">
          <h2 className="max-md:text-4xl md:text-4xl font-bold mb-6 underline underline-offset-2 text-blue-600 max-md:mt-36 md:mt-20">Blog</h2>
          <p className="max-md:text-2xl md:text-2xl mb-6">
            Welcome to my blog! Here I share my thoughts tutorials and insights on various topics in software engineering and technology.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="max-md:text-2xl md:text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.date}</p>
                <p className="max-md:text-2xl md:text-2xl mb-4">{post.excerpt}</p>
                <Link href={post.link} className="text-blue-600 hover:underline">
                  Read more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      <div>
        <Footer/>
      </div>
      </main>
    );
  };
  
  
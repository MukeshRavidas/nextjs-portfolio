import Link from "next/link";
import Navbars1 from "../../component/Navbars1/page";
import Footer from "../../component/Footer/page";

export const metadata={
    title:"Articles Page",
    description:"Articles Page description",
};

export default function Articles(){
    const articles = [
      {
        title: 'Getting Started with Machine Learning',
        date: 'July 5, 2024',
        excerpt: 'Machine learning is a rapidly growing field with many practical applications. In this article, we cover the basics and how to get started.',
        link: '#'
      },
      {
        title: 'Building Scalable Web Applications',
        date: 'June 20, 2024',
        excerpt: 'Scalability is a crucial aspect of web application development. Learn how to design and build scalable web applications.',
        link: '#'
      },
      {
        title: 'Introduction to Cybersecurity',
        date: 'June 10, 2024',
        excerpt: 'Cybersecurity is more important than ever in today’s digital world. This article introduces the key concepts and best practices.',
        link: '#'
      }
    ];
  
    return (
    <main>
    <div className="overflow-hidden">
    <Navbars1/>
      <section className="bg-[rgb(187,192,195)] dark:bg-gray-900 text-black dark:text-white py-10 px-4 md:px-8">
        <div className="container mx-auto font-logo">
          <h2 className="max-md:text-4xl md:text-4xl font-bold mb-6 underline underline-offset-2 text-blue-600 md:mt-20 max-md:mt-36"> Articles</h2>
          <p className="max-md:text-2xl md:text-2xl mb-6">
            Here you can find my latest articles on various topics in software engineering and technology. I hope you find them insightful and informative.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="max-md:text-2xl md:text-2xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{article.date}</p>
                <p className="max-md:text-2xl md:text-2xl mb-4">{article.excerpt}</p>
                <Link href={article.link} className="text-blue-600 hover:underline">
                  Read more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Footer/>
      </div>
      </div>
      </main>
    );
  };
  
  
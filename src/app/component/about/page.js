import Navbars1 from "../../component/Navbars1/page";
import Footer from "../../component/Footer/page";
export const metadata={
    title:"About Page",
    description:"About Page description",
};
export default function About(){
    return (
        <main>
            <div className="overflow-hidden">
                <Navbars1 />
                <section className="bg-[rgb(187,192,195)] dark:bg-gray-900 text-black dark:text-white py-10 px-4 md:px-8">
                    <div className="container mx-auto">
                        <h2 className="mt-20 text-4xl font-bold mb-6 underline underline-offset-2 text-white font-logo">About Me</h2>
                        <p className="text-lg mb-4">
                            Hello! I am Mukesh Ravidas a passionate software engineering student currently pursuing my degree at the National Institute of Technology, Warangal. With a solid foundation in computer science principles, I am driven by a curiosity to understand how things work and a desire to create innovative solutions that can have a meaningful impact.
                        </p>

                        <h3 className="text-3xl font-semibold mt-8 mb-4 font-logo underline-offset-2 text-blue-500">My Journey</h3>
                        <p className="text-lg mb-4 font-logo">
                            My journey into the world of software engineering began with a simple curiosity about how websites and applications are built. This curiosity quickly turned into a passion as I started learning various programming languages and technologies. Through my coursework and personal projects, I have developed a strong understanding of coding, software development methodologies, and best practices.
                        </p>

                        <h3 className="text-3xl font-semibold mt-8 mb-4 font-logo underline-offset-2 text-blue-500">Skills and Expertise</h3>
                        <ul className="list-disc list-inside text-lg space-y-2 font-logo">
                            <li><strong>Programming Languages </strong> Proficient in Python, Java, JavaScript, and C++.</li>
                            <li><strong>Web Development:</strong> HTML CSS JavaScript php React.js and Node.js.</li>
                            <li><strong>Framework:</strong> NextJs ExpressJs Bootstrap.</li>
                            <li><strong>Mobile Development:</strong> Skilled in developing Android applications using Flutter.</li>
                            <li><strong>Database Management:</strong> Knowledgeable in SQL MySQL and MongoDB.</li>
                            <li><strong>Version Control:</strong> Git and GitHub for version control and collaboration.</li>
                            <li><strong>Problem Solving:</strong> Strong analytical and problem-solving skills honed through competitive programming and algorithm challenges.</li>
                        </ul>

                        <h3 className="text-3xl font-semibold mt-8 mb-4 font-logo underline-offset-2 text-blue-500">Goals and Aspirations</h3>
                        <p className="text-lg mb-4 font-logo">
                            As I continue my journey in software engineering, my goal is to further deepen my knowledge and expertise in this field. I am particularly interested in exploring areas such as MERN Full Stack Web Development, ML/Data Science. I aspire to work on cutting-edge technologies and contribute to projects that can positively impact society.
                        </p>

                        <p className="text-lg mt-4 font-logo text-yellow-900">
                            Thank you for visiting my portfolio. I am excited to share my journey with you and look forward to connecting with like-minded individuals and professionals in the field of software engineering.
                        </p>
                    </div>
                </section>
                <div className="max-md:mt-80 md:mt-40 ">
                    <Footer />
                </div>
            </div>
        </main>
    );
};


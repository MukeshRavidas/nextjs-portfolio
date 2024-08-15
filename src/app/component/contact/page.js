"use client"
import Navbars1 from "../../component/Navbars1/page";
import Footer from "../../component/Footer/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();
    const handleMessage = async () => {
        if (!name || !email || !message) {
            setError(true);
            return false;
        }
        else {
            setError(false);
        }
        let result = await fetch("http://localhost:3000/api/message", {
            method: "POST",
            body: JSON.stringify({ name, email, message })
        });
        result = await result.json();
        if (result.success) {
            alert("Messages successfully send");
            router.push("/")
        }
        else {
            alert("Failed");
        }
    }
    return (
        <main>
            <div className="overflow-hidden">
                <Navbars1 />
                <section className="bg-[rgb(187,192,195)] dark:bg-gray-900 text-black dark:text-white py-10 px-4 md:px-8">
                    <div className="container mx-auto md:font-logo max-md:font-logo ">
                        <h2 className="max-md:text-6xl max-md:font-bold md:text-4xl font-bold mb-6 underline underline-offset-2 text-blue-700 max-md:mt-40 md:mt-20">Contact Me</h2>
                        <p className="mb-6 text-2xl max-md:text-4xl">
                            I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="max-md:text-4xl block text-lg font-medium mb-2" htmlFor="name">Name</label>
                                <input
                                    value={name} onChange={(event) => setName(event.target.value)}
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                />
                                {
                                    error && !name && <span className="auto-rows-max text-red-600 text-1xl">please enter valid name</span>
                                }

                            </div>

                            <div>
                                <label className="max-md:text-4xl block text-lg font-medium mb-2" htmlFor="email">Email</label>
                                <input
                                    value={email} onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                />
                                {
                                    error && !email && <span className="auto-rows-max text-red-600 text-1xl">please enter valid email</span>
                                }
                            </div>

                            <div>
                                <label className="max-md:text-4xl block text-lg font-medium mb-2" htmlFor="message">Message</label>
                                <textarea
                                    value={message} onChange={(event) => setMessage(event.target.value)}
                                    id="message"
                                    className="w-full px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                    rows="5"
                                />
                                {
                                    error && !message && <span className="auto-rows-max text-red-600 text-1xl">please enter valid message</span>
                                }
                            </div>

                            <div>
                                <button onClick={handleMessage} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                    Send Message
                                </button>
                            </div>
                        </div>

                        <div className="mt-10 max-md:mt-36">
                            <h3 className="max-md:text-4xl md:text-3xl font-semibold mb-4">Get in Touch</h3>
                            <p className="max-md:text-3xl md:text-2xl mb-2 underline underline-offset-2 text-blue-600"><Link href="mukeshravidasnit86@gmail.com"><strong>Email:</strong> mukeshravidasnit86@gmail.com</Link></p>
                            <p className="text-lg mb-2 md:text-1xl max-md:text-2xl"><strong>Phone:</strong> (123) 456-7890</p>
                            <p className="text-2xl max-md:text-4xl"><strong>Location:</strong> NIT Warangal, India</p>
                        </div>
                    </div>
                </section>
                <div className="max-md:mt-80">
                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default Contact;

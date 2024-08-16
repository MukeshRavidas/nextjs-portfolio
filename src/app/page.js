import Image from 'next/image';
import Navbars1 from './component/Navbars1/page';
import pic from './assets/mukesh_pic.jpg';
import Footer from './component/Footer/page';

export default function Home() {
  return (
    <main>
        <div className="overflow-hidden">
          <Navbars1 />
          <div className="flex flex-col md:flex-row items-center my-20 mb-10 md:space-x-10">
            <div className="max-md:mt-36 mx-10 md:mx-40 mb-10 md:mb-0 mt-20">
              <Image
                src={pic.src}
                width={150}
                height={150}
                alt="avatar"
                className="bg-white relative inline-block h-[300px] w-[300px] rounded-full object-cover object-center" />
              <h2 className="text-[rgb(7,34,50)] font-logo max-md:mt-5 md:mt-5 md:text-1xl max-md:text-1xl">(MERN Full Stack Developer,
                ML/Data Scie.)</h2>
            </div>
            <div className="text-center md:text-left mt-20">
              <p className="font-semibold font-logo text-xl md:text-3xl mb-2 max-md:text-2xl">
                Welcome to my portfolio! I am Mukesh Ravidas.
              </p>
              <p className="max-md:text-2xl font-semibold font-logo text-xl md:text-3xl mb-2">
                a dedicated software engineering student with a passion
              </p>
              <p className="max-md:text-2xl font-semibold font-logo text-xl md:text-3xl mb-2">
                for developing innovative and efficient solutions.
              </p>
              <p className="max-md:text-2xl font-semibold font-logo text-xl md:text-3xl mb-2">
                Currently pursuing my degree MCA at NIT Warangal.
              </p>
              <p className="max-md:text-2xl font-semibold font-logo text-xl md:text-3xl mb-2">
                I have gained a solid foundation in computer science
              </p>
              <p className="max-md:text-2xl font-semibold font-logo text-xl md:text-3xl mb-2">
                principles coding and software development methodologies.
              </p>
            </div>
          </div>
          <div className="max-md:mt-80 md:mt-40 ">
            <Footer />
          </div>
        </div>
      </main>
  );
  
}

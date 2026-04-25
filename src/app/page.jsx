import Navbar from "@/components/Navbar";
 import Banner from "@/components/Banner"; 
 import Image from "next/image";
  import About from "@/components/About";
   import Techskills from "@/components/Techskills"; 
   import Projects from "@/components/Projects"; 
   import Contact from "@/components/Contact";
    import Certificates from "@/components/Certificates"; 
    import Educations from "@/components/Educations";
     import Footer from "@/components/Footer"; 
     export default function Home() 
     { 
        return ( 
        <> 
        <Navbar ></Navbar> 
        <main className="max-w-[1152px] mx-auto px-4 mx-4  text-primary"> 
          
            <Banner></Banner> 
            <About></About> 
            <Educations></Educations> 
            <Techskills></Techskills> 
            <Projects></Projects> 
            <Certificates></Certificates> 
            <Contact></Contact> 
            <Footer></Footer> 
            
            </main> 
            </> 
            ); 
        }
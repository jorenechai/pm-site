import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with Organic Blob Shapes */}
      <div className="fixed inset-0 z-0">
        {/* Light white base with subtle blue tints */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50"></div>
        
        {/* Organic Blob Shapes */}
        {/* Large teal blob - top left */}
        <div 
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#2A9D8F]/20 to-[#2A9D8F]/10 blur-2xl animate-pulse"
          style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }}
        ></div>
        
        {/* Medium gold blob - top right */}
        <div 
          className="absolute -top-10 right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-[#E9C46A]/25 to-[#E9C46A]/12 blur-xl animate-pulse delay-1000"
          style={{ borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%' }}
        ></div>
        
        {/* Large navy blob - center right */}
        <div 
          className="absolute top-[30%] -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-[#0B1F3A]/12 to-[#2A9D8F]/15 blur-3xl animate-pulse delay-500"
          style={{ borderRadius: '61% 39% 48% 52% / 64% 55% 45% 36%' }}
        ></div>
        
        {/* Medium teal blob - middle left */}
        <div 
          className="absolute top-[45%] -left-24 w-[420px] h-[420px] bg-gradient-to-tr from-[#2A9D8F]/18 to-[#E9C46A]/10 blur-2xl animate-pulse delay-700"
          style={{ borderRadius: '47% 53% 36% 64% / 59% 38% 62% 41%' }}
        ></div>
        
        {/* Small gold blob - bottom left */}
        <div 
          className="absolute bottom-[20%] left-[15%] w-[320px] h-[320px] bg-gradient-to-br from-[#E9C46A]/22 to-[#E9C46A]/8 blur-xl animate-pulse delay-300"
          style={{ borderRadius: '73% 27% 46% 54% / 38% 56% 44% 62%' }}
        ></div>
        
        {/* Large teal blob - bottom right */}
        <div 
          className="absolute -bottom-28 -right-20 w-[480px] h-[480px] bg-gradient-to-tl from-[#2A9D8F]/20 to-[#0B1F3A]/8 blur-2xl animate-pulse delay-1000"
          style={{ borderRadius: '55% 45% 68% 32% / 49% 67% 33% 51%' }}
        ></div>
        
        {/* Small navy blob - center */}
        <div 
          className="absolute top-[55%] left-[45%] w-[350px] h-[350px] bg-gradient-to-br from-[#0B1F3A]/10 to-[#2A9D8F]/12 blur-3xl animate-pulse delay-200"
          style={{ borderRadius: '42% 58% 55% 45% / 61% 49% 51% 39%' }}
        ></div>
        
        {/* Subtle animated glass orbs for additional depth */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#2A9D8F]/6 to-[#E9C46A]/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-[#E9C46A]/5 to-[#2A9D8F]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content with glassmorphism containers */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

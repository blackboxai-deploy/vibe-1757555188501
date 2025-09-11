import HelloWorldCard from "@/components/hello-world-card";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      
      <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-500">
            Welcome to Next.js
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
            A modern, fast, and beautiful Hello World application showcasing the power of React, 
            Next.js, and Tailwind CSS working together seamlessly.
          </p>
        </div>
        
        <HelloWorldCard />
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg dark:shadow-slate-900/20 transition-all duration-500">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-500">Next.js</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">React Framework</p>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 transition-colors duration-500"></div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-500">TypeScript</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">Type Safety</p>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 transition-colors duration-500"></div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-500">Tailwind</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">CSS Framework</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelloWorldCard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("Hello, World!");

  const greetings = [
    "Hello, World!",
    "¡Hola, Mundo!",
    "Bonjour, le Monde!",
    "Hallo, Welt!",
    "こんにちは、世界！",
    "안녕하세요, 세계!",
    "Привет, Мир!",
    "Olá, Mundo!",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const changeGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    setGreeting(greetings[randomIndex]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-2xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-3xl dark:hover:shadow-slate-900/50 transition-all duration-500 hover:scale-105">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4 transition-all duration-500">
            {greeting}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-300 font-medium transition-colors duration-500">
            Welcome to this beautiful Next.js application
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-100 dark:border-blue-800 transition-all duration-500">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1 transition-colors duration-500">Current Time</p>
              <p className="text-base text-gray-700 dark:text-gray-200 font-mono transition-colors duration-500">
                {formatTime(currentTime)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-100 dark:border-green-800 transition-all duration-500">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2 transition-colors duration-500">Technology Stack</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 transition-colors duration-500">
                <li>• Next.js 15</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• shadcn/ui</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-100 dark:border-purple-800 transition-all duration-500">
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 transition-colors duration-500">Features</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 transition-colors duration-500">
                <li>• Responsive Design</li>
                <li>• Real-time Clock</li>
                <li>• Interactive UI</li>
                <li>• Dark/Light Theme</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={changeGreeting}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Change Greeting
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-gray-100 dark:border-gray-700 transition-colors duration-500">
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">
              Built with ❤️ using modern web technologies
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Zap, 
  Brain, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter 
} from "lucide-react";
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 py-4 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">About</Button>
          </nav>
          <Auth />
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ultimate AI Content Generator
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Revolutionize your social media presence with our AI-powered content creation tools.
            </p>
            <Button size="lg" className="bg-[#E98206] hover:bg-[#c26c05] text-white">
              Get Started
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Rocket className="w-10 h-10 text-[#E98206]" />}
                title="Increased Efficiency"
                description="Automate workflows and streamline processes for maximum productivity."
              />
              <FeatureCard 
                icon={<Zap className="w-10 h-10 text-[#E98206]" />}
                title="Accelerated Growth"
                description="Leverage cutting-edge tools to drive innovation and scale your content."
              />
              <FeatureCard 
                icon={<Brain className="w-10 h-10 text-[#E98206]" />}
                title="AI Powered"
                description="Generate content on the go with simple AI-driven suggestions."
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Supported Platforms</h2>
            <div className="flex justify-center space-x-8">
              <Instagram size={40} />
              <Youtube size={40} />
              <Linkedin size={40} />
              <Twitter size={40} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Content?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators who are already using our AI-powered platform.
            </p>
            <Button size="lg" className="bg-[#E98206] hover:bg-[#c26c05] text-white">
              Start Creating Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo />
            <div className="mt-4 md:mt-0">
              <p>&copy; 2024 Content Flash LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

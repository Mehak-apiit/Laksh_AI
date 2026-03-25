import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { ArrowRight, Users, Zap, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - EXACT repo design */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            AI-Powered <span className="text-yellow-300">Career</span> Coach
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Get instant career advice, resume analysis, and personalized job recommendations 
            powered by cutting-edge AI. Land your dream job faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Free Trial
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Happy Users</div>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">$120K</div>
              <div className="text-blue-100">Avg Salary Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Everything You Need to <span className="text-blue-600">Level Up</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI analyzes your resume, suggests personalized career paths, and coaches you to your dream job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center group hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <Zap className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Resume Analysis</h3>
              <p className="text-gray-600 mb-6">Get instant feedback on your resume with actionable improvements.</p>
              <ArrowRight className="w-6 h-6 text-blue-600 mx-auto group-hover:translate-x-2 transition" />
            </Card>
            
            <Card className="p-8 text-center group hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Job Recommendations</h3>
              <p className="text-gray-600 mb-6">Personalized job matches based on your skills and experience.</p>
              <ArrowRight className="w-6 h-6 text-green-600 mx-auto group-hover:translate-x-2 transition" />
            </Card>
            
            <Card className="p-8 text-center group hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Career Chat</h3>
              <p className="text-gray-600 mb-6">Real-time AI career coaching with conversation history.</p>
              <ArrowRight className="w-6 h-6 text-purple-600 mx-auto group-hover:translate-x-2 transition" />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
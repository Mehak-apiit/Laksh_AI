import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { profileAPI, aiAPI, resumeAPI, chatAPI } from '../../lib/api';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Upload, Zap, MessageCircle, Award, User } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(user);
  const [stats, setStats] = useState({
    resumes: 0,
    aiChecks: 0,
    chats: 0,
  });

  useEffect(() => {
    // Fetch profile
    profileAPI.get().then(({ data }) => setProfile(data));

    // (Optional) Fetch stats from backend later
    // For now dummy values
    setStats({
      resumes: 2,
      aiChecks: 5,
      chats: 3,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Welcome back, {profile?.name}!
              </h1>
              <p className="text-xl opacity-90">
                Here's your career dashboard
              </p>
            </div>
            <Button onClick={logout} variant="secondary" className="self-start md:self-end">
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="p-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-12">

          {/* Skills */}
          <Card className="p-8 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {profile?.skills?.length || 0}
            </h3>
            <p className="text-gray-600">Skills Listed</p>
          </Card>

          {/* Resumes */}
          <Card className="p-8 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {stats.resumes}
            </h3>
            <p className="text-gray-600">Resumes Analyzed</p>
          </Card>

          {/* AI Checks */}
          <Card className="p-8 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {stats.aiChecks}
            </h3>
            <p className="text-gray-600">AI Checks</p>
          </Card>

          {/* Chats */}
          <Card className="p-8 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {stats.chats}
            </h3>
            <p className="text-gray-600">Chat Sessions</p>
          </Card>

        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Upload Resume</h3>
            <p className="text-gray-600 mb-4">
              Analyze your resume using AI
            </p>
            <Button>Upload</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">AI Career Tips</h3>
            <p className="text-gray-600 mb-4">
              Get personalized suggestions
            </p>
            <Button>Try Now</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">Chat Assistant</h3>
            <p className="text-gray-600 mb-4">
              Ask career-related questions
            </p>
            <Button>Start Chat</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
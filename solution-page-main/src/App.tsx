import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Code, Zap, Users, Heart, GraduationCap, ShoppingCart, Bot, Globe, Coins, Gamepad2, ChevronDown, ChevronUp, Star, Clock, MessageSquare, Building2, Target, TrendingUp } from 'lucide-react'

function App() {
  const [promptText, setPromptText] = useState('')
  const [showFloatingPrompt, setShowFloatingPrompt] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('Productivity Tools')

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowFloatingPrompt(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePromptSubmit = () => {
    if (promptText.trim()) {
      // Redirect to AI builder with prompt
      console.log('Starting build with prompt:', promptText)
    }
  }

  const handleTryPrompt = (prompt: string) => {
    setPromptText(prompt)
    // Scroll to hero section
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  const categories = [
    { name: 'Productivity Tools', active: true, color: 'blue' },
    { name: 'Health & Wellness', active: false, color: 'pink' },
    { name: 'Education', active: false, color: 'green' },
    { name: 'E-Commerce', active: false, color: 'orange' },
    { name: 'AI Tools', active: false, color: 'purple' },
    { name: 'Community & Social', active: false, color: 'indigo' },
    { name: 'Business & Enterprise', active: false, color: 'gray' },
    { name: 'Games', active: false, color: 'red' },
    { name: 'Personal Development', active: false, color: 'yellow' },
    { name: 'Web3 & Blockchain', active: false, color: 'cyan' },
    { name: 'Entertainment', active: false, color: 'violet' },
  ]

  const getColorClasses = (color: string, active: boolean) => {
    const colorMap = {
      blue: active ? 'bg-blue-100 text-blue-700 border-blue-200 shadow-blue-100' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100',
      pink: active ? 'bg-pink-100 text-pink-700 border-pink-200 shadow-pink-100' : 'bg-pink-50 text-pink-600 hover:bg-pink-100 border-pink-100',
      green: active ? 'bg-green-100 text-green-700 border-green-200 shadow-green-100' : 'bg-green-50 text-green-600 hover:bg-green-100 border-green-100',
      orange: active ? 'bg-orange-100 text-orange-700 border-orange-200 shadow-orange-100' : 'bg-orange-50 text-orange-600 hover:bg-orange-100 border-orange-100',
      purple: active ? 'bg-purple-100 text-purple-700 border-purple-200 shadow-purple-100' : 'bg-purple-50 text-purple-600 hover:bg-purple-100 border-purple-100',
      indigo: active ? 'bg-indigo-100 text-indigo-700 border-indigo-200 shadow-indigo-100' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-indigo-100',
      gray: active ? 'bg-gray-100 text-gray-700 border-gray-200 shadow-gray-100' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-100',
      red: active ? 'bg-red-100 text-red-700 border-red-200 shadow-red-100' : 'bg-red-50 text-red-600 hover:bg-red-100 border-red-100',
      yellow: active ? 'bg-yellow-100 text-yellow-700 border-yellow-200 shadow-yellow-100' : 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100 border-yellow-100',
      cyan: active ? 'bg-cyan-100 text-cyan-700 border-cyan-200 shadow-cyan-100' : 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100 border-cyan-100',
      violet: active ? 'bg-violet-100 text-violet-700 border-violet-200 shadow-violet-100' : 'bg-violet-50 text-violet-600 hover:bg-violet-100 border-violet-100',
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const solutions = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Wellness & Mindfulness Tools",
      description: "Build apps that support emotional check-ins, habit tracking, and self-care routines.",
      example: "MindfulDaily — a gratitude journal app built in 20 mins",
      prompt: "Build a gratitude journal app with reminders and mood tracking",
      category: "Health & Wellness"
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Productivity & Task Management",
      description: "Create powerful tools to organize work, manage projects, and boost efficiency.",
      example: "TaskFlow — a team collaboration platform built in 15 mins",
      prompt: "Build a task management app with team collaboration and time tracking",
      category: "Productivity Tools"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-500" />,
      title: "Educational Platforms",
      description: "Develop learning management systems, quiz apps, and educational tools.",
      example: "LearnQuick — an interactive quiz platform built in 25 mins",
      prompt: "Build an educational quiz app with progress tracking and leaderboards",
      category: "Education"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      title: "E-Commerce Solutions",
      description: "Launch online stores, marketplaces, and commerce platforms quickly.",
      example: "ShopEasy — a marketplace app built in 30 mins",
      prompt: "Build an e-commerce store with product catalog and shopping cart",
      category: "E-Commerce"
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Applications",
      description: "Integrate AI capabilities into your apps for smart automation and insights.",
      example: "ChatBot Pro — an AI customer service bot built in 20 mins",
      prompt: "Build an AI chatbot for customer support with knowledge base integration",
      category: "AI Tools"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Community & Social Apps",
      description: "Connect people through forums, social networks, and community platforms.",
      example: "ConnectHub — a community forum built in 25 mins",
      prompt: "Build a community forum with user profiles and discussion threads",
      category: "Community & Social"
    },
    {
      icon: <Building2 className="w-8 h-8 text-gray-600" />,
      title: "Business & Enterprise Tools",
      description: "Create CRM systems, inventory management, and enterprise-grade applications.",
      example: "BizFlow — a CRM dashboard built in 28 mins",
      prompt: "Build a CRM system with lead tracking and sales pipeline management",
      category: "Business & Enterprise"
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-red-500" />,
      title: "Games & Interactive Entertainment",
      description: "Develop engaging games, puzzles, and interactive entertainment experiences.",
      example: "PuzzleMaster — a brain training game built in 22 mins",
      prompt: "Build a puzzle game with levels, scoring, and achievements",
      category: "Games"
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-600" />,
      title: "Personal Development Apps",
      description: "Build goal tracking, habit formation, and self-improvement applications.",
      example: "GoalAchiever — a personal growth tracker built in 18 mins",
      prompt: "Build a goal tracking app with habit formation and progress visualization",
      category: "Personal Development"
    }
  ]

  const filteredSolutions = activeCategory === 'Productivity Tools' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory)

  const userHighlights = [
    {
      name: "TaskMaster Pro",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      prompt: "Build a project management tool with Kanban boards",
      time: "Built in 18 minutes",
      rating: 5,
      category: "Productivity Tools"
    },
    {
      name: "FitTracker",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      prompt: "Create a fitness tracking app with workout logging",
      time: "Built in 22 minutes",
      rating: 5,
      category: "Health & Wellness"
    },
    {
      name: "Recipe Finder",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      prompt: "Build a recipe app with ingredient search and meal planning",
      time: "Built in 15 minutes",
      rating: 4,
      category: "Entertainment"
    },
    {
      name: "SalesHub CRM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      prompt: "Build a CRM system for small business lead management",
      time: "Built in 26 minutes",
      rating: 5,
      category: "Business & Enterprise"
    },
    {
      name: "Memory Quest",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      prompt: "Create a memory training game with progressive difficulty",
      time: "Built in 19 minutes",
      rating: 4,
      category: "Games"
    },
    {
      name: "HabitBuilder",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      prompt: "Build a habit tracking app with streak counters and rewards",
      time: "Built in 21 minutes",
      rating: 5,
      category: "Personal Development"
    }
  ]

  const userProfiles = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  ]

  const faqs = [
    {
      question: "What types of apps can I build?",
      answer: "You can build virtually any type of web application - from simple landing pages to complex SaaS platforms, e-commerce stores, social networks, productivity tools, games, business applications, and more. Our AI understands your requirements and creates production-ready code."
    },
    {
      question: "Can I publish or monetize them?",
      answer: "Absolutely! All apps you build are yours to own, modify, and monetize. You can deploy them anywhere, sell them, or use them for your business. There are no restrictions on commercial use."
    },
    {
      question: "Is this free to use?",
      answer: "We offer a free tier that lets you build and experiment with apps. For advanced features, custom domains, and priority support, we have affordable paid plans starting at just $9/month."
    },
    {
      question: "What makes ChatAndBuild different?",
      answer: "Unlike traditional no-code tools, ChatAndBuild uses conversational AI to understand exactly what you want to build. You describe your idea in plain English, and we generate clean, production-ready code that you can customize and own completely."
    },
    {
      question: "How can I find tutorial videos and build guide for using ChatAndBuild?",
      answer: (
        <>
          Please check our{' '}
          <a 
            href="https://www.notion.so/20dd9a5839058036b8becb17d6572b4c?v=20dd9a583905818a8dae000c584cd9be" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            wiki page
          </a>
          {' '}for tutorial videos and build guide.
        </>
      )
    }
  ]

  const socialLinks = [
    {
      name: 'Slack',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
        </svg>
      ),
      url: 'https://slack.com/chatandbuild',
      color: 'hover:text-purple-400'
    },
    {
      name: 'Discord',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      url: 'https://discord.gg/chatandbuild',
      color: 'hover:text-indigo-400'
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: 'https://x.com/chatandbuild',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://instagram.com/chatandbuild',
      color: 'hover:text-pink-400'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Prompt Box */}
      {showFloatingPrompt && (
        <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-md">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="font-semibold text-gray-900">Quick Start</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Describe what you want to build..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handlePromptSubmit()}
            />
            <button
              onClick={handlePromptSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Build
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Build What Matters.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fast.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              From side projects to startups, see what's possible with ChatAndBuild.
            </p>

            {/* Prompt Input */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Describe what you want to build..."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handlePromptSubmit()}
                />
                <button
                  onClick={handlePromptSubmit}
                  className="absolute right-2 top-2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                >
                  Start Building
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Enhanced Filter Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category.name)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                      activeCategory === category.name
                        ? `${getColorClasses(category.color, true)} shadow-lg transform scale-105`
                        : `${getColorClasses(category.color, false)} hover:transform hover:scale-105`
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* User Statistics Section - RIGHT AFTER CATEGORY FILTERS */}
            <div className="mb-16 py-12">
              <div className="max-w-4xl mx-auto">
                {/* Profile Images Row */}
                <div className="flex justify-center items-center mb-6">
                  <div className="flex -space-x-2">
                    {userProfiles.map((profile, index) => (
                      <img
                        key={index}
                        src={profile}
                        alt={`User ${index + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200"
                        style={{ zIndex: userProfiles.length - index }}
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform duration-200">
                      +500K
                    </div>
                  </div>
                </div>

                {/* Statistics Text */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      500,000+
                    </span>{' '}
                    users are building with ChatAndBuild
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Join thousands of creators, entrepreneurs, and developers building the future
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600 mb-1">2M+</div>
                      <div className="text-sm text-gray-600">Apps Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-600 mb-1">15 min</div>
                      <div className="text-sm text-gray-600">Avg Build Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-600 mb-1">98%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Idea
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're building for productivity, wellness, education, entertainment, business, or personal growth,
              ChatAndBuild has the tools to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-200">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Example</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">{solution.example}</p>
                </div>
                <div className="mb-6 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Prompt</span>
                  </div>
                  <code className="text-sm text-gray-800 font-mono">
                    {solution.prompt}
                  </code>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleTryPrompt(solution.prompt)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm transform hover:scale-105"
                  >
                    Try This Prompt
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                    See More Apps
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real apps built by real people in minutes, not months. From productivity tools to games and business solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userHighlights.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="relative overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                      {app.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(app.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {app.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    "{app.prompt}"
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{app.time}</span>
                  </div>
                  <button
                    onClick={() => handleTryPrompt(app.prompt)}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm transform hover:scale-105"
                  >
                    Try a Similar Prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ChatAndBuild
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <div className="text-gray-600 leading-relaxed">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your idea is one sentence away from becoming real.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Describe it. Build it. Done.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="Describe your next big idea..."
                className="w-full px-6 py-4 text-lg rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/20 transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handlePromptSubmit()}
              />
              <button
                onClick={handlePromptSubmit}
                className="absolute right-2 top-2 px-6 py-2 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-bold flex items-center gap-2"
              >
                Start Building Now
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Our Journey Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Follow Our Journey
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community and stay updated with the latest features, tips, and success stories from builders around the world.
          </p>
          
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-gray-400 transition-all duration-200 hover:bg-gray-700 transform hover:scale-110 ${social.color}`}
                title={`Follow us on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">ChatAndBuild</span>
            </div>
            <p className="text-gray-400 mb-8">
              Build what matters. Fast.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  ChartPie, Search, Sun, Moon, TrendingUp, 
  BarChart3, Users, Shield, ExternalLink
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell, PieChart, Pie
} from "recharts";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Improved company data with more metrics
  const companyData = {
    name: "NutriTech",
    initials: "NT",
    category: "Health Technology",
    funding: "$4.2M",
    growthRate: 82,
    teamSize: 38,
    riskScore: "A+",
    valuation: "$18.5M",
    foundedYear: 2021,
    location: "San Francisco, CA",
    investors: ["Sequoia Capital", "Andreessen Horowitz", "Y Combinator"],
    description: "NutriTech is revolutionizing health technology with AI-powered nutrition analysis. The company's flagship product analyzes food images to provide detailed nutritional information and personalized dietary recommendations. Founded in 2021 by a team of dietitians and machine learning engineers, NutriTech has shown exceptional growth in the healthcare technology sector.",
    competitors: ["HealthAI", "NutriScan", "FoodLens"],
    traction: [
      { month: 'Jan', users: 2000 },
      { month: 'Feb', users: 3000 },
      { month: 'Mar', users: 5000 },
      { month: 'Apr', users: 7800 },
      { month: 'May', users: 10500 },
      { month: 'Jun', users: 14200 }
    ],
    revenueStreams: [
      { name: 'Enterprise', value: 45 },
      { name: 'Consumer', value: 30 },
      { name: 'Healthcare', value: 25 }
    ]
  };

  const recentSearches = ["TechGrowth", "Finnovate", "EcoSolutions", "MedTech Innovations"];

  // Metrics data with interpretations
  const metrics = [
    { 
      name: "Funding", 
      value: companyData.funding, 
      icon: <BarChart3 className="h-5 w-5" />,
      interpretation: "Solid early-stage funding" 
    },
    { 
      name: "Growth", 
      value: `${companyData.growthRate}%`, 
      icon: <TrendingUp className="h-5 w-5" />,
      interpretation: "Exceptional month-over-month growth"  
    },
    { 
      name: "Team", 
      value: companyData.teamSize, 
      icon: <Users className="h-5 w-5" />,
      interpretation: "Well-staffed for current stage" 
    },
    { 
      name: "Risk", 
      value: companyData.riskScore, 
      icon: <Shield className="h-5 w-5" />,
      interpretation: "Very low investment risk" 
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  // Apply dark mode on component mount if user preference is dark
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header - Glass Morphism Effect */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <ChartPie className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              StartupInsight
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {[
                { id: "dashboard", name: "Dashboard" },
                { id: "watchlist", name: "Watchlist" },
                { id: "predictions", name: "AI Predictions" },
                { id: "competitors", name: "Competitor Analysis" },
                { id: "settings", name: "Settings" }
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item.id);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === item.id 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200"
            onClick={toggleDarkMode}
          >
            {darkMode ? 
              <Sun className="h-5 w-5 text-yellow-500" /> : 
              <Moon className="h-5 w-5 text-blue-600" />
            }
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search Section */}
          <Card className="md:col-span-1 rounded-xl overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 dark:border-slate-700">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <CardTitle className="text-xl font-bold">
                Startup Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <Input 
                    placeholder="Search for a startup..." 
                    className="pl-10 border-2 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white h-12 rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute top-3.5 left-3 h-5 w-5 text-gray-400" />
                </div>
                
                <div className="flex space-x-2">
                  <Select value={filterValue} onValueChange={setFilterValue}>
                    <SelectTrigger className="h-10 border-2 border-gray-200 dark:border-slate-600 rounded-lg flex-1">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="health">Health Tech</SelectItem>
                      <SelectItem value="fintech">FinTech</SelectItem>
                      <SelectItem value="ai">AI & Machine Learning</SelectItem>
                      <SelectItem value="saas">SaaS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                  onClick={handleSearch}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    "Analyze"
                  )}
                </Button>

                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Recent Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 rounded-full text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors flex items-center space-x-1"
                        onClick={() => setSearchQuery(search)}
                      >
                        <Search className="h-3 w-3" />
                        <span>{search}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="md:col-span-2 rounded-xl overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 dark:border-slate-700">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <CardTitle className="text-xl font-bold flex items-center justify-between">
                <span>Company Details</span>
                <span className="text-xs font-normal bg-white/20 px-2 py-1 rounded-full">
                  Founded {companyData.foundedYear}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Company Header */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  {companyData.initials}
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white flex items-center">
                    {companyData.name}
                    <a href="#" className="ml-2 text-blue-500 hover:text-blue-600">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">
                      {companyData.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                      {companyData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-600"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{metric.name}</span>
                      <span className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1">
                        {metric.icon}
                      </span>
                    </div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">{metric.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{metric.interpretation}</div>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* User Growth Chart */}
                <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                  <CardHeader className="py-3 px-4 bg-gray-50 dark:bg-slate-700/50 border-b border-gray-200 dark:border-gray-700">
                    <CardTitle className="text-sm font-medium">User Growth</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={companyData.traction}
                        margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Revenue Distribution Chart */}
                <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                  <CardHeader className="py-3 px-4 bg-gray-50 dark:bg-slate-700/50 border-b border-gray-200 dark:border-gray-700">
                    <CardTitle className="text-sm font-medium">Revenue Streams</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={companyData.revenueStreams}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {companyData.revenueStreams.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Company Description */}
              <div className="bg-gray-50 dark:bg-slate-700/30 rounded-xl p-5 mb-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Overview</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  {companyData.description}
                </p>
              </div>

              {/* Additional Data - Investors and Competitors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Key Investors</h4>
                  <div className="space-y-2">
                    {companyData.investors.map((investor, idx) => (
                      <div key={idx} className="flex items-center py-2 px-3 bg-white dark:bg-slate-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs mr-3">
                          {investor.substring(0, 2)}
                        </div>
                        <span className="text-sm font-medium text-gray-800 dark:text-white">{investor}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Market Position</h4>
                  <div className="space-y-3">
                    {companyData.competitors.map((competitor, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-700 dark:text-gray-300">{competitor}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {idx === 0 ? "Primary" : idx === 1 ? "Secondary" : "Emerging"}
                          </span>
                        </div>
                        <Progress 
                          value={100 - idx * 25} 
                          className="h-2 bg-gray-100 dark:bg-gray-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Briefcase, Activity, Target, ChevronRight, ArrowUp, ArrowDown, Bell, Search, Settings } from 'lucide-react';

export default function ConsultingDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('Q4 2024');

  // Enhanced data
  const revenueData = [
    { month: 'Jan', itServices: 145000, digitalMarketing: 98000, total: 243000 },
    { month: 'Feb', itServices: 162000, digitalMarketing: 105000, total: 267000 },
    { month: 'Mar', itServices: 158000, digitalMarketing: 118000, total: 276000 },
    { month: 'Apr', itServices: 178000, digitalMarketing: 125000, total: 303000 },
    { month: 'May', itServices: 185000, digitalMarketing: 142000, total: 327000 },
    { month: 'Jun', itServices: 198000, digitalMarketing: 156000, total: 354000 },
  ];

  const performanceData = [
    { month: 'Jan', target: 250000, actual: 243000 },
    { month: 'Feb', target: 260000, actual: 267000 },
    { month: 'Mar', target: 270000, actual: 276000 },
    { month: 'Apr', target: 280000, actual: 303000 },
    { month: 'May', target: 290000, actual: 327000 },
    { month: 'Jun', target: 300000, actual: 354000 },
  ];

  const topClients = [
    { name: 'Enterprise Solutions Corp', revenue: '$245K', growth: '+18%', status: 'active' },
    { name: 'Global Tech Industries', revenue: '$198K', growth: '+12%', status: 'active' },
    { name: 'Digital Ventures Ltd', revenue: '$167K', growth: '+25%', status: 'active' },
    { name: 'Innovation Partners', revenue: '$142K', growth: '+8%', status: 'active' },
    { name: 'Future Systems Inc', revenue: '$128K', growth: '+15%', status: 'active' },
  ];

  const projectMetrics = [
    { service: 'Cloud Infrastructure', projects: 12, revenue: 456000, margin: '42%' },
    { service: 'Cybersecurity Solutions', projects: 8, revenue: 384000, margin: '38%' },
    { service: 'SEO & SEM Campaigns', projects: 15, revenue: 298000, margin: '45%' },
    { service: 'Social Media Management', projects: 10, revenue: 186000, margin: '48%' },
    { service: 'Data Analytics', projects: 6, revenue: 245000, margin: '35%' },
  ];

  const kpiMetrics = [
    { 
      title: 'Total Revenue', 
      value: '$1.78M', 
      change: '+23.5%', 
      trend: 'up',
      subtitle: 'vs. last period',
      icon: DollarSign, 
      gradient: 'from-blue-500 to-blue-600' 
    },
    { 
      title: 'Active Clients', 
      value: '127', 
      change: '+12.8%', 
      trend: 'up',
      subtitle: '8 new this month',
      icon: Users, 
      gradient: 'from-purple-500 to-purple-600' 
    },
    { 
      title: 'Project Success Rate', 
      value: '94.2%', 
      change: '+2.3%', 
      trend: 'up',
      subtitle: 'On-time delivery',
      icon: Target, 
      gradient: 'from-green-500 to-green-600' 
    },
    { 
      title: 'Average Project Value', 
      value: '$48.5K', 
      change: '+8.7%', 
      trend: 'up',
      subtitle: 'Per engagement',
      icon: Briefcase, 
      gradient: 'from-orange-500 to-orange-600' 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BIT</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">BoosterIt</h1>
                  <p className="text-xs text-gray-500"></p>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button className="px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium shadow-sm">Overview</button>
                <button className="px-4 py-2 text-gray-600 rounded-md text-sm font-medium hover:bg-white transition">Analytics</button>
                <button className="px-4 py-2 text-gray-600 rounded-md text-sm font-medium hover:bg-white transition">Projects</button>
                <button className="px-4 py-2 text-gray-600 rounded-md text-sm font-medium hover:bg-white transition">Clients</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search clients, projects..." 
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">Managing Director</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="px-8 py-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Performance Overview</h2>
            <p className="text-gray-600">Real-time insights into your business operations</p>
          </div>
          <div className="flex items-center gap-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="Q4 2024">Q4 2024</option>
              <option value="Q3 2024">Q3 2024</option>
              <option value="Q2 2024">Q2 2024</option>
              <option value="Q1 2024">Q1 2024</option>
              <option value="2024">Full Year 2024</option>
            </select>
            <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition shadow-lg shadow-blue-500/30">
              Generate Report
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    metric.trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {metric.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {metric.change}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                  <p className="text-xs text-gray-500">{metric.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Revenue Performance Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Revenue Performance</h3>
                <p className="text-sm text-gray-500">6-month trend analysis by service line</p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">IT Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Digital Marketing</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorIT" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDM" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} tickFormatter={(value) => `$${value/1000}K`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => `$${value.toLocaleString()}`}
                />
                <Area type="monotone" dataKey="itServices" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorIT)" />
                <Area type="monotone" dataKey="digitalMarketing" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorDM)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Top Clients */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Top Clients</h3>
                <p className="text-sm text-gray-500">By revenue contribution</p>
              </div>
            </div>
            <div className="space-y-4">
              {topClients.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{client.name}</p>
                      <p className="text-xs text-gray-500">{client.revenue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      {client.growth}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service Line Performance */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Service Line Performance</h3>
              <p className="text-sm text-gray-500">Revenue and margin analysis</p>
            </div>
            <div className="space-y-5">
              {projectMetrics.map((service, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-5 last:pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-semibold text-gray-900">{service.service}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">${(service.revenue/1000).toFixed(0)}K</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 ml-5">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Projects</p>
                      <p className="text-sm font-semibold text-gray-900">{service.projects}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Avg Value</p>
                      <p className="text-sm font-semibold text-gray-900">${(service.revenue/service.projects/1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Margin</p>
                      <p className="text-sm font-semibold text-green-600">{service.margin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Target vs Actual */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Target vs Actual Performance</h3>
              <p className="text-sm text-gray-500">Monthly comparison</p>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} tickFormatter={(value) => `$${value/1000}K`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value) => `$${value.toLocaleString()}`}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Target" />
                <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 4 }} name="Actual" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
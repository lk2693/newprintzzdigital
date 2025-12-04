"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cog, Brain, Rocket, ArrowRight, Home, Users, FolderOpen, Clock, FileText, Settings, BarChart3, TrendingUp, TrendingDown, Play, Search, Bell } from "lucide-react";
import { useState } from "react";

const leistungen = [
  {
    number: "01",
    title: "Webentwicklung",
    description: "Blitzschnelle, responsive Websites mit modernstem Tech-Stack. Performance und User Experience an erster Stelle.",
    href: "/leistungen/webentwicklung",
    icon: Code,
    stats: [
      { value: "0.8s", label: "Ladezeit" },
      { value: "95+", label: "Lighthouse" },
    ],
  },
  {
    number: "02",
    title: "Automatisierung",
    description: "Manuelle Prozesse kosten Zeit und Geld. Wir automatisieren Ihre Workflows und sparen bis zu 20 Stunden pro Woche.",
    href: "/leistungen/automatisierung",
    icon: Cog,
    stats: [
      { value: "20h", label: "Ersparnis/Woche" },
      { value: "85%", label: "Effizienz" },
    ],
  },
  {
    number: "03",
    title: "KI-Integration",
    description: "Intelligente Chatbots, Predictive Analytics und NLP-Lösungen. KI, die echte Business-Probleme löst.",
    href: "/leistungen/ki-integration",
    icon: Brain,
    stats: [
      { value: "24/7", label: "Verfügbarkeit" },
      { value: "95%", label: "Genauigkeit" },
    ],
  },
  {
    number: "04",
    title: "Digitale Transformation",
    description: "Vom Audit bis zur Umsetzung. Wir begleiten Sie auf dem Weg zur digitalen Exzellenz.",
    href: "/leistungen/digital-transformation",
    icon: Rocket,
    stats: [
      { value: "3x", label: "Schneller" },
      { value: "+40%", label: "Produktivität" },
    ],
  },
];

// Dashboard Visual Component für Webentwicklung - Mobile App Preview Style
function WebDashboard() {
  const [viewMode, setViewMode] = useState<'mobile' | 'web'>('mobile');
  
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 p-8 relative">
      {/* Background Elements */}
      <div className="absolute top-6 left-6 w-16 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl opacity-80 rotate-6"></div>
      <div className="absolute top-4 right-8 w-24 h-24 bg-gradient-to-br from-pink-300 to-red-300 rounded-2xl opacity-60 -rotate-12"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 bg-gray-300 rounded-lg opacity-50"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-4">
        <AnimatePresence mode="wait">
          {viewMode === 'mobile' ? (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* iPhone Mockup */}
              <div className="w-56 bg-black rounded-[2.5rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-medium text-gray-900">9:41</span>
                    <div className="w-20 h-5 bg-black rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-2 bg-gray-900 rounded-sm"></div>
                        <div className="w-1 h-2.5 bg-gray-900 rounded-sm"></div>
                        <div className="w-1 h-3 bg-gray-900 rounded-sm"></div>
                        <div className="w-1 h-3.5 bg-gray-400 rounded-sm"></div>
                      </div>
                      <div className="w-5 h-2.5 border border-gray-900 rounded-sm ml-1">
                        <div className="w-3 h-full bg-gray-900 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="px-4 pb-4">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-[8px]">P</span>
                        </div>
                        <span className="font-bold text-gray-900 text-xs">Printzz</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                          <Bell className="w-2.5 h-2.5 text-gray-500" />
                        </div>
                        <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                          <Settings className="w-2.5 h-2.5 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Calendar Row */}
                    <div className="flex gap-1.5 mb-4">
                      {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day, i) => (
                        <div key={day} className={`flex-1 text-center py-1.5 rounded-lg ${i === 3 ? 'bg-yellow-500 text-white' : 'bg-gray-50'}`}>
                          <div className="text-[7px] text-gray-400">{day}</div>
                          <div className={`text-[10px] font-bold ${i === 3 ? 'text-white' : 'text-gray-900'}`}>{23 + i}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="mb-3">
                      <span className="text-[9px] font-semibold text-gray-900 mb-2 block">Quick Actions</span>
                      <div className="grid grid-cols-4 gap-1.5">
                        <div className="bg-gray-50 rounded-xl p-2 text-center">
                          <div className="w-6 h-6 bg-white rounded-lg mx-auto mb-1 flex items-center justify-center shadow-sm">
                            <FileText className="w-3 h-3 text-gray-500" />
                          </div>
                          <span className="text-[7px] text-gray-500">Invoice</span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-2 text-center">
                          <div className="w-6 h-6 bg-white rounded-lg mx-auto mb-1 flex items-center justify-center shadow-sm">
                            <FileText className="w-3 h-3 text-gray-500" />
                          </div>
                          <span className="text-[7px] text-gray-500">Proposal</span>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-2 text-center">
                          <div className="w-6 h-6 bg-white rounded-lg mx-auto mb-1 flex items-center justify-center shadow-sm">
                            <Users className="w-3 h-3 text-gray-500" />
                          </div>
                          <span className="text-[7px] text-gray-500">Client</span>
                        </div>
                        <div className="bg-yellow-50 rounded-xl p-2 text-center border border-yellow-200">
                          <div className="w-6 h-6 bg-yellow-500 rounded-lg mx-auto mb-1 flex items-center justify-center shadow-sm">
                            <Code className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-[7px] text-yellow-700 font-medium">Project</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Ongoing Projects */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-semibold text-gray-900">Ongoing Projects</span>
                        <span className="text-[7px] text-gray-400">3 active</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="bg-gray-50 rounded-xl p-2 flex items-center gap-2">
                          <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-[10px]">🌐</span>
                          </div>
                          <div className="flex-1">
                            <span className="text-[9px] font-medium text-gray-900 block">Website Redesign</span>
                            <div className="flex items-center gap-1">
                              <div className="w-12 h-1 bg-gray-200 rounded-full">
                                <div className="w-10 h-1 bg-green-500 rounded-full"></div>
                              </div>
                              <span className="text-[7px] text-gray-400">85%</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-2 flex items-center gap-2">
                          <div className="w-7 h-7 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <span className="text-[10px]">📱</span>
                          </div>
                          <div className="flex-1">
                            <span className="text-[9px] font-medium text-gray-900 block">Mobile App</span>
                            <div className="flex items-center gap-1">
                              <div className="w-12 h-1 bg-gray-200 rounded-full">
                                <div className="w-6 h-1 bg-yellow-500 rounded-full"></div>
                              </div>
                              <span className="text-[7px] text-gray-400">50%</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-2 flex items-center gap-2">
                          <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span className="text-[10px]">🛒</span>
                          </div>
                          <div className="flex-1">
                            <span className="text-[9px] font-medium text-gray-900 block">E-Commerce</span>
                            <div className="flex items-center gap-1">
                              <div className="w-12 h-1 bg-gray-200 rounded-full">
                                <div className="w-3 h-1 bg-purple-500 rounded-full"></div>
                              </div>
                              <span className="text-[7px] text-gray-400">25%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Navigation */}
                  <div className="bg-white border-t border-gray-100 px-4 py-2 flex justify-around">
                    <div className="text-center">
                      <Home className="w-4 h-4 text-yellow-500 mx-auto" />
                      <span className="text-[7px] text-yellow-500 font-medium">Home</span>
                    </div>
                    <div className="text-center">
                      <FolderOpen className="w-4 h-4 text-gray-400 mx-auto" />
                      <span className="text-[7px] text-gray-400">Projects</span>
                    </div>
                    <div className="text-center">
                      <Clock className="w-4 h-4 text-gray-400 mx-auto" />
                      <span className="text-[7px] text-gray-400">Time</span>
                    </div>
                    <div className="text-center">
                      <BarChart3 className="w-4 h-4 text-gray-400 mx-auto" />
                      <span className="text-[7px] text-gray-400">Stats</span>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="flex justify-center py-2">
                    <div className="w-24 h-1 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Shadow under phone */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-black/20 rounded-full blur-xl"></div>
            </motion.div>
          ) : (
            <motion.div
              key="web"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Browser/Laptop Mockup */}
              <div className="w-80 bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-700 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-gray-600 rounded px-3 py-1 text-[10px] text-gray-300 font-mono">
                    app.printzz.de
                  </div>
                </div>
                
                {/* Web App Content */}
                <div className="bg-white">
                  {/* Web App Header */}
                  <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">P</span>
                      </div>
                      <span className="font-bold text-gray-900 text-sm">Printzz Dashboard</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg px-2.5 py-1.5">
                        <Search className="w-3 h-3 text-gray-400" />
                        <span className="text-[10px] text-gray-400">Suchen...</span>
                      </div>
                      <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                        <Bell className="w-3.5 h-3.5 text-gray-500" />
                      </div>
                      <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                        M
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats Row */}
                  <div className="px-4 py-3 grid grid-cols-4 gap-2">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-[9px] text-gray-500">Projekte</div>
                      <div className="text-lg font-bold text-gray-900">24</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-[9px] text-gray-500">Aktiv</div>
                      <div className="text-lg font-bold text-yellow-500">8</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-[9px] text-gray-500">Fertig</div>
                      <div className="text-lg font-bold text-green-500">16</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-[9px] text-gray-500">Stunden</div>
                      <div className="text-lg font-bold text-gray-900">840</div>
                    </div>
                  </div>
                  
                  {/* Projects Table */}
                  <div className="px-4 pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-900">Aktive Projekte</span>
                      <span className="text-[10px] text-yellow-600 font-medium">Alle →</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                      <div className="grid grid-cols-4 gap-2 text-[9px] text-gray-400 px-3 py-2 border-b border-gray-100">
                        <span>Projekt</span>
                        <span>Status</span>
                        <span>Deadline</span>
                        <span>Progress</span>
                      </div>
                      <div className="divide-y divide-gray-100">
                        <div className="grid grid-cols-4 gap-2 items-center px-3 py-2 text-[10px]">
                          <span className="text-gray-900 font-medium">Website</span>
                          <span className="text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Live</span>
                          <span className="text-gray-500">23 Dez</span>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 items-center px-3 py-2 text-[10px]">
                          <span className="text-gray-900 font-medium">Shop</span>
                          <span className="text-yellow-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>WIP</span>
                          <span className="text-gray-500">15 Jan</span>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-yellow-500 h-1.5 rounded-full" style={{width: '50%'}}></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 items-center px-3 py-2 text-[10px]">
                          <span className="text-gray-900 font-medium">Landing</span>
                          <span className="text-blue-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Review</span>
                          <span className="text-gray-500">08 Dez</span>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shadow under browser */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-black/20 rounded-full blur-xl"></div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Toggle Buttons */}
        <div className="flex gap-2 mt-8">
          <button
            onClick={() => setViewMode('mobile')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-lg transition-all duration-300 ${
              viewMode === 'mobile' 
                ? 'bg-gray-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Mobile App
          </button>
          <button
            onClick={() => setViewMode('web')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-lg transition-all duration-300 ${
              viewMode === 'web' 
                ? 'bg-gray-800 text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            Web App
          </button>
        </div>
      </div>
    </div>
  );
}

// Automation Dashboard - Clean Version
function AutomationDashboard() {
  const weeklyData = [12, 15, 18, 14, 20, 22, 19, 21, 18, 23];
  const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'];
  
  return (
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 bg-white border-r border-gray-100 p-4 hidden md:block">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-gray-900">Automate</span>
          </div>
          
          {/* Nav Items */}
          <nav className="space-y-1">
            <div className="flex items-center gap-2 px-3 py-2.5 bg-green-50 rounded-xl text-green-700">
              <Home className="w-4 h-4" />
              <span className="font-medium text-sm">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
              <Cog className="w-4 h-4" />
              <span className="text-sm">Workflows</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
              <Play className="w-4 h-4" />
              <span className="text-sm">Triggers</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Schedule</span>
            </div>
          </nav>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2 px-3">Integrations</p>
            <nav className="space-y-1">
              <div className="flex items-center gap-2 px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                <FileText className="w-4 h-4" />
                <span className="text-sm">APIs</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                <Settings className="w-4 h-4" />
                <span className="text-sm">Settings</span>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-5 bg-gray-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Automation Hub</h3>
              <p className="text-xs text-gray-500">Ihre Workflows im Überblick</p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 rounded-lg px-3 py-1.5 text-green-700">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium">Alle Systeme aktiv</span>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
              <span className="text-[10px] text-gray-500 block mb-1">Zeit gespart</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">20h</span>
                <span className="text-[10px] text-green-500 font-medium">+15%</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
              <span className="text-[10px] text-gray-500 block mb-1">Workflows</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">12</span>
                <span className="text-[10px] text-green-500 font-medium">+3</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
              <span className="text-[10px] text-gray-500 block mb-1">Ausführungen</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">1.2k</span>
                <span className="text-[10px] text-green-500 font-medium">+22%</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
              <span className="text-[10px] text-gray-500 block mb-1">Effizienz</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-green-500">85%</span>
                <span className="text-[10px] text-green-500 font-medium">+5%</span>
              </div>
            </div>
          </div>
          
          {/* Chart & Apps */}
          <div className="grid grid-cols-5 gap-4">
            {/* Chart */}
            <div className="col-span-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-900 text-sm">Stunden gespart pro Woche</span>
                <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-1 rounded">12 Wochen</span>
              </div>
              {/* Bar Chart */}
              <div className="flex items-end gap-1.5 h-28">
                {weeklyData.map((hours, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`w-full rounded-t transition-all duration-300 ${i === 9 ? 'bg-green-500' : 'bg-green-200 hover:bg-green-300'}`}
                      style={{ height: `${(hours / 25) * 100}%`, minHeight: '6px' }}
                    />
                    <span className="text-[8px] text-gray-400 mt-1.5">{weeks[i]}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Connected Apps */}
            <div className="col-span-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <span className="font-medium text-gray-900 text-sm mb-3 block">Verbundene Apps</span>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg">
                  <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-[10px]">S</div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-900 block">Salesforce</span>
                    <span className="text-[10px] text-green-500">Verbunden</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg">
                  <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-[10px]">G</div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-900 block">Gmail</span>
                    <span className="text-[10px] text-green-500">Verbunden</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg">
                  <div className="w-7 h-7 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold text-[10px]">N</div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-900 block">Notion</span>
                    <span className="text-[10px] text-green-500">Verbunden</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg cursor-pointer hover:bg-green-50">
                  <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-xs">+</div>
                  <span className="text-xs text-gray-500">Mehr hinzufügen</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Aktive Workflows - Compact */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm mt-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-900 text-sm">Aktive Workflows</span>
              <span className="text-xs text-green-600 cursor-pointer font-medium">+ Neu erstellen</span>
            </div>
            <div className="grid grid-cols-4 gap-3 text-[10px] text-gray-400 pb-2 border-b border-gray-100">
              <span>Workflow</span>
              <span>Trigger</span>
              <span>Status</span>
              <span>Ersparnis</span>
            </div>
            <div className="grid grid-cols-4 gap-3 items-center py-2.5 text-xs">
              <span className="text-gray-900 font-medium">Email → CRM</span>
              <span className="text-gray-500">Neue Email</span>
              <span className="text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Aktiv</span>
              <span className="text-green-600 font-medium">5h/Woche</span>
            </div>
            <div className="grid grid-cols-4 gap-3 items-center py-2.5 text-xs">
              <span className="text-gray-900 font-medium">Report Gen</span>
              <span className="text-gray-500">Täglich 9:00</span>
              <span className="text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Aktiv</span>
              <span className="text-green-600 font-medium">8h/Woche</span>
            </div>
            <div className="grid grid-cols-4 gap-3 items-center py-2.5 text-xs">
              <span className="text-gray-900 font-medium">Data Sync</span>
              <span className="text-gray-500">Alle 15 Min</span>
              <span className="text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Aktiv</span>
              <span className="text-green-600 font-medium">4h/Woche</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// KI Dashboard - AI Chat & Analytics Interface
function KIDashboard() {
  const [chatMessages] = useState([
    { role: 'user', text: 'Analysiere unsere Verkaufsdaten Q4' },
    { role: 'ai', text: 'Ich habe die Q4-Daten analysiert. Hier sind die wichtigsten Erkenntnisse:', typing: false },
  ]);
  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20 relative">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <span className="text-black font-bold text-lg">AI</span>
            </div>
            <div>
              <h3 className="font-bold text-white">KI-Assistent</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-400">Online & bereit</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-yellow-500 border border-yellow-500/20">
              GPT-4 Turbo
            </div>
            <div className="w-8 h-8 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
              <Settings className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="text-[10px] text-gray-500 mb-1">Anfragen heute</div>
            <div className="text-xl font-bold text-white">2.4k</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="text-[10px] text-gray-500 mb-1">Genauigkeit</div>
            <div className="text-xl font-bold text-yellow-500">98.5%</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="text-[10px] text-gray-500 mb-1">Antwortzeit</div>
            <div className="text-xl font-bold text-white">0.8s</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="text-[10px] text-gray-500 mb-1">Zufriedenheit</div>
            <div className="text-xl font-bold text-yellow-400">4.9★</div>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          {/* Chat Messages */}
          <div className="p-4 space-y-3 min-h-[200px]">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-yellow-500 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
                <p className="text-sm text-black font-medium">{chatMessages[0].text}</p>
              </div>
            </div>
            
            {/* AI Response */}
            <div className="flex gap-2">
              <div className="w-7 h-7 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-[10px]">AI</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[85%] border border-white/10">
                <p className="text-sm text-gray-300 mb-3">{chatMessages[1].text}</p>
                
                {/* AI Generated Insights */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 bg-yellow-500/10 rounded-lg px-3 py-2 border border-yellow-500/20">
                    <TrendingUp className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs text-yellow-400">Umsatz +23% vs. Q3</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400">847 neue Kunden gewonnen</span>
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-500/10 rounded-lg px-3 py-2 border border-yellow-500/20">
                    <BarChart3 className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs text-yellow-400">Top-Produkt: Premium Plan (+45%)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Typing Indicator */}
            <div className="flex gap-2 items-center">
              <div className="w-7 h-7 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-[10px]">AI</span>
              </div>
              <div className="bg-white/5 rounded-xl px-4 py-2 border border-white/10">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-yellow-500/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-yellow-500/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-yellow-500/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
              <input 
                type="text" 
                placeholder="Frag mich etwas..." 
                className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 outline-none"
                readOnly
              />
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors border border-white/10">
                  <FileText className="w-4 h-4 text-gray-500" />
                </div>
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/30">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Active AI Modules */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          <div className="flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-yellow-500/20 flex-shrink-0">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="text-xs text-yellow-500">Chatbot</span>
          </div>
          <div className="flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-yellow-500/20 flex-shrink-0">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="text-xs text-yellow-500">Analytics</span>
          </div>
          <div className="flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-yellow-500/20 flex-shrink-0">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="text-xs text-yellow-500">NLP</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10 flex-shrink-0">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            <span className="text-xs text-gray-500">Vision AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Transformation Dashboard - Business Overview Style (Responsive)
function TransformationDashboard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">T</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Transformation Hub</h3>
            <p className="text-sm text-gray-500">Ihr digitaler Fortschritt</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="text-xs text-blue-600 font-medium">Phase 3/4</span>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <span className="text-xs text-gray-500 block mb-1">Projekte</span>
          <span className="text-2xl font-bold text-gray-900">24</span>
          <span className="text-xs text-green-500 ml-1">+12%</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <span className="text-xs text-gray-500 block mb-1">Aktiv</span>
          <span className="text-2xl font-bold text-gray-900">8</span>
          <span className="text-xs text-green-500 ml-1">+5%</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <span className="text-xs text-gray-500 block mb-1">Produktivität</span>
          <span className="text-2xl font-bold text-green-500">+40%</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <span className="text-xs text-gray-500 block mb-1">Schneller</span>
          <span className="text-2xl font-bold text-gray-900">3x</span>
        </div>
      </div>
      
      {/* Phases Section */}
      <div className="bg-gray-50 rounded-xl p-5 mb-4">
        <span className="font-semibold text-gray-900 mb-4 block">Phasen</span>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
            <span className="text-gray-900 flex-1">Analyse</span>
            <span className="text-green-500 font-semibold">100%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
            <span className="text-gray-900 flex-1">Strategie</span>
            <span className="text-green-500 font-semibold">100%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</span>
            <span className="text-gray-900 flex-1 font-semibold">Implementierung</span>
            <span className="text-blue-500 font-semibold">65%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold flex-shrink-0">4</span>
            <span className="text-gray-400 flex-1">Optimierung</span>
            <span className="text-gray-400">0%</span>
          </div>
        </div>
      </div>
      
      {/* Score & Projects Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Digitalisierungs Score */}
        <div className="bg-blue-500 rounded-xl p-4 text-white">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-blue-100">Digitalisierungs-Score</span>
            <span className="text-2xl font-bold">78%</span>
          </div>
          <div className="w-full bg-blue-400 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>
        
        {/* Active Projects */}
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-gray-900 text-sm">Aktive Projekte</span>
            <span className="text-xs text-blue-600 font-medium">Alle →</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                <span className="text-xs text-gray-900">CRM Integration</span>
              </div>
              <span className="text-[10px] text-gray-500">Live</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
                <span className="text-xs text-gray-900">Cloud Migration</span>
              </div>
              <span className="text-[10px] text-gray-500">In Progress</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="text-xs text-gray-900">Prozessoptimierung</span>
              </div>
              <span className="text-[10px] text-gray-500">Review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeistungenSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dashboards = [
    <WebDashboard key="web" />,
    <AutomationDashboard key="auto" />,
    <KIDashboard key="ki" />,
    <TransformationDashboard key="transform" />,
  ];

  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Unsere{" "}
            <span className="text-yellow-500">Leistungen</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Service List */}
          <div className="space-y-6">
            {leistungen.map((leistung, index) => (
              <motion.div
                key={leistung.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                <Link href={leistung.href} className="block">
                  <div className="flex gap-6">
                    {/* Number */}
                    <div className={`font-bold text-lg pt-1 transition-colors duration-300 ${
                      activeIndex === index ? "text-yellow-500" : "text-gray-400"
                    }`}>
                      {leistung.number}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        activeIndex === index ? "text-gray-900" : "text-gray-600"
                      }`}>
                        {leistung.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {leistung.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-6">
                        {leistung.stats.map((stat, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className={`text-xl font-bold transition-colors duration-300 ${
                              activeIndex === index ? "text-gray-900" : "text-gray-500"
                            }`}>{stat.value}</span>
                            <span className="text-sm text-gray-500">{stat.label}</span>
                          </div>
                        ))}
                        <ArrowRight className={`w-5 h-5 transition-all ml-auto ${
                          activeIndex === index 
                            ? "text-yellow-500 opacity-100 translate-x-0" 
                            : "text-gray-400 opacity-0 -translate-x-2"
                        }`} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Dynamic Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {dashboards[activeIndex]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Jetzt beraten lassen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

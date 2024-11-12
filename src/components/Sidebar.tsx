import React from 'react';
import { Home, Settings, Users, FileText, HelpCircle, Menu } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Users, label: 'Community' },
    { icon: FileText, label: 'Documents' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg"
      >
        <Menu size={24} />
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-2xl transition-all duration-300 ease-in-out z-40 
        ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2 px-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
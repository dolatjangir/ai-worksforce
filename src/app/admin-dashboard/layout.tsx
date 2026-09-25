
// app/dashboard/layout.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import {
  Layout,
  Users,
  Settings,
  Zap,
  Shield,
  Menu,
  X,
  LogOut,
  SquareLibrary,
  BrickWall,
  UsersRound,
  SquareUser,
  HousePlus,
  TouchpadOff,
  ShieldCheck
} from 'lucide-react';
import { useState } from 'react';

import ProtectedRoute from '@/utils/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import MasterProtectedRoute from '@/utils/masterProtectedRoute';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuth();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const navItems = [
    { path: '/admin-dashboard', label: 'Dashboard', icon: Layout },
    {
      path: '/admin-dashboard/blogs',
      label: 'Blog Manger',
      icon: BrickWall
    },
    {
      path: '/admin-dashboard/socialmedia-manager',
      label: 'Social Media Manager',
      icon: SquareLibrary
    },
    {
      path: '/admin-dashboard/seo-manager',
      label: 'Seo Manager',
      icon: SquareUser
    },
    { path: '/admin-dashboard/applications', label: 'Posted Application', icon: HousePlus },
    // { path: '/admin-dashboard/requirements', label: 'Requirements', icon: UsersRound },
    {
      path: '/admin-dashboard/contact-us',
      label: 'Contact-Us Requirements',
      icon: UsersRound
    },
    // {
    //   path: '/admin-dashboard/subscriber',
    //   label: 'Subscriber',
    //   icon: SquareUser
    // },
    // {
    //   path: '/admin-dashboard/inquiry',
    //   label: 'Inquiry',
    //   icon: UsersRound
    // },
    {
      path: '/admin-dashboard/certificates',
      label: 'Certificates',
      icon: ShieldCheck
    },
    {
      path: '/admin-dashboard/employees',
      label: 'Employees',
      icon: Users
    },
    // { path: '/admin-dashboard/broker-request', label: 'Broker Requests', icon: TouchpadOff },
  ];

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <MasterProtectedRoute>
      <div className="flex h-screen bg-[var(--color-blue-50)] overflow-hidden">
        
        {/* Desktop Sidebar - Sticky */}
        <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-[var(--color-white)] border-r border-[var(--color-border)] flex-shrink-0">
          
          {/* Logo Section */}
          <div className="p-4 border-b  border-[var(--color-border)] flex-shrink-0">
            <Link href="/">
              <div className="flex items-center gap-3">
                <img 
                  src="/aiworksforce-logo.png" 
                  alt="aiworksforce-logo" 
                  className="object-cover w-50"
                />

                {/* <span className="font-bold text-xl tracking-tight text-[var(--color-heading)]">
                  AI{' '}
                  <span className="text-[var(--color-primary)] font-extrabold">
                    WoksForce
                  </span>
                </span> */}
              </div>
            </Link>
          </div>

          {/* Navigation - Scrollable if needed */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => router.push(item.path)}
                  className={`w-full flex items-center cursor-pointer gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active 
                      ? 'bg-[var(--color-blue-50)] text-[var(--color-primary)]' 
                      : 'text-[var(--color-text)] hover:bg-[var(--color-blue-50)] hover:text-[var(--color-heading)]'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout Section */}
          <div className="p-4 border-t border-[var(--color-border)] flex-shrink-0">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-base font-medium"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar Drawer */}
        <aside 
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-[var(--color-white)] border-r border-[var(--color-border)] transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Mobile Header */}
          <div className="p-2 border-b border-[var(--color-border)] flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-3">
                <img 
                  src="/aiworksforce-logo.png" 
                  alt="aiworksforce-logo" 
                  className=" "
                />
              </div>
            </Link>

            <button 
              onClick={() => setIsMobileSidebarOpen(false)}
              className="p-2 hover:bg-[var(--color-blue-50)] rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-[var(--color-text)]" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="p-4 space-y-2 overflow-y-auto flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => {
                    router.push(item.path);
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active 
                      ? 'bg-[var(--color-blue-50)] text-[var(--color-primary)]' 
                      : 'text-[var(--color-text)] hover:bg-[var(--color-blue-50)] hover:text-[var(--color-heading)]'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Logout */}
          <div className="p-4 border-t border-[var(--color-border)]">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors text-base font-medium"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area - Scrollable */}
        <main className="flex-1 h-screen overflow-y-auto relative">
          
          {/* Mobile Header Bar */}
          <div className="lg:hidden sticky top-0 z-30 bg-[var(--color-white)]/95 backdrop-blur-sm border-b border-[var(--color-border)] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/aiworksforce-logo.png" 
                alt="aiworksforce-logo" 
                className="h-7 w-auto object-contain"
              />
            </div>

            <button 
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-2 hover:bg-[var(--color-blue-50)] rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-[var(--color-text)]" />
            </button>
          </div>

          {/* Page Content */}
          <div className=" min-h-full">
            {children}
          </div>
        </main>
      </div>
    </MasterProtectedRoute>
  );
}

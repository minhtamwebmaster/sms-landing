'use client';

import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { scrollToSection } from '../utils/scrollUtils';

interface HeaderProps {
  onOpenTrialModal?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenTrialModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSectionClick = (sectionId: string) => {
    if (pathname === '/') {
      // Nếu đang ở trang chủ, scroll đến section
      scrollToSection(sectionId);
    } else {
      // Nếu ở trang khác, redirect về trang chủ với hash
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <MessageSquare className="h-8 w-8 text-primary-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">SMS<span className="text-primary-600">Brand</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Trang chủ</Link>
            <button
              onClick={() => handleSectionClick('services')}
              className="text-gray-800 font-medium hover:text-primary-600 transition-colors"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => handleSectionClick('pricing')}
              className="text-gray-800 font-medium hover:text-primary-600 transition-colors"
            >
              Bảng giá
            </button>
            <Link href="/news" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Tin tức</Link>
            <Link href="/contact" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Liên hệ</Link>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={onOpenTrialModal}
            className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Đăng ký dùng thử
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <Link href="/" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Trang chủ</Link>
              <button
                onClick={() => {
                  handleSectionClick('services');
                  setIsMenuOpen(false);
                }}
                className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors text-left"
              >
                Dịch vụ
              </button>
              <button
                onClick={() => {
                  handleSectionClick('pricing');
                  setIsMenuOpen(false);
                }}
                className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors text-left"
              >
                Bảng giá
              </button>
              <Link href="/news" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Tin tức</Link>
              <Link href="/contact" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Liên hệ</Link>
              <button 
                onClick={onOpenTrialModal}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full"
              >
                Đăng ký dùng thử
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

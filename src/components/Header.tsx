import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <MessageSquare className="h-8 w-8 text-primary-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">SMS<span className="text-primary-600">Brand</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Trang chủ</a>
          <a href="#services" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Dịch vụ</a>
          <a href="#" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Bảng giá</a>
          <a href="#" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Tin tức</a>
          <a href="#" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Liên hệ</a>
        </nav>

        <button className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          Đăng ký dùng thử
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Trang chủ</a>
            <a href="#services" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Dịch vụ</a>
            <a href="#" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Bảng giá</a>
            <a href="#" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Tin tức</a>
            <a href="#" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Liên hệ</a>
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full">
              Đăng ký dùng thử
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

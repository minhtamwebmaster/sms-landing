import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="text-xl font-bold text-gray-800">SMS<span className="text-primary-600">Brand</span></Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Trang chủ</Link>
          <Link to="/#services" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Dịch vụ</Link>
          <Link to="/#pricing" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Bảng giá</Link>
          <Link to="/news" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Tin tức</Link>
          <Link to="/contact" className="text-gray-800 font-medium hover:text-primary-600 transition-colors">Liên hệ</Link>
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
            <Link to="/" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Trang chủ</Link>
            <Link to="/#services" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Dịch vụ</Link>
            <Link to="/#pricing" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Bảng giá</Link>
            <Link to="/news" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Tin tức</Link>
            <Link to="/contact" className="text-gray-800 font-medium py-2 hover:text-primary-600 transition-colors">Liên hệ</Link>
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

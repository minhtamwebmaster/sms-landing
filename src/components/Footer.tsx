import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <MessageSquare className="h-8 w-8 text-primary-400 mr-2" />
              <span className="text-xl font-bold text-white">SMS<span className="text-primary-400">Brand</span></span>
            </div>
            <p className="mb-6">
              Giải pháp truyền thông SMS Brandname và ZNS chuyên nghiệp cho doanh nghiệp Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Trang chủ</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Dịch vụ</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Tính năng</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Bảng giá</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Khách hàng</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">SMS Brandname</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Zalo Notification Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Email Marketing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">OTP Authentication</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">API Integration</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Enterprise Solutions</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-500" />
                <span>Tầng 15, Tòa nhà VietTower, 123 Nguyễn Văn Linh, Quận 7, TP.HCM</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-500" />
                <span>+84 28 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-500" />
                <span>contact@vietmessage.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 VietMessage Solutions. Tất cả các quyền được bảo lưu.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

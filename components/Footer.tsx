import React from 'react';
import Link from 'next/link';
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
              CÔNG TY TNHH DỊCH VỤ TƯ VẤN VÀ GIẢI PHÁP CÔNG NGHỆ HUY TIẾN
            </p>
            <p className="mb-6 text-sm text-gray-300">
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
                <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">Dịch vụ</Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">Tính năng</Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">Bảng giá</Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-white transition-colors">Khách hàng</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
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
                <span>Số 32, Khu H2, Đường DN7, Phường Tân Hưng Thuận, Quận 12, TP Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-500" />
                <span>0777046035 (Mr. Huy)</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-500" />
                <span>kinhdoanh@huytien.vn</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm text-gray-300">MST: 0318281313</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 CÔNG TY TNHH DỊCH VỤ TƯ VẤN VÀ GIẢI PHÁP CÔNG NGHỆ HUY TIẾN. Tất cả các quyền được bảo lưu.</p>
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

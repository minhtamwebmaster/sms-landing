import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <MessageSquare className="h-8 w-8 text-primary-500 mr-2" />
              <span className="text-xl font-bold">SMS<span className="text-primary-500">Brand</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Giải pháp truyền thông đa kênh toàn diện cho doanh nghiệp Việt Nam, giúp kết nối hiệu quả với khách hàng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Trang chủ</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Dịch vụ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Bảng giá</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Tin tức</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-0.5" />
                <span className="text-gray-400">123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-400">+84 28 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-3" />
                <span className="text-gray-400">contact@smsbrand.vn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Đăng ký nhận tin</h3>
            <p className="text-gray-400 mb-4">
              Nhận thông tin mới nhất về sản phẩm, dịch vụ và khuyến mãi đặc biệt.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>

        {/* Policies */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 SMSBrand. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">Điều khoản sử dụng</a>
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">Chính sách bảo mật</a>
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">Chính sách cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

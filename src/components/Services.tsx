import React from 'react';
import { MessageSquare, Send, Bell, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dịch vụ của chúng tôi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Giải pháp truyền thông đa kênh giúp doanh nghiệp tối ưu chi phí và tăng hiệu quả chăm sóc khách hàng
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SMS Brandname */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="p-8">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">SMS Brandname</h3>
              <p className="text-gray-600 mb-6">
                Tin nhắn thương hiệu chính thức từ doanh nghiệp đến khách hàng, thay thế số điện thoại bằng tên thương hiệu, tăng nhận diện và độ tin cậy.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Tỷ lệ phân phối cao</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Tăng cường nhận diện thương hiệu</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Tích hợp API dễ dàng</span>
                </li>
              </ul>
              <button className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Tìm hiểu thêm
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ZNS */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="p-8">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Bell className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Zalo Notification Service (ZNS)</h3>
              <p className="text-gray-600 mb-6">
                Kênh gửi thông báo chính thức qua Zalo từ doanh nghiệp đến khách hàng, hỗ trợ nội dung phong phú với hình ảnh, nút bấm và liên kết.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Chi phí thấp hơn SMS</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Nội dung đa dạng (hình ảnh, nút bấm)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Tương tác hai chiều</span>
                </li>
              </ul>
              <button className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Tìm hiểu thêm
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

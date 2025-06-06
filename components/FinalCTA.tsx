import React from 'react';
import { ArrowRight, MessageSquare, Bell, Phone, Mail } from 'lucide-react';

interface FinalCTAProps {
  onOpenTrialModal?: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="final-cta" className="py-16 md:py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng nâng cao hiệu quả truyền thông doanh nghiệp?</h2>
          <p className="text-xl md:text-2xl mb-4 text-primary-100">
            Bắt đầu ngay hôm nay với giải pháp SMS Brandname và ZNS chuyên nghiệp
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-primary-100">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>0777046035 (Mr. Huy)</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>kinhdoanh@huytien.vn</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button
              onClick={onOpenTrialModal}
              className="flex items-center justify-center bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Đăng ký dùng thử miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a 
              href="#demo" 
              className="flex items-center justify-center bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Yêu cầu demo
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-8 w-8 text-primary-300 mr-3" />
                <h3 className="text-xl font-bold">SMS Brandname</h3>
              </div>
              <p className="text-primary-100 mb-4">
                Tăng độ nhận diện thương hiệu với tin nhắn gửi từ tên doanh nghiệp
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary-300 rounded-full mr-2"></span>
                  <span>Tỷ lệ đọc lên đến 98%</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary-300 rounded-full mr-2"></span>
                  <span>Tăng cường uy tín doanh nghiệp</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary-300 rounded-full mr-2"></span>
                  <span>Báo cáo chi tiết theo thời gian thực</span>
                </li>
              </ul>
              <a 
                href="#sms" 
                className="inline-block text-primary-200 hover:text-white transition-colors"
              >
                Tìm hiểu thêm →
              </a>
            </div>
            
            <div className="bg-primary-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Bell className="h-8 w-8 text-primary-300 mr-3" />
                <h3 className="text-xl font-bold">Zalo Notification Service</h3>
              </div>
              <p className="text-primary-100 mb-4">
                Gửi thông báo đa phương tiện với chi phí tối ưu qua Zalo
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary-300 rounded-full mr-2"></span>
                  <span>Nội dung phong phú với hình ảnh</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary-300 rounded-full mr-2"></span>
                  <span>Tương tác hai chiều với khách hàng</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary-300 rounded-full mr-2"></span>
                  <span>Chi phí thấp hơn 40% so với SMS</span>
                </li>
              </ul>
              <a 
                href="#zns" 
                className="inline-block text-primary-200 hover:text-white transition-colors"
              >
                Tìm hiểu thêm →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

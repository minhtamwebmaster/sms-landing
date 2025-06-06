'use client';

import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

interface PricingProps {
  onOpenContactModal?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenContactModal }) => {
  const smsBrandnameServices = [
    {
      name: "SMS BRANDNAME CSKH",
      price: "~600 VNĐ/tin",
      features: [
        "Miễn phí khai báo Brandname",
        "Miễn phí khai báo Template",
        "Cung cấp tài liệu đấu nối API miễn phí",
        "Cung cấp webtool gửi tin và report",
        "Nhân viên hỗ trợ 24/7",
        "Không cần nạp tiền trước",
        "Thanh toán trả sau mỗi tháng"
      ],
      cta: "Liên hệ ngay",
      popular: true,
      color: "blue"
    },
    {
      name: "SMS BRANDNAME QC",
      price: "~300 VNĐ/tin",
      features: [
        "Miễn phí khai báo Brandname",
        "Miễn phí khai báo Template",
        "Cung cấp tài liệu đấu nối API miễn phí",
        "Cung cấp webtool gửi tin và report",
        "Nhân viên hỗ trợ 24/7",
        "Không cần nạp tiền trước",
        "Thanh toán trả sau mỗi tháng"
      ],
      cta: "Liên hệ ngay",
      popular: false,
      color: "blue"
    }
  ];

  const znsServices = [
    {
      name: "ZNS Văn bản",
      price: "200 VNĐ/tin",
      description: "Sử dụng nội dung thể hiện rõ thông tin về giao dịch đã có với khách hàng trong thời gian gần đây và được phân loại thẻ dựa trên mục đích gửi.",
      features: [
        "Hỗ trợ nhiều mục đích gửi",
        "Độ dài thông điệp phù hợp",
        "Tỷ lệ gửi thành công cao"
      ],
      cta: "Liên hệ tư vấn ngay",
      popular: false
    },
    {
      name: "ZNS Dạng bảng",
      price: "200 VNĐ/tin",
      description: "Thường sử dụng cho các thông tin như: cập nhật đơn hàng, thông tin giao dịch, lịch sử mua hàng, hóa đơn dịch vụ (điện, nước, …) và phù hợp với các nội dung có nhiều tham số.",
      features: [
        "Hiển thị thông tin dạng bảng",
        "Phù hợp với nhiều tham số",
        "Dễ đọc, trực quan"
      ],
      cta: "Liên hệ tư vấn ngay",
      popular: false
    },
    {
      name: "ZNS OTP",
      price: "300 VNĐ/tin",
      description: "Có nội dung mã xác thực OTP, dùng để xác nhận đăng nhập các ứng dụng online, thông báo về quá trình tạo hoặc thay đổi trạng thái người dùng (xác nhận đổi mật khẩu, xác thực tài khoản, xác thực giao dịch,…)",
      features: [
        "Độ ưu tiên cao",
        "Tốc độ gửi nhanh",
        "Tỷ lệ gửi thành công cao nhất"
      ],
      cta: "Liên hệ tư vấn ngay",
      popular: true
    },
    {
      name: "ZNS Đánh giá",
      price: "200 VNĐ/tin",
      description: "Mẫu Zalo ZNS đánh giá dịch vụ gửi đến khách hàng cuối đã trải nghiệm sản phẩm/dịch vụ của doanh nghiệp để đánh giá độ hài lòng của khách hàng theo 5 thang điểm tương ứng từ 1 đến 5 sao.",
      features: [
        "Tích hợp thang đánh giá 5 sao",
        "Thu thập phản hồi khách hàng",
        "Tăng tương tác"
      ],
      cta: "Liên hệ tư vấn ngay",
      popular: false
    }
  ];

  const znsCommonBenefits = [
    "Miễn phí thiết lập Official Account",
    "Hỗ trợ phê duyệt template",
    "Cung cấp tài liệu đấu nối API miễn phí",
    "Cung cấp webtool gửi tin và report",
    "Nhân viên hỗ trợ 24/7",
    "Không cần nạp tiền trước",
    "Thanh toán trả sau mỗi tháng"
  ];

  const znsNotes = [
    "Giá chưa bao gồm VAT 10%",
    "Giá có thể thay đổi theo số lượng tin nhắn",
    "Khách hàng có nhu cầu số lượng lớn vui lòng liên hệ để được báo giá tốt nhất"
  ];

  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState('sms');
  
  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bảng giá dịch vụ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu và quy mô doanh nghiệp của bạn
          </p>
          
          {/* Service Type Tabs */}
          <div className="flex justify-center mt-8 mb-8">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button 
                onClick={() => setActiveTab('sms')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'sms' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                SMS Brandname
              </button>
              <button 
                onClick={() => setActiveTab('zns')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'zns' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Zalo Notification Service
              </button>
            </div>
          </div>
        </div>

        {/* SMS Brandname Pricing */}
        {activeTab === 'sms' && (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {smsBrandnameServices.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden border transition-all ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-100 scale-105 md:scale-105' 
                    : 'border-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 font-medium">
                    Phổ biến nhất
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-800">
                        Giá chỉ từ:
                      </span>
                      <span className="text-3xl font-bold text-blue-600 ml-2">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={onOpenContactModal}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ZNS Pricing */}
        {activeTab === 'zns' && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {znsServices.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden border transition-all ${
                    plan.popular 
                      ? 'border-blue-500 shadow-lg shadow-blue-100' 
                      : 'border-gray-200 shadow-md hover:shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-center py-2 font-medium">
                      Phổ biến nhất
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 h-24 overflow-y-auto">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                    </div>
                    
                    <h4 className="font-medium text-gray-800 mb-3">Đặc điểm:</h4>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={onOpenContactModal}
                      className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Common Benefits Section */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quyền lợi chung</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {znsCommonBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Notes Section */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Lưu ý:</h3>
              <ul className="space-y-2">
                {znsNotes.map((note, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Cần giải pháp tùy chỉnh cho doanh nghiệp của bạn?</p>
          <button
            onClick={onOpenContactModal}
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Liên hệ đội ngũ kinh doanh
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

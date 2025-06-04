import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const pricingPlans = [
    {
      name: "Starter",
      description: "Dành cho doanh nghiệp nhỏ mới bắt đầu",
      priceMonthly: "1.990.000",
      priceAnnually: "19.900.000",
      features: [
        "1.000 SMS Brandname/tháng",
        "500 ZNS/tháng",
        "Tích hợp API cơ bản",
        "Báo cáo chuẩn",
        "Hỗ trợ email",
        "1 tên Brandname"
      ],
      notIncluded: [
        "Phân khúc khách hàng nâng cao",
        "Tùy chỉnh mẫu tin nhắn",
        "Tích hợp CRM/ERP",
        "Hỗ trợ 24/7"
      ],
      cta: "Dùng thử miễn phí",
      popular: false
    },
    {
      name: "Business",
      description: "Dành cho doanh nghiệp vừa và nhỏ",
      priceMonthly: "4.990.000",
      priceAnnually: "49.900.000",
      features: [
        "5.000 SMS Brandname/tháng",
        "2.500 ZNS/tháng",
        "Tích hợp API đầy đủ",
        "Báo cáo chi tiết",
        "Hỗ trợ email & điện thoại",
        "Tối đa 3 tên Brandname",
        "Phân khúc khách hàng cơ bản",
        "Tùy chỉnh mẫu tin nhắn"
      ],
      notIncluded: [
        "Tích hợp CRM/ERP nâng cao",
        "Hỗ trợ 24/7"
      ],
      cta: "Đăng ký ngay",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Dành cho doanh nghiệp lớn với nhu cầu cao",
      priceMonthly: "Liên hệ",
      priceAnnually: "Liên hệ",
      features: [
        "Không giới hạn SMS Brandname",
        "Không giới hạn ZNS",
        "API tùy chỉnh theo yêu cầu",
        "Báo cáo nâng cao & phân tích",
        "Hỗ trợ 24/7 ưu tiên",
        "Không giới hạn tên Brandname",
        "Phân khúc khách hàng nâng cao",
        "Tùy chỉnh mẫu tin nhắn cao cấp",
        "Tích hợp CRM/ERP toàn diện",
        "Quản lý tài khoản chuyên biệt"
      ],
      notIncluded: [],
      cta: "Liên hệ với chúng tôi",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bảng giá dịch vụ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu và quy mô doanh nghiệp của bạn
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${isAnnual ? 'text-gray-600' : 'text-gray-400'}`}>Thanh toán hàng tháng</span>
            <button 
              onClick={toggleBilling}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-gray-400' : 'text-gray-600'}`}>Thanh toán hàng năm</span>
            <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Tiết kiệm 15%
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden border transition-all ${
                plan.popular 
                  ? 'border-primary-500 shadow-lg shadow-primary-100 scale-105 md:scale-110' 
                  : 'border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary-500 text-white text-center py-2 font-medium">
                  Phổ biến nhất
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.priceMonthly === "Liên hệ" ? (
                    <span className="text-3xl font-bold text-gray-800">Liên hệ</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-gray-800">
                        {isAnnual ? plan.priceAnnually : plan.priceMonthly}
                      </span>
                      <span className="text-gray-600 ml-1">VNĐ{isAnnual ? '/năm' : '/tháng'}</span>
                    </>
                  )}
                </div>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-primary-100 hover:bg-primary-200 text-primary-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              
              <div className="px-8 pb-8">
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <p className="font-medium text-gray-800 mb-4">Bao gồm:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.notIncluded.length > 0 && (
                  <div>
                    <p className="font-medium text-gray-500 mb-4 flex items-center">
                      Không bao gồm:
                      <HelpCircle className="h-4 w-4 text-gray-400 ml-1" />
                    </p>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-400">
                          <span className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Cần giải pháp tùy chỉnh cho doanh nghiệp của bạn?</p>
          <a 
            href="#contact" 
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Liên hệ đội ngũ kinh doanh
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

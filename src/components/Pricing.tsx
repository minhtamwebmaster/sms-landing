import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const smsPricingPlans = [
    {
      name: 'Cơ bản',
      monthlyPrice: '990.000',
      annualPrice: '9.900.000',
      description: 'Phù hợp cho doanh nghiệp nhỏ',
      features: [
        'Tên thương hiệu chuẩn',
        '5.000 tin nhắn/tháng',
        'Báo cáo cơ bản',
        'API tích hợp',
        'Hỗ trợ kỹ thuật trong giờ hành chính',
      ],
      cta: 'Đăng ký ngay',
      popular: false,
    },
    {
      name: 'Chuyên nghiệp',
      monthlyPrice: '1.990.000',
      annualPrice: '19.900.000',
      description: 'Phù hợp cho doanh nghiệp vừa',
      features: [
        'Tên thương hiệu chuẩn',
        '15.000 tin nhắn/tháng',
        'Báo cáo chi tiết',
        'API tích hợp nâng cao',
        'Hỗ trợ kỹ thuật 24/7',
        'Tạo mẫu tin nhắn tự động',
      ],
      cta: 'Đăng ký ngay',
      popular: true,
    },
    {
      name: 'Doanh nghiệp',
      monthlyPrice: '3.990.000',
      annualPrice: '39.900.000',
      description: 'Phù hợp cho doanh nghiệp lớn',
      features: [
        'Tên thương hiệu chuẩn',
        '50.000 tin nhắn/tháng',
        'Báo cáo nâng cao & phân tích',
        'API tích hợp toàn diện',
        'Hỗ trợ kỹ thuật 24/7 ưu tiên',
        'Tạo mẫu tin nhắn tự động',
        'Quản lý chiến dịch đa kênh',
        'Tư vấn chiến lược riêng',
      ],
      cta: 'Liên hệ tư vấn',
      popular: false,
    },
  ];

  const znsPricingPlans = [
    {
      name: 'Cơ bản',
      monthlyPrice: '790.000',
      annualPrice: '7.900.000',
      description: 'Phù hợp cho doanh nghiệp nhỏ',
      features: [
        'Tài khoản OA xác thực',
        '3.000 tin nhắn/tháng',
        'Báo cáo cơ bản',
        'API tích hợp',
        'Hỗ trợ kỹ thuật trong giờ hành chính',
      ],
      cta: 'Đăng ký ngay',
      popular: false,
    },
    {
      name: 'Chuyên nghiệp',
      monthlyPrice: '1.590.000',
      annualPrice: '15.900.000',
      description: 'Phù hợp cho doanh nghiệp vừa',
      features: [
        'Tài khoản OA xác thực',
        '10.000 tin nhắn/tháng',
        'Báo cáo chi tiết',
        'API tích hợp nâng cao',
        'Hỗ trợ kỹ thuật 24/7',
        'Mẫu tin nhắn đa phương tiện',
        'Tương tác hai chiều',
      ],
      cta: 'Đăng ký ngay',
      popular: true,
    },
    {
      name: 'Doanh nghiệp',
      monthlyPrice: '2.990.000',
      annualPrice: '29.900.000',
      description: 'Phù hợp cho doanh nghiệp lớn',
      features: [
        'Tài khoản OA xác thực',
        '30.000 tin nhắn/tháng',
        'Báo cáo nâng cao & phân tích',
        'API tích hợp toàn diện',
        'Hỗ trợ kỹ thuật 24/7 ưu tiên',
        'Mẫu tin nhắn đa phương tiện nâng cao',
        'Tương tác hai chiều & tự động hóa',
        'Tư vấn chiến lược riêng',
      ],
      cta: 'Liên hệ tư vấn',
      popular: false,
    },
  ];

  const [activeTab, setActiveTab] = useState('sms');

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bảng giá dịch vụ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của doanh nghiệp
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-500' : 'text-gray-900'}`}>Thanh toán hàng tháng</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative mx-4 h-6 w-12 rounded-full bg-gray-200 focus:outline-none"
            >
              <div className={`absolute left-0 top-0 h-6 w-6 transform rounded-full bg-primary-600 transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Thanh toán hàng năm <span className="text-green-500 font-semibold">(Tiết kiệm 15%)</span></span>
          </div>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button 
              onClick={() => setActiveTab('sms')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'sms' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              SMS Brandname
            </button>
            <button 
              onClick={() => setActiveTab('zns')}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'zns' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Zalo Notification Service
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {(activeTab === 'sms' ? smsPricingPlans : znsPricingPlans).map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg border ${plan.popular ? 'border-primary-500 relative' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-xs font-semibold">
                  Phổ biến nhất
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-500 ml-2">VNĐ{isAnnual ? '/năm' : '/tháng'}</span>
                </div>
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="border-t border-gray-100 p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-start">
            <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Cần gói dịch vụ tùy chỉnh?</h4>
              <p className="text-gray-600">
                Chúng tôi cung cấp các gói dịch vụ tùy chỉnh cho doanh nghiệp có nhu cầu đặc biệt. 
                Vui lòng <a href="#" className="text-primary-600 hover:underline">liên hệ với đội ngũ kinh doanh</a> để được tư vấn chi tiết.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

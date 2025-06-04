import React from 'react';
import { Check, X, BarChart3, Clock, Shield, MessageSquare, Bell, Zap, BarChart4, Users } from 'lucide-react';

const Features: React.FC = () => {
  const comparisonFeatures = [
    { name: 'Nhận diện thương hiệu', sms: true, zns: true },
    { name: 'Tỷ lệ mở cao', sms: true, zns: true },
    { name: 'Nội dung đa phương tiện', sms: false, zns: true },
    { name: 'Tương tác hai chiều', sms: false, zns: true },
    { name: 'Chi phí thấp', sms: false, zns: true },
    { name: 'Không giới hạn ký tự', sms: false, zns: true },
    { name: 'Báo cáo chi tiết', sms: true, zns: true },
    { name: 'Tích hợp API', sms: true, zns: true },
    { name: 'Hỗ trợ 24/7', sms: true, zns: true },
  ];

  const detailedFeatures = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary-600" />,
      title: 'Nhận diện thương hiệu',
      description: 'Tin nhắn được gửi từ tên thương hiệu của doanh nghiệp thay vì số điện thoại, tăng độ tin cậy và nhận diện.',
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary-600" />,
      title: 'Tỷ lệ mở cao',
      description: 'Tỷ lệ đọc tin nhắn lên đến 98%, cao hơn nhiều so với email và các kênh truyền thông khác.',
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: 'Cá nhân hóa nội dung',
      description: 'Tùy chỉnh tin nhắn theo thông tin cá nhân của từng khách hàng, tăng hiệu quả tương tác.',
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-primary-600" />,
      title: 'Báo cáo chi tiết',
      description: 'Thống kê đầy đủ về tỷ lệ gửi, nhận và tương tác với tin nhắn, giúp đánh giá hiệu quả chiến dịch.',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary-600" />,
      title: 'Tích hợp hệ thống',
      description: 'Dễ dàng tích hợp với các hệ thống CRM, ERP và các nền tảng khác thông qua API.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ doanh nghiệp mọi lúc, mọi nơi.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tính năng vượt trội</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các tính năng chuyên nghiệp giúp doanh nghiệp nâng cao hiệu quả truyền thông
          </p>
        </div>

        {/* Detailed Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {detailedFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="text-center p-8 bg-gray-50 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">So sánh SMS Brandname và ZNS</h3>
            <p className="text-gray-600">Lựa chọn giải pháp phù hợp nhất với nhu cầu của doanh nghiệp</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">Tính năng</th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold">
                    <div className="flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary-600 mr-2" />
                      SMS Brandname
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold">
                    <div className="flex items-center justify-center">
                      <Bell className="h-5 w-5 text-primary-600 mr-2" />
                      Zalo Notification Service
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-6 text-gray-800 font-medium">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.sms ? 
                        <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      }
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.zns ? 
                        <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

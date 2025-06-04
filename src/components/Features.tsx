import React from 'react';
import { CheckCircle, MessageSquare, Bell, BarChart4, Users, Zap, ShieldCheck, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "SMS Brandname",
      description: "Gửi tin nhắn với tên thương hiệu, tăng độ nhận diện và uy tín",
      icon: <MessageSquare className="h-10 w-10 text-primary-600" />,
      benefits: [
        "Tỷ lệ đọc cao lên đến 98%",
        "Tăng cường nhận diện thương hiệu",
        "Nội dung cá nhân hóa theo khách hàng",
        "Báo cáo chi tiết theo thời gian thực"
      ]
    },
    {
      title: "Zalo Notification Service",
      description: "Gửi thông báo đa phương tiện qua Zalo với chi phí tối ưu",
      icon: <Bell className="h-10 w-10 text-primary-600" />,
      benefits: [
        "Gửi hình ảnh và nút bấm tương tác",
        "Chi phí thấp hơn 40% so với SMS",
        "Tương tác hai chiều với khách hàng",
        "Tích hợp dễ dàng với hệ thống hiện có"
      ]
    }
  ];

  const commonFeatures = [
    {
      title: "Báo cáo chi tiết",
      description: "Theo dõi tình trạng gửi, tỷ lệ mở, tương tác và phân tích hiệu quả chiến dịch",
      icon: <BarChart4 className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Phân khúc khách hàng",
      description: "Phân loại và nhắm mục tiêu khách hàng dựa trên hành vi, nhân khẩu học và lịch sử tương tác",
      icon: <Users className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Tích hợp API linh hoạt",
      description: "Kết nối dễ dàng với CRM, ERP và các hệ thống phần mềm doanh nghiệp khác",
      icon: <Layers className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Hiệu suất cao",
      description: "Hệ thống được tối ưu để xử lý hàng triệu tin nhắn mỗi giờ với độ trễ tối thiểu",
      icon: <Zap className="h-6 w-6 text-primary-600" />
    },
    {
      title: "Bảo mật dữ liệu",
      description: "Mã hóa đầu cuối và tuân thủ các tiêu chuẩn bảo mật quốc tế để bảo vệ thông tin khách hàng",
      icon: <ShieldCheck className="h-6 w-6 text-primary-600" />
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tính năng nổi bật</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các tính năng mạnh mẽ giúp doanh nghiệp của bạn tối ưu hóa chiến lược truyền thông
          </p>
        </div>

        {/* Main Services Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-50 p-6 border-t border-primary-100">
                <a href="#" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                  Tìm hiểu thêm về {feature.title} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary-600 text-white">
                <th className="py-4 px-6 text-left">Tính năng</th>
                <th className="py-4 px-6 text-center">SMS Brandname</th>
                <th className="py-4 px-6 text-center">ZNS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Độ dài tin nhắn</td>
                <td className="py-4 px-6 text-center">Tối đa 459 ký tự</td>
                <td className="py-4 px-6 text-center">Tối đa 1000 ký tự</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Hình ảnh</td>
                <td className="py-4 px-6 text-center">Không hỗ trợ</td>
                <td className="py-4 px-6 text-center">Hỗ trợ</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Nút tương tác</td>
                <td className="py-4 px-6 text-center">Không hỗ trợ</td>
                <td className="py-4 px-6 text-center">Hỗ trợ (tối đa 3 nút)</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Tỷ lệ đọc</td>
                <td className="py-4 px-6 text-center">~98%</td>
                <td className="py-4 px-6 text-center">~90%</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Chi phí</td>
                <td className="py-4 px-6 text-center">Cao</td>
                <td className="py-4 px-6 text-center">Thấp hơn 40%</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Tương tác hai chiều</td>
                <td className="py-4 px-6 text-center">Không hỗ trợ</td>
                <td className="py-4 px-6 text-center">Hỗ trợ</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Phạm vi tiếp cận</td>
                <td className="py-4 px-6 text-center">Tất cả người dùng di động</td>
                <td className="py-4 px-6 text-center">Người dùng Zalo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Common Features */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Các tính năng chung</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h4 className="text-lg font-semibold text-gray-800 ml-3">{feature.title}</h4>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import { TrendingUp, Shield, Clock, BarChart4, Zap, Users } from 'lucide-react';

interface BenefitsProps {
  onOpenTrialModal?: () => void;
}

const Benefits: React.FC<BenefitsProps> = ({ onOpenTrialModal }) => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Tăng tỷ lệ chuyển đổi',
      description: 'Nâng cao hiệu quả chiến dịch marketing với thông điệp được cá nhân hóa và gửi đúng thời điểm.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Bảo mật & Tin cậy',
      description: 'Đảm bảo thông tin khách hàng được bảo vệ tuyệt đối với hệ thống bảo mật tiêu chuẩn quốc tế.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Tiết kiệm thời gian',
      description: 'Tự động hóa quy trình gửi tin nhắn, giúp doanh nghiệp tiết kiệm thời gian và nguồn lực.'
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary-600" />,
      title: 'Báo cáo chi tiết',
      description: 'Theo dõi hiệu quả chiến dịch với báo cáo thời gian thực về tỷ lệ gửi, nhận và tương tác.'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: 'Tốc độ phân phối cao',
      description: 'Đảm bảo tin nhắn được gửi và nhận ngay lập tức, không bị chậm trễ hay thất lạc.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ doanh nghiệp mọi lúc, mọi nơi.'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lợi ích vượt trội</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những giá trị mà dịch vụ SMS Brandname và ZNS mang lại cho doanh nghiệp của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onOpenTrialModal}
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Bắt đầu ngay hôm nay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      company: 'VietBank',
      industry: 'Ngân hàng',
      logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      challenge: 'Cần một giải pháp thông báo giao dịch nhanh chóng, an toàn và đáng tin cậy cho khách hàng.',
      solution: 'Triển khai SMS Brandname để gửi thông báo giao dịch tức thì với tên thương hiệu ngân hàng.',
      results: [
        'Tăng 35% tỷ lệ nhận diện thương hiệu',
        'Giảm 28% chi phí so với SMS thông thường',
        '99.8% tin nhắn được gửi thành công',
        'Thời gian gửi tin nhắn < 3 giây'
      ]
    },
    {
      company: 'ShopViet',
      industry: 'Thương mại điện tử',
      logo: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      challenge: 'Cần nâng cao tỷ lệ mở thông báo khuyến mãi và tăng tỷ lệ chuyển đổi từ các chiến dịch marketing.',
      solution: 'Kết hợp SMS Brandname và ZNS để tạo chiến dịch marketing đa kênh với nội dung phong phú.',
      results: [
        'Tăng 42% tỷ lệ mở thông báo',
        'Tăng 23% tỷ lệ chuyển đổi',
        'Giảm 30% chi phí marketing',
        'ROI tăng 2.5 lần'
      ]
    },
    {
      company: 'HealthCare Plus',
      industry: 'Y tế',
      logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      challenge: 'Cần một hệ thống nhắc lịch khám và thông báo kết quả xét nghiệm hiệu quả, đảm bảo riêng tư.',
      solution: 'Sử dụng ZNS để gửi thông báo lịch hẹn và kết quả xét nghiệm với nội dung được mã hóa và bảo mật.',
      results: [
        'Giảm 45% tỷ lệ bỏ lỡ lịch hẹn',
        'Tiết kiệm 40% chi phí nhân sự',
        'Tăng 28% mức độ hài lòng của bệnh nhân',
        '100% tuân thủ quy định về bảo mật dữ liệu'
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Câu chuyện thành công</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá cách các doanh nghiệp đã tối ưu hóa truyền thông và tăng trưởng với giải pháp của chúng tôi
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="bg-gray-100 rounded-2xl overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={`${study.company} case study`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <img 
                    src={study.logo} 
                    alt={study.company} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{study.company}</h3>
                    <p className="text-gray-600">{study.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800">Thách thức:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Giải pháp:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Kết quả:</h4>
                    <ul className="mt-2 space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center">
                          <span className="h-2 w-2 bg-primary-600 rounded-full mr-2"></span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

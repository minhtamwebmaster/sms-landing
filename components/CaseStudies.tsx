import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "MegaBank tăng 35% tỷ lệ thu hồi nợ với SMS Brandname",
      category: "Ngân hàng",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      summary: "MegaBank đã triển khai SMS Brandname để gửi thông báo nhắc nợ và đạt được kết quả đáng kinh ngạc trong việc cải thiện tỷ lệ thu hồi nợ.",
      results: [
        "Tăng 35% tỷ lệ thu hồi nợ",
        "Giảm 28% chi phí thu hồi nợ",
        "ROI đạt 320% sau 6 tháng"
      ]
    },
    {
      title: "ShopViet tăng doanh số 42% nhờ chiến dịch ZNS",
      category: "Thương mại điện tử",
      image: "https://images.pexels.com/photos/6169/woman-hand-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      summary: "ShopViet đã sử dụng ZNS để gửi thông báo cá nhân hóa về các sản phẩm mới và khuyến mãi, giúp tăng đáng kể doanh số bán hàng.",
      results: [
        "Tăng 42% doanh số bán hàng",
        "Tỷ lệ mở tin nhắn đạt 92%",
        "Giảm 40% chi phí marketing so với SMS"
      ]
    },
    {
      title: "HealthPlus cải thiện tỷ lệ đặt lịch khám với SMS & ZNS",
      category: "Y tế",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      summary: "HealthPlus đã kết hợp SMS Brandname và ZNS để nhắc lịch khám và cung cấp thông tin sức khỏe cho bệnh nhân, giúp cải thiện đáng kể tỷ lệ đặt lịch khám.",
      results: [
        "Giảm 45% tỷ lệ bỏ lỡ lịch hẹn",
        "Tăng 30% tỷ lệ đặt lịch tái khám",
        "Tiết kiệm 25% chi phí nhân sự gọi điện nhắc lịch"
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Khách hàng tiêu biểu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá cách các doanh nghiệp đã đạt được kết quả kinh doanh vượt trội với giải pháp SMS Brandname và ZNS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                    target.onerror = null;
                  }}
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.summary}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Kết quả đạt được:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/case-studies" 
            className="inline-block bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Xem tất cả case studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

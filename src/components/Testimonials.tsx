import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "SMS Brandname giúp chúng tôi tăng cường nhận diện thương hiệu và xây dựng niềm tin với khách hàng. Tỷ lệ phản hồi từ các chiến dịch marketing đã tăng hơn 40% kể từ khi triển khai giải pháp này.",
      author: "Nguyễn Minh Tuấn",
      position: "Giám đốc Marketing, VinRetail",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    {
      content: "Chúng tôi đã chuyển từ SMS thông thường sang ZNS và thấy sự khác biệt rõ rệt. Chi phí giảm 30% trong khi hiệu quả tương tác tăng đáng kể nhờ khả năng gửi hình ảnh và nút bấm trong tin nhắn.",
      author: "Trần Thị Mai Anh",
      position: "COO, TechViet Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    {
      content: "Dịch vụ hỗ trợ kỹ thuật 24/7 thực sự ấn tượng. Bất cứ khi nào chúng tôi gặp vấn đề, đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ và giải quyết nhanh chóng, giúp hệ thống của chúng tôi hoạt động liên tục.",
      author: "Lê Văn Hùng",
      position: "Giám đốc CNTT, BankTech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4
    },
    {
      content: "Báo cáo chi tiết giúp chúng tôi dễ dàng theo dõi hiệu quả từng chiến dịch và tối ưu hóa ngân sách marketing. Khả năng tích hợp với hệ thống CRM của chúng tôi cũng rất linh hoạt và đơn giản.",
      author: "Phạm Thị Hương",
      position: "Trưởng phòng Digital Marketing, FashionViet",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá trải nghiệm thực tế từ các doanh nghiệp đã sử dụng dịch vụ SMS Brandname và ZNS
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
            Xem thêm đánh giá từ khách hàng →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

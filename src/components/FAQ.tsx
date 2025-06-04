import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "SMS Brandname là gì?",
      answer: "SMS Brandname là dịch vụ gửi tin nhắn thương hiệu, cho phép doanh nghiệp gửi tin nhắn SMS đến khách hàng với tên thương hiệu thay vì số điện thoại. Điều này giúp tăng độ nhận diện và uy tín của doanh nghiệp, đồng thời giúp khách hàng dễ dàng nhận biết nguồn gốc tin nhắn."
    },
    {
      question: "ZNS (Zalo Notification Service) là gì?",
      answer: "ZNS là dịch vụ gửi thông báo chính thức qua Zalo OA (Official Account) của doanh nghiệp đến người dùng Zalo. ZNS cho phép gửi các nội dung đa phương tiện như hình ảnh, nút bấm, và cho phép tương tác hai chiều với chi phí thấp hơn so với SMS truyền thống."
    },
    {
      question: "Làm thế nào để đăng ký sử dụng dịch vụ?",
      answer: "Để đăng ký sử dụng dịch vụ SMS Brandname hoặc ZNS, doanh nghiệp cần chuẩn bị giấy phép kinh doanh và các giấy tờ liên quan, sau đó liên hệ với chúng tôi qua form đăng ký trên website hoặc gọi điện trực tiếp. Đội ngũ tư vấn sẽ hướng dẫn chi tiết các bước tiếp theo và hỗ trợ trong quá trình triển khai."
    },
    {
      question: "Thời gian triển khai dịch vụ là bao lâu?",
      answer: "Thời gian triển khai dịch vụ phụ thuộc vào loại dịch vụ và quy mô doanh nghiệp. Đối với SMS Brandname, thời gian phê duyệt tên thương hiệu thường mất 3-5 ngày làm việc. Đối với ZNS, thời gian xác thực tài khoản OA và kích hoạt dịch vụ thường mất 1-2 ngày làm việc. Sau khi được phê duyệt, hệ thống có thể được tích hợp và sẵn sàng sử dụng trong vòng 24 giờ."
    },
    {
      question: "Làm thế nào để tích hợp dịch vụ với hệ thống của doanh nghiệp?",
      answer: "Chúng tôi cung cấp API đầy đủ và tài liệu hướng dẫn chi tiết để tích hợp dịch vụ với hệ thống của doanh nghiệp. Đội ngũ kỹ thuật của chúng tôi sẽ hỗ trợ trong suốt quá trình tích hợp, từ tư vấn giải pháp, cung cấp mã nguồn mẫu, đến kiểm thử và triển khai chính thức. Chúng tôi có thể tích hợp với hầu hết các hệ thống CRM, ERP và các nền tảng phổ biến khác."
    },
    {
      question: "Dịch vụ có đảm bảo về bảo mật thông tin không?",
      answer: "Có, chúng tôi cam kết tuân thủ nghiêm ngặt các quy định về bảo mật thông tin và bảo vệ dữ liệu cá nhân. Hệ thống của chúng tôi được mã hóa đầu cuối, tuân thủ các tiêu chuẩn bảo mật quốc tế, và được kiểm tra an ninh định kỳ. Chúng tôi không bao giờ chia sẻ dữ liệu khách hàng với bên thứ ba khi không có sự đồng ý."
    },
    {
      question: "Tôi có thể theo dõi hiệu quả chiến dịch như thế nào?",
      answer: "Chúng tôi cung cấp hệ thống báo cáo chi tiết và trực quan, cho phép doanh nghiệp theo dõi tình trạng gửi tin (đã gửi, đã nhận, đã đọc), tỷ lệ tương tác, và các chỉ số hiệu suất khác. Báo cáo có thể được xem trực tiếp trên dashboard hoặc xuất ra dưới dạng Excel/CSV để phân tích sâu hơn. Đối với các gói dịch vụ cao cấp, chúng tôi còn cung cấp phân tích xu hướng và đề xuất tối ưu hóa chiến dịch."
    },
    {
      question: "Có giới hạn số lượng tin nhắn có thể gửi không?",
      answer: "Số lượng tin nhắn được gửi phụ thuộc vào gói dịch vụ mà doanh nghiệp đăng ký. Các gói cơ bản thường có giới hạn số lượng tin nhắn hàng tháng, trong khi các gói cao cấp có thể gửi số lượng lớn hơn hoặc không giới hạn. Đối với các chiến dịch quy mô lớn, chúng tôi có thể cung cấp gói dịch vụ tùy chỉnh để đáp ứng nhu cầu cụ thể của doanh nghiệp."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Câu hỏi thường gặp</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Giải đáp những thắc mắc phổ biến về dịch vụ SMS Brandname và ZNS
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-0"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                }
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Không tìm thấy câu trả lời bạn đang tìm kiếm?</p>
          <a 
            href="#contact" 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Liên hệ với chúng tôi
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, HelpCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Hãy để lại thông tin để được tư vấn về giải pháp SMS Brandname và ZNS phù hợp nhất với doanh nghiệp của bạn.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Thông Tin Liên Hệ</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Địa Chỉ</h3>
                      <p className="text-gray-600">Tầng 15, Tòa nhà VietTower, 123 Nguyễn Văn Linh, Quận 7, TP.HCM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Điện Thoại</h3>
                      <p className="text-gray-600">+84 28 1234 5678</p>
                      <p className="text-gray-600">+84 90 1234 567 (Hotline)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600">contact@vietmessage.vn</p>
                      <p className="text-gray-600">support@vietmessage.vn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Giờ Làm Việc</h3>
                      <p className="text-gray-600">Thứ 2 - Thứ 6: 8:30 - 17:30</p>
                      <p className="text-gray-600">Thứ 7: 8:30 - 12:00</p>
                      <p className="text-gray-600">Chủ nhật: Nghỉ</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Alternative Contact Channels */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Kênh Liên Hệ Khác</h2>
                
                <div className="space-y-4">
                  <a href="#" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <MessageCircle className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="font-medium text-gray-800">Live Chat</span>
                  </a>
                  
                  <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="w-6 h-6 mr-3 flex items-center justify-center">
                      <img src="https://images.pexels.com/photos/11311812/pexels-photo-11311812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Zalo" className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-800">Zalo</span>
                  </a>
                  
                  <a href="https://m.me/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Facebook className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="font-medium text-gray-800">Facebook Messenger</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Gửi Yêu Cầu Tư Vấn</h2>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Vị Trí Văn Phòng</h2>
            <div className="bg-white rounded-lg shadow-md p-2 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580567147!2d106.69941947469798!3d10.771595089387617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5d0d82f!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2s!4v1694235207285!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí văn phòng"
              ></iframe>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Câu Hỏi Thường Gặp</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div>
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 text-lg">Quy trình đăng ký sử dụng dịch vụ như thế nào?</h3>
                    <p className="text-gray-600 mt-2">
                      Quy trình đăng ký gồm 4 bước: (1) Liên hệ tư vấn và báo giá, (2) Ký hợp đồng và thanh toán, 
                      (3) Kỹ thuật hỗ trợ tích hợp và cài đặt, (4) Bàn giao và đào tạo sử dụng.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 text-lg">Thời gian tích hợp và triển khai mất bao lâu?</h3>
                    <p className="text-gray-600 mt-2">
                      Thời gian tích hợp trung bình từ 3-5 ngày làm việc tùy thuộc vào mức độ phức tạp của hệ thống. 
                      Đối với các tích hợp đơn giản, chúng tôi có thể hoàn thành trong vòng 24 giờ.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 text-lg">Làm thế nào để đăng ký Brandname chính thức?</h3>
                    <p className="text-gray-600 mt-2">
                      Để đăng ký Brandname chính thức, doanh nghiệp cần cung cấp giấy phép kinh doanh và các giấy tờ 
                      liên quan đến thương hiệu. Chúng tôi sẽ hỗ trợ toàn bộ quy trình đăng ký với nhà mạng và 
                      Bộ Thông tin Truyền thông.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800 text-lg">Hỗ trợ kỹ thuật được cung cấp như thế nào?</h3>
                    <p className="text-gray-600 mt-2">
                      Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 qua email, hotline và hệ thống ticket. Khách hàng 
                      doanh nghiệp được phân công người hỗ trợ riêng và cam kết thời gian phản hồi trong vòng 30 phút 
                      trong giờ làm việc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

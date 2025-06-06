'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ClientLayout from '../../components/ClientLayout';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-primary-600 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Liên hệ với chúng tôi</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ để được tư vấn miễn phí về giải pháp SMS Brandname và ZNS.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-8 w-8 text-primary-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Thông tin liên hệ</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Địa chỉ</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Số 32, Khu H2, Đường DN7, Phường Tân Hưng Thuận, Quận 12, TP Hồ Chí Minh, Việt Nam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Điện thoại</h3>
                      <a href="tel:0777046035" className="text-primary-600 hover:text-primary-700 transition-colors">
                        0777046035 (Mr. Huy)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <a href="mailto:kinhdoanh@huytien.vn" className="text-primary-600 hover:text-primary-700 transition-colors">
                        kinhdoanh@huytien.vn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Giờ làm việc</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                        <p>Thứ 7: 8:00 - 12:00</p>
                        <p>Chủ nhật: Nghỉ</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Thông tin công ty</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-medium">CÔNG TY TNHH DỊCH VỤ TƯ VẤN VÀ GIẢI PHÁP CÔNG NGHỆ HUY TIẾN</p>
                    <p>MST: 0318281313</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Gửi yêu cầu tư vấn</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vị trí của chúng tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hãy đến thăm văn phòng của chúng tôi để được tư vấn trực tiếp về các giải pháp SMS Brandname và ZNS.
            </p>
          </div>

          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621546!2d106.6198112!3d10.8403029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUwJzI1LjEiTiAxMDbCsDM3JzE5LjYiRQ!5e0!3m2!1svi!2s!4v1703123456789!5m2!1svi!2s&q=S%E1%BB%91+32+Khu+H2+%C4%90%C6%B0%E1%BB%9Dng+DN7+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+H%C6%B0ng+Thu%E1%BA%ADn+Qu%E1%BA%ADn+12"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí CÔNG TY TNHH DỊCH VỤ TƯ VẤN VÀ GIẢI PHÁP CÔNG NGHỆ HUY TIẾN - Số 32, Khu H2, Đường DN7, Phường Tân Hưng Thuận, Quận 12"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/S%E1%BB%91+32+Khu+H2+%C4%90%C6%B0%E1%BB%9Dng+DN7+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+H%C6%B0ng+Thu%E1%BA%ADn+Qu%E1%BA%ADn+12+TP+H%E1%BB%93+Ch%C3%AD+Minh+Vi%E1%BB%87t+Nam/@10.8403029,106.6220999,16z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Xem trên Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Câu hỏi thường gặp</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Một số câu hỏi phổ biến về dịch vụ SMS Brandname và ZNS của chúng tôi.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-3">Thời gian xử lý đăng ký SMS Brandname?</h3>
              <p className="text-gray-600 text-sm">
                Thông thường từ 3-5 ngày làm việc sau khi hoàn tất hồ sơ. Chúng tôi sẽ hỗ trợ bạn trong suốt quá trình.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-3">Chi phí sử dụng dịch vụ như thế nào?</h3>
              <p className="text-gray-600 text-sm">
                Chi phí phụ thuộc vào số lượng tin nhắn và loại dịch vụ. Liên hệ để được báo giá chi tiết.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-3">Có hỗ trợ tích hợp API không?</h3>
              <p className="text-gray-600 text-sm">
                Có, chúng tôi cung cấp API đầy đủ và hỗ trợ tích hợp với hệ thống của bạn.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-3">Có thể dùng thử dịch vụ không?</h3>
              <p className="text-gray-600 text-sm">
                Có, chúng tôi cung cấp gói dùng thử miễn phí để bạn trải nghiệm dịch vụ.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </ClientLayout>
  );
}

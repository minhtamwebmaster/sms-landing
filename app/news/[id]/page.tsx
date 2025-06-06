'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import ClientLayout from '../../../components/ClientLayout';

export default function BlogPost() {
  const params = useParams();
  const id = params?.id as string;
  
  // Blog post data (same as in News.tsx)
  const blogPosts = [
    {
      id: 1,
      title: "Cập nhật tính năng mới: Phân tích hiệu quả chiến dịch SMS theo thời gian thực",
      excerpt: "Khám phá tính năng phân tích mới giúp doanh nghiệp theo dõi hiệu quả chiến dịch SMS Brandname theo thời gian thực với các chỉ số chi tiết.",
      content: `
        <p>Chúng tôi vui mừng thông báo về việc ra mắt tính năng phân tích hiệu quả chiến dịch SMS theo thời gian thực - một bước tiến quan trọng trong việc nâng cao trải nghiệm quản lý chiến dịch SMS Brandname của doanh nghiệp.</p>
        
        <h2>Tính năng nổi bật</h2>
        <p>Tính năng mới này cho phép bạn:</p>
        <ul>
          <li><strong>Theo dõi tỷ lệ gửi thành công:</strong> Xem ngay lập tức số lượng tin nhắn đã được gửi thành công và thất bại</li>
          <li><strong>Phân tích tỷ lệ mở tin:</strong> Theo dõi tỷ lệ người nhận đã đọc tin nhắn của bạn</li>
          <li><strong>Báo cáo chi tiết theo thời gian:</strong> Xem biểu đồ hiệu quả theo giờ, ngày, tuần</li>
          <li><strong>Phân khúc khách hàng:</strong> Phân tích hiệu quả theo từng nhóm khách hàng</li>
        </ul>
        
        <h2>Cách sử dụng</h2>
        <p>Để truy cập tính năng này, bạn chỉ cần:</p>
        <ol>
          <li>Đăng nhập vào tài khoản quản trị</li>
          <li>Chọn menu "Báo cáo" > "Phân tích thời gian thực"</li>
          <li>Chọn chiến dịch bạn muốn theo dõi</li>
          <li>Xem các chỉ số được cập nhật liên tục</li>
        </ol>
        
        <h2>Lợi ích cho doanh nghiệp</h2>
        <p>Với tính năng mới này, doanh nghiệp có thể:</p>
        <ul>
          <li>Tối ưu hóa thời gian gửi tin nhắn để đạt hiệu quả cao nhất</li>
          <li>Điều chỉnh nội dung tin nhắn dựa trên phản hồi thực tế</li>
          <li>Tiết kiệm chi phí bằng cách loại bỏ các chiến dịch không hiệu quả</li>
          <li>Cải thiện ROI của các chiến dịch SMS Marketing</li>
        </ul>
        
        <p>Tính năng này đã được triển khai cho tất cả khách hàng và có thể sử dụng ngay hôm nay. Nếu bạn cần hỗ trợ, vui lòng liên hệ với đội ngũ kỹ thuật của chúng tôi.</p>
      `,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Cập nhật dịch vụ",
      author: "Nguyễn Văn Nam",
      date: "15/05/2023",
      readTime: "5 phút đọc",
      featured: true,
      views: 1245
    },
    // Add more posts here...
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <ClientLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Bài viết không tồn tại</h1>
            <Link href="/news" className="text-primary-600 hover:text-primary-700">
              ← Quay lại trang tin tức
            </Link>
          </div>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <div className="min-h-screen bg-gray-50">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-primary-600">Tin tức</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/news" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại tin tức
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Buttons */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Chia sẻ bài viết</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-500">Lượt xem</p>
                  <p className="text-2xl font-bold text-gray-800">{post.views.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      </div>
    </ClientLayout>
  );
}

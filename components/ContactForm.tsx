'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean, message?: string} | null>(null);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Gửi email thông qua API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu và sẽ liên hệ lại trong thời gian sớm nhất.'
        });

        // Tắt form
        setIsFormDisabled(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });

        // Clear success message and enable form after 10 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          setIsFormDisabled(false);
        }, 10000);
      } else {
        throw new Error('Gửi thông tin thất bại');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus && (
        <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {submitStatus.message}
          {submitStatus.success && (
            <p className="text-sm mt-2 text-green-600">
              Form sẽ được kích hoạt lại sau 10 giây.
            </p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ tên *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isFormDisabled}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ${isFormDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            placeholder="Nguyễn Văn A"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            placeholder="example@company.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            placeholder="0901234567"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Công ty</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            placeholder="Tên công ty"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Dịch vụ quan tâm *</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="">-- Chọn dịch vụ --</option>
          <option value="sms-brandname">SMS Brandname</option>
          <option value="zns">Zalo Notification Service (ZNS)</option>
          <option value="otp">OTP Authentication</option>
          {/* <option value="email">Email Marketing</option> */}
          <option value="api">API Integration</option>
          {/* <option value="enterprise">Enterprise Solutions</option> */}
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nội dung *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
          placeholder="Mô tả nhu cầu của bạn..."
        ></textarea>
      </div>
      
      <div className="flex items-center">
        <input
          id="privacy"
          type="checkbox"
          required
          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
          Tôi đồng ý với <a href="#" className="text-primary-600 hover:underline">chính sách bảo mật</a> của Huy Tiến Technology
        </label>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting || isFormDisabled}
          className={`w-full py-3 px-6 text-white font-medium rounded-lg transition-colors ${
            isSubmitting || isFormDisabled ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {isSubmitting ? 'Đang gửi...' : isFormDisabled ? 'Đã gửi thành công' : 'Gửi yêu cầu'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

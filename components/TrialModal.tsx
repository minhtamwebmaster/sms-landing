'use client';

import React, { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'sms-brandname',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success?: boolean, message?: string} | null>(null);
  
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
      const response = await fetch('/api/trial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'trial'
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong vòng 24h để kích hoạt tài khoản dùng thử.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'sms-brandname',
          message: ''
        });

        // Close modal after 3 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          onClose();
        }, 3000);
      } else {
        throw new Error('Đăng ký thất bại');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <MessageSquare className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Đăng ký dùng thử miễn phí</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Trải nghiệm miễn phí dịch vụ SMS Brandname và ZNS trong 7 ngày với 100 tin nhắn miễn phí.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitStatus && (
              <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="trial-name" className="block text-sm font-medium text-gray-700 mb-1">Họ tên *</label>
                <input
                  type="text"
                  id="trial-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              
              <div>
                <label htmlFor="trial-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="trial-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="example@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="trial-phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                <input
                  type="tel"
                  id="trial-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="0901234567"
                />
              </div>
              
              <div>
                <label htmlFor="trial-company" className="block text-sm font-medium text-gray-700 mb-1">Công ty</label>
                <input
                  type="text"
                  id="trial-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tên công ty"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="trial-service" className="block text-sm font-medium text-gray-700 mb-1">Dịch vụ muốn dùng thử *</label>
              <select
                id="trial-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="sms-brandname">SMS Brandname</option>
                <option value="zns">Zalo Notification Service (ZNS)</option>
                <option value="both">Cả SMS Brandname và ZNS</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="trial-message" className="block text-sm font-medium text-gray-700 mb-1">Mô tả nhu cầu sử dụng</label>
              <textarea
                id="trial-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Mô tả ngắn gọn về nhu cầu sử dụng dịch vụ..."
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                id="trial-privacy"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="trial-privacy" className="ml-2 block text-sm text-gray-700">
                Tôi đồng ý với <a href="#" className="text-primary-600 hover:underline">điều khoản sử dụng</a> và <a href="#" className="text-primary-600 hover:underline">chính sách bảo mật</a>
              </label>
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-3 px-4 text-white font-medium rounded-lg transition-colors ${
                  isSubmitting ? 'bg-primary-400' : 'bg-primary-600 hover:bg-primary-700'
                }`}
              >
                {isSubmitting ? 'Đang xử lý...' : 'Đăng ký dùng thử'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrialModal;

import React from 'react';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Liên hệ với chúng tôi</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Thông tin liên hệ</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Địa chỉ</h4>
                    <p className="text-gray-600 text-sm">Số 32, Khu H2, Đường DN7, Phường Tân Hưng Thuận, Quận 12, TP Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Điện thoại</h4>
                    <p className="text-gray-600 text-sm">0777046035 (Mr. Huy)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600 text-sm">kinhdoanh@huytien.vn</p>
                    <p className="text-gray-600 text-sm">MST: 0318281313</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-3">Liên hệ nhanh</h4>
                <div className="space-y-2">
                  <a
                    href="tel:0777046035"
                    className="flex items-center p-2 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-700">Gọi ngay</span>
                  </a>
                  <a
                    href="mailto:kinhdoanh@huytien.vn"
                    className="flex items-center p-2 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 text-primary-600 mr-2" />
                    <span className="text-gray-700">Gửi email</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Gửi yêu cầu tư vấn</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

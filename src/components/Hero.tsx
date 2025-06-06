import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenTrialModal?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Nâng tầm truyền thông doanh nghiệp với SMS Brandname & ZNS
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Giải pháp truyền thông hiệu quả, chuyên nghiệp giúp doanh nghiệp kết nối với khách hàng mọi lúc, mọi nơi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenTrialModal}
                className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                Đăng ký dùng thử
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="SMS Brandname và ZNS" 
                  className="rounded-xl w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full h-3 w-3 mt-1.5 mr-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Thông báo giao dịch</p>
                    <p className="text-sm text-gray-600">Giao dịch thành công: 2.000.000đ đã được chuyển vào tài khoản của bạn.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

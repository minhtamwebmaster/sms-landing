import React, { useState } from 'react';
import { Search, Calendar, User, Tag, ChevronRight, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Mail, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const News: React.FC = () => {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Categories
  const categories = [
    "Tất cả",
    "Cập nhật dịch vụ",
    "Hướng dẫn sử dụng",
    "Xu hướng thị trường",
    "Case studies"
  ];

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Cập nhật tính năng mới: Phân tích hiệu quả chiến dịch SMS theo thời gian thực",
      excerpt: "Khám phá tính năng phân tích mới giúp doanh nghiệp theo dõi hiệu quả chiến dịch SMS Brandname theo thời gian thực với các chỉ số chi tiết.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Cập nhật dịch vụ",
      author: "Nguyễn Văn Nam",
      date: "15/05/2023",
      readTime: "5 phút đọc",
      featured: true,
      views: 1245
    },
    {
      id: 2,
      title: "Hướng dẫn tích hợp API SMS Brandname với hệ thống CRM của doanh nghiệp",
      excerpt: "Bài viết hướng dẫn chi tiết cách tích hợp API SMS Brandname với các hệ thống CRM phổ biến để tự động hóa quy trình gửi tin nhắn.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Hướng dẫn sử dụng",
      author: "Trần Minh Tuấn",
      date: "02/05/2023",
      readTime: "8 phút đọc",
      featured: false,
      views: 876
    },
    {
      id: 3,
      title: "Xu hướng sử dụng ZNS trong ngành bán lẻ năm 2023",
      excerpt: "Phân tích các xu hướng mới nhất trong việc sử dụng Zalo Notification Service (ZNS) trong ngành bán lẻ và thương mại điện tử.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Xu hướng thị trường",
      author: "Lê Thị Hương",
      date: "28/04/2023",
      readTime: "6 phút đọc",
      featured: false,
      views: 1032
    },
    {
      id: 4,
      title: "Case Study: Ngân hàng ABC tăng 40% tỷ lệ mở tin nhắn với SMS Brandname",
      excerpt: "Nghiên cứu trường hợp về cách Ngân hàng ABC đã cải thiện đáng kể tỷ lệ mở tin nhắn thông qua chiến dịch SMS Brandname được tối ưu hóa.",
      image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Case studies",
      author: "Phạm Thanh Hà",
      date: "15/04/2023",
      readTime: "7 phút đọc",
      featured: false,
      views: 1542
    },
    {
      id: 5,
      title: "5 chiến lược tối ưu nội dung SMS Marketing để tăng tỷ lệ chuyển đổi",
      excerpt: "Khám phá các chiến lược hiệu quả để tối ưu hóa nội dung tin nhắn SMS Marketing, giúp tăng tỷ lệ chuyển đổi và ROI cho chiến dịch của bạn.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Xu hướng thị trường",
      author: "Nguyễn Thị Mai",
      date: "05/04/2023",
      readTime: "6 phút đọc",
      featured: false,
      views: 2134
    },
    {
      id: 6,
      title: "Cập nhật quan trọng: Tính năng bảo mật hai lớp cho tài khoản quản trị",
      excerpt: "Thông báo về việc triển khai tính năng xác thực hai yếu tố cho tài khoản quản trị, nâng cao bảo mật cho dịch vụ SMS Brandname và ZNS.",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Cập nhật dịch vụ",
      author: "Trần Văn Bình",
      date: "28/03/2023",
      readTime: "4 phút đọc",
      featured: false,
      views: 765
    },
    {
      id: 7,
      title: "Hướng dẫn sử dụng tính năng phân khúc khách hàng trong chiến dịch SMS",
      excerpt: "Cách sử dụng hiệu quả tính năng phân khúc khách hàng để tạo các chiến dịch SMS có mục tiêu và cá nhân hóa cao hơn.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Hướng dẫn sử dụng",
      author: "Lê Văn Dũng",
      date: "15/03/2023",
      readTime: "9 phút đọc",
      featured: false,
      views: 1432
    }
  ];

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || 
                           selectedCategory === "Tất cả" || 
                           post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);

  // Get most popular posts (based on views)
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);

  // Get recent posts
  const recentPosts = [...blogPosts].sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('');
    const dateB = b.date.split('/').reverse().join('');
    return dateB.localeCompare(dateA);
  }).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Tin tức & Bài viết</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Cập nhật thông tin mới nhất về dịch vụ, hướng dẫn sử dụng và xu hướng thị trường SMS Brandname và ZNS
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search and Filter */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Tìm kiếm bài viết..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  <div className="md:w-48">
                    <button 
                      onClick={() => setShowFilters(!showFilters)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Filter className="h-5 w-5" />
                      <span>Lọc bài viết</span>
                    </button>
                  </div>
                </div>

                {showFilters && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="font-medium mb-3">Danh mục:</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category === "Tất cả" ? null : category)}
                          className={`px-4 py-2 rounded-full text-sm ${
                            (category === "Tất cả" && selectedCategory === null) || category === selectedCategory
                              ? "bg-primary-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Featured Post */}
              {featuredPost && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                        Nổi bật
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {featuredPost.category}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <a 
                      href={`/news/${featuredPost.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Đọc tiếp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}

              {/* Post Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {filteredPosts.filter(post => !post.featured).map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-medium">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">{post.author}</span>
                        </div>
                        <a 
                          href={`/news/${post.id}`}
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                        >
                          Đọc tiếp
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <nav className="inline-flex rounded-md shadow">
                  <a href="#" className="py-2 px-4 border border-gray-300 bg-white rounded-l-md hover:bg-gray-50">
                    Trước
                  </a>
                  <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-primary-600 text-white">
                    1
                  </a>
                  <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white hover:bg-gray-50">
                    2
                  </a>
                  <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white hover:bg-gray-50">
                    3
                  </a>
                  <a href="#" className="py-2 px-4 border border-gray-300 bg-white rounded-r-md hover:bg-gray-50">
                    Tiếp
                  </a>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Newsletter Signup */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Đăng ký nhận bản tin</h3>
                <p className="text-gray-600 mb-4">
                  Nhận các bài viết mới nhất và cập nhật dịch vụ trực tiếp vào hộp thư của bạn.
                </p>
                <form className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Đăng ký ngay
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                  Bằng cách đăng ký, bạn đồng ý với Chính sách bảo mật của chúng tôi.
                </p>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Danh mục</h3>
                <ul className="space-y-2">
                  {categories.filter(cat => cat !== "Tất cả").map((category) => (
                    <li key={category}>
                      <a 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCategory(category);
                        }}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50"
                      >
                        <span className="text-gray-700">{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bài viết phổ biến</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-20 h-20">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1 line-clamp-2">
                          <a href={`/news/${post.id}`} className="hover:text-primary-600">
                            {post.title}
                          </a>
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bài viết mới nhất</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-20 h-20">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1 line-clamp-2">
                          <a href={`/news/${post.id}`} className="hover:text-primary-600">
                            {post.title}
                          </a>
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Theo dõi chúng tôi</h3>
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
                  <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Article Section */}
      <section className="bg-primary-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Chia sẻ kiến thức của bạn</h2>
              <p className="text-gray-600">
                Bạn có kinh nghiệm về SMS Marketing hoặc ZNS? Chia sẻ với cộng đồng của chúng tôi.
              </p>
            </div>
            <a 
              href="#"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Gửi bài viết
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;

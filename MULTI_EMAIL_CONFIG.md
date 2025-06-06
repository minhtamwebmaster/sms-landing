# Cấu hình nhận email từ nhiều địa chỉ

## 📧 **Các loại email được hỗ trợ:**

### **1. TO (Email chính)**
```bash
CONTACT_EMAIL=kinhdoanh@huytien.vn,admin@huytien.vn,support@huytien.vn
```
- **Mục đích**: Email chính nhận thông báo
- **Hiển thị**: Tất cả người nhận đều thấy được
- **Sử dụng**: Cho team chính xử lý khách hàng

### **2. CC (Carbon Copy)**
```bash
EMAIL_CC=manager@huytien.vn,backup@huytien.vn
```
- **Mục đích**: Nhận bản sao để theo dõi
- **Hiển thị**: Tất cả người nhận đều thấy được
- **Sử dụng**: Cho quản lý, giám sát

### **3. BCC (Blind Carbon Copy)**
```bash
EMAIL_BCC=archive@huytien.vn,ceo@huytien.vn
```
- **Mục đích**: Nhận bản sao ẩn
- **Hiển thị**: Chỉ người gửi biết, người khác không thấy
- **Sử dụng**: Cho lưu trữ, báo cáo cấp cao

## ⚙️ **Cấu hình Environment Variables:**

### **Development (.env.local):**
```bash
# Email chính (hiển thị công khai)
CONTACT_EMAIL=kinhdoanh@huytien.vn,admin@huytien.vn

# CC - Bản sao (tùy chọn)
EMAIL_CC=manager@huytien.vn

# BCC - Bản sao ẩn (tùy chọn)
EMAIL_BCC=archive@huytien.vn
```

### **Production (.env.production.local):**
```bash
# Email chính
CONTACT_EMAIL=kinhdoanh@huytien.vn,admin@huytien.vn,support@huytien.vn

# CC emails
EMAIL_CC=manager@huytien.vn,backup@huytien.vn

# BCC emails
EMAIL_BCC=archive@huytien.vn,ceo@huytien.vn
```

## 🎯 **Ví dụ phân chia vai trò:**

### **Scenario 1: Startup nhỏ**
```bash
CONTACT_EMAIL=info@company.com
EMAIL_CC=founder@company.com
EMAIL_BCC=archive@company.com
```

### **Scenario 2: Công ty vừa**
```bash
CONTACT_EMAIL=sales@company.com,support@company.com
EMAIL_CC=manager@company.com,marketing@company.com
EMAIL_BCC=ceo@company.com,archive@company.com
```

### **Scenario 3: Doanh nghiệp lớn**
```bash
CONTACT_EMAIL=sales@company.com,support@company.com,crm@company.com
EMAIL_CC=sales-manager@company.com,support-manager@company.com
EMAIL_BCC=director@company.com,analytics@company.com,backup@company.com
```

## 🔧 **Cách hoạt động:**

### **Khi khách hàng gửi form:**
1. **TO emails**: Nhận email ngay lập tức, xử lý khách hàng
2. **CC emails**: Nhận bản sao, theo dõi và hỗ trợ
3. **BCC emails**: Nhận bản sao ẩn, phân tích và lưu trữ

### **Email template sẽ hiển thị:**
```
To: kinhdoanh@huytien.vn, admin@huytien.vn
CC: manager@huytien.vn
BCC: [ẩn]
Subject: [SMS Brandname] Yêu cầu liên hệ từ Nguyễn Văn A
```

## 📝 **Lưu ý quan trọng:**

### **1. Format email:**
- Cách nhau bằng dấu **phẩy** (,)
- Không có khoảng trắng thừa
- Email phải hợp lệ

### **2. Giới hạn:**
- **TO**: Tối đa 10 emails (khuyến nghị 3-5)
- **CC**: Tối đa 5 emails
- **BCC**: Tối đa 10 emails

### **3. Bảo mật:**
- BCC emails không hiển thị cho người khác
- Sử dụng BCC cho emails nhạy cảm
- Không để email cá nhân trong TO/CC

## 🚀 **Test cấu hình:**

### **1. Development:**
```bash
npm run dev
# Test form submission
```

### **2. Production:**
```bash
npm run build
npm start
# Test với email thật
```

### **3. Kiểm tra logs:**
```bash
# Xem console logs để debug
console.log('Sending to:', contactEmails);
console.log('CC:', ccEmails);
console.log('BCC:', bccEmails);
```

## 📊 **Monitoring:**

### **Theo dõi email delivery:**
- Kiểm tra spam folder
- Verify email addresses
- Monitor bounce rates
- Check delivery status

**Cấu hình này cho phép bạn nhận thông tin khách hàng từ nhiều email với vai trò khác nhau!**

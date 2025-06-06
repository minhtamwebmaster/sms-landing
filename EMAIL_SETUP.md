# Hướng dẫn cấu hình Email cho SMS Landing Page

## 1. Cấu hình Gmail SMTP

### Bước 1: Bật 2-Factor Authentication
1. Truy cập [Google Account Security](https://myaccount.google.com/security)
2. Bật "2-Step Verification"

### Bước 2: Tạo App Password
1. Truy cập [App Passwords](https://myaccount.google.com/apppasswords)
2. Chọn "Mail" và "Other (Custom name)"
3. Nhập tên: "SMS Landing Page"
4. Copy mật khẩu ứng dụng được tạo

### Bước 3: Cập nhật file .env.local
```bash
# Thay đổi các giá trị này
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
CONTACT_EMAIL=your-email@gmail.com
```

## 2. Test Email Function

### Kiểm tra API endpoints:
- Contact Form: `POST /api/contact`
- Trial Form: `POST /api/trial`

### Test với curl:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0901234567",
    "company": "Test Company",
    "service": "sms-brandname",
    "message": "This is a test message"
  }'
```

## 3. Tính năng đã implement

### ContactForm:
- ✅ Gửi email khi submit
- ✅ Tắt form sau khi gửi thành công
- ✅ Hiển thị thông báo thành công/lỗi
- ✅ Reset form sau 10 giây
- ✅ Validation đầy đủ

### TrialModal:
- ✅ Gửi email đăng ký dùng thử
- ✅ Tắt modal sau khi gửi thành công
- ✅ Email template đặc biệt cho trial
- ✅ Thông tin gói dùng thử

## 4. Email Templates

### Contact Email:
- Thông tin khách hàng đầy đủ
- Dịch vụ quan tâm
- Nội dung yêu cầu
- Thời gian gửi

### Trial Email:
- Thông tin đăng ký dùng thử
- Dịch vụ muốn test
- Gói dùng thử chi tiết
- Cảnh báo cần xử lý trong 24h

## 5. Security Features

- ✅ Validation input
- ✅ Rate limiting (có thể thêm)
- ✅ Environment variables
- ✅ Error handling
- ✅ CORS protection

## 6. Troubleshooting

### Lỗi thường gặp:
1. **"Invalid login"**: Kiểm tra App Password
2. **"Connection timeout"**: Kiểm tra firewall/network
3. **"Authentication failed"**: Đảm bảo 2FA đã bật

### Debug:
- Kiểm tra console logs
- Verify .env.local variables
- Test với email khác

import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin bắt buộc' },
        { status: 400 }
      );
    }

    // Create transporter (sử dụng Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Email của bạn
        pass: process.env.EMAIL_PASS, // App password của Gmail
      },
    });

    // Parse multiple emails from environment variables
    const contactEmails = process.env.CONTACT_EMAIL?.split(',').map(email => email.trim()) || [process.env.EMAIL_USER];
    const ccEmails = process.env.EMAIL_CC?.split(',').map(email => email.trim()).filter(Boolean) || [];
    const bccEmails = process.env.EMAIL_BCC?.split(',').map(email => email.trim()).filter(Boolean) || [];

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contactEmails, // Email chính
      cc: ccEmails.length > 0 ? ccEmails : undefined, // CC emails
      bcc: bccEmails.length > 0 ? bccEmails : undefined, // BCC emails
      subject: `[SMS Brandname] Đăng ký dùng thử từ ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            🎉 Đăng ký dùng thử mới
          </h2>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="color: #1e40af; margin-top: 0;">Thông tin khách hàng:</h3>
            <p><strong>Họ tên:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Số điện thoại:</strong> ${phone}</p>
            <p><strong>Công ty:</strong> ${company || 'Không có'}</p>
            <p><strong>Dịch vụ muốn dùng thử:</strong> ${service}</p>
          </div>
          
          ${message ? `
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-top: 0;">Mô tả nhu cầu:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>⏰ Cần xử lý:</strong> Kích hoạt tài khoản dùng thử trong vòng 24h
            </p>
            <p style="margin: 5px 0 0 0; color: #92400e; font-size: 14px;">
              <strong>📅 Thời gian đăng ký:</strong> ${new Date().toLocaleString('vi-VN')}
            </p>
            <p style="margin: 5px 0 0 0; color: #92400e; font-size: 14px;">
              <strong>📞 Liên hệ:</strong> kinhdoanh@huytien.vn | 0777046035 (Mr. Huy)
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
            <h4 style="color: #065f46; margin-top: 0;">Gói dùng thử bao gồm:</h4>
            <ul style="color: #065f46; margin: 0;">
              <li>7 ngày sử dụng miễn phí</li>
              <li>100 tin nhắn miễn phí</li>
              <li>Hỗ trợ kỹ thuật 24/7</li>
              <li>Tài liệu hướng dẫn chi tiết</li>
            </ul>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Đăng ký dùng thử đã được gửi thành công' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending trial email:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi gửi đăng ký dùng thử' },
      { status: 500 }
    );
  }
}

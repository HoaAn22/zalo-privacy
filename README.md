# zalo-privacy

**Zalo Privacy** là một tiện ích mở rộng (Browser Extension) dành cho trình duyệt web, được thiết kế để bảo vệ quyền riêng tư của bạn khi sử dụng Zalo Web ở nơi công cộng, quán cà phê hoặc văn phòng làm việc.

### Tính năng chính
- **Chống nhìn trộm (Shoulder Surfing Protection):** Tự động làm mờ nội dung tin nhắn, tên người liên hệ và ảnh đại diện trên giao diện Zalo Web.
- **Hiển thị khi tương tác (Hover to Reveal):** Nội dung bị mờ sẽ tự động hiển thị rõ ràng khi bạn di chuột (hover) vào chính xác khu vực đó.
- **Bật/Tắt linh hoạt:** Bảng điều khiển nhỏ (Popup) giúp bạn nhanh chóng bật hoặc tắt chế độ bảo mật chỉ với một cú nhấp chuột.

### Hướng dẫn cài đặt (Chế độ Nhà phát triển)
1. Tải về hoặc clone mã nguồn này từ GitHub: 
   ```bash
   git clone https://github.com/hoaan22/zalo-privacy.git
   ```
2. Mở trình duyệt Chrome hoặc Edge, truy cập trang Quản lý tiện ích: `chrome://extensions/` (hoặc `edge://extensions/`).
3. Bật **Chế độ dành cho nhà phát triển (Developer mode)** ở góc trên cùng bên phải.
4. Nhấp vào nút **Tải tiện ích đã giải nén (Load unpacked)**.
5. Chọn thư mục `zalo-privacy` chứa mã nguồn mà bạn vừa tải về.

### Cấu trúc dự án
- `manifest.json`: Tệp cấu hình gốc, khai báo quyền hạn và thông tin của tiện ích.
- `content.js`: Chứa mã JavaScript thực thi tác vụ **Thao tác Mô hình Đối tượng Tài liệu (DOM Manipulation)** nhằm quét và can thiệp vào các thành phần trên trang.
- `popup.html` / `popup.js`: Giao diện và logic của bảng điều khiển bật/tắt trên thanh công cụ trình duyệt.
- `styles.css`: Chứa các quy tắc tạo kiểu, sử dụng thuộc tính CSS `filter: blur()` để tạo hiệu ứng làm mờ.

---

**Zalo Privacy** is a browser extension designed to protect your privacy while using Zalo Web in public spaces, cafes, or at the office.

### Key Features
- **Shoulder Surfing Protection:** Automatically blurs message contents, contact names, and avatars on the Zalo Web interface.
- **Hover to Reveal:** The blurred content temporarily reveals itself only when you hover your mouse cursor over the specific area.
- **Quick Toggle:** A convenient popup interface allows you to easily enable or disable privacy mode with a single click.

### Installation Guide (Developer Mode)
1. Download or clone this repository from GitHub:
   ```bash
   git clone https://github.com/hoaan22/zalo-privacy.git
   ```
2. Open your Chromium-based browser (Chrome, Edge) and navigate to the Extensions page: `chrome://extensions/` (or `edge://extensions/`).
3. Enable **Developer mode** in the top right corner.
4. Click on the **Load unpacked** button.
5. Select the extracted `zalo-privacy` folder containing the source code.

### 🛠 Repository Structure
- `manifest.json`: The core configuration file detailing extension permissions and metadata.
- `content.js`: Contains the JavaScript logic for **DOM Manipulation (Document Object Model Manipulation)** to scan and alter page elements.
- `popup.html` / `popup.js`: The UI and logic for the extension's toggle menu on the browser toolbar.
- `styles.css`: CSS rules applying the `filter: blur()` property to create the blurring effect on Zalo elements.

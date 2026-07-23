document.addEventListener('DOMContentLoaded', () => {
    // Giá trị mặc định
    const defaultSettings = {
        blurAvatar: false,
        blurName: false,
        blurMessage: true
    };

    const toggleAvatar = document.getElementById('blurAvatar');
    const toggleName = document.getElementById('blurName');
    const toggleMessage = document.getElementById('blurMessage');
    const masterToggle = document.getElementById('masterToggle');
    const masterLabel = document.getElementById('masterLabel'); // CẬP NHẬT: Lấy thẻ chứa text

    // Hàm kiểm tra và cập nhật đồng bộ trạng thái Master Switch
    const syncMasterToggle = () => {
        // Kiểm tra xem cả 3 thành phần có đang được bật hay không
        const allChecked = toggleAvatar.checked && toggleName.checked && toggleMessage.checked;
        masterToggle.checked = allChecked;
        
        // CẬP NHẬT LOGIC CHỮ: Khóa hết -> Mở nhanh | Chưa khóa hết -> Khóa nhanh
        masterLabel.textContent = allChecked ? "Mở nhanh" : "Khóa nhanh";
    };

    // Đọc trạng thái từ Storage để hiển thị lúc đầu
    chrome.storage.local.get(defaultSettings, (result) => {
        toggleAvatar.checked = result.blurAvatar;
        toggleName.checked = result.blurName;
        toggleMessage.checked = result.blurMessage;
        syncMasterToggle(); // Chạy hàm để gán chữ ngay khi vừa mở bảng điều khiển
    });

    // Bắt sự kiện khi trực tiếp gạt nút Master
    masterToggle.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        
        // Gán trạng thái nút Master cho 3 nút con
        toggleAvatar.checked = isChecked;
        toggleName.checked = isChecked;
        toggleMessage.checked = isChecked;

        // Cập nhật lại giao diện chữ ngay lập tức
        masterLabel.textContent = isChecked ? "Mở nhanh" : "Khóa nhanh";

        // Lưu trạng thái
        chrome.storage.local.set({
            blurAvatar: isChecked,
            blurName: isChecked,
            blurMessage: isChecked
        });
    });

    // Hàm xử lý sự kiện khi gạt các nút lẻ
    const handleIndividualChange = () => {
        syncMasterToggle(); // Gọi hàm này để tự động tính toán lại cái nút Master và Chữ
        
        chrome.storage.local.set({
            blurAvatar: toggleAvatar.checked,
            blurName: toggleName.checked,
            blurMessage: toggleMessage.checked
        });
    };

    toggleAvatar.addEventListener('change', handleIndividualChange);
    toggleName.addEventListener('change', handleIndividualChange);
    toggleMessage.addEventListener('change', handleIndividualChange);
});
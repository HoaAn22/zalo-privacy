const defaultSettings = {
    blurAvatar: false,
    blurName: false,
    blurMessage: true
};

// Hàm áp dụng (hoặc gỡ) class trên body dựa trên cấu hình
function applyClasses(settings) {
    document.body.classList.toggle('blur-avatar', settings.blurAvatar);
    document.body.classList.toggle('blur-name', settings.blurName);
    document.body.classList.toggle('blur-message', settings.blurMessage);
}

// Thiết lập trạng thái ngay khi trang vừa tải
chrome.storage.local.get(defaultSettings, function(result) {
    applyClasses(result);
});

// Lắng nghe sự thay đổi trạng thái từ Bảng điều khiển (Popup)
chrome.storage.onChanged.addListener(function(changes) {
    chrome.storage.local.get(defaultSettings, function(result) {
        applyClasses(result);
    });
});
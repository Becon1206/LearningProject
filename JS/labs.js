document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".content-container");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Lấy target từ data-target
            const targetId = this.getAttribute("data-target");

            // Ẩn tất cả nội dung
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Hiển thị nội dung được chọn
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }

            // Đặt liên kết sidebar thành active
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

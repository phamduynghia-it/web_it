document.querySelectorAll('.image-thumbnails img').forEach(item => {
    item.addEventListener('mouseenter', event => {
        const mainImage = document.getElementById('mainImage');
        mainImage.src = item.dataset.full; // Sử dụng thuộc tính data-full để thay đổi ảnh lớn
    });
});

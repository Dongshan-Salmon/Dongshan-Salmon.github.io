// ---- 原有的平滑滾動功能 ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ---- 新增的滾動觸發動畫功能 ----

// 1. 設定觀察員
const observer = new IntersectionObserver((entries) => {
    // entries 是一個包含所有被觀察元素的陣列
    entries.forEach(entry => {
        // 檢查元素是否進入可視區域
        if (entry.isIntersecting) {
            // 如果是，就為該元素加上 'is-visible' class
            entry.target.classList.add('is-visible');
        } else {
            // 如果離開，就移除 class，這樣再次滾回來時動畫會重播
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    // 觀察選項：當元素可見度達到 10% 時觸發
    threshold: 0.1
});

// 2. 選取所有需要被觀察的元素
const animatedElements = document.querySelectorAll('.project-card, .skills-list span');

// 3. 讓觀察員開始觀察每一個選中的元素
animatedElements.forEach(el => observer.observe(el));

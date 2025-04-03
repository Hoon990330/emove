document.addEventListener("DOMContentLoaded", function () {
    const emotionThemes = [
        { bg: "#fff9c4", text: "#000000" },  // happy
        { bg: "#f8bcbc", text: "#000000" },  // angry (light red)
        { bg: "#d0e0f0", text: "#000000" },  // sleepy
        { bg: "#ffe0e6", text: "#000000" },  // excited
        { bg: "#e0f2f1", text: "#000000" }   // relaxed
    ];

    // 방문 횟수 저장
    let visitCount = localStorage.getItem("visitCount");
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    localStorage.setItem("visitCount", visitCount);

    const themeIndex = (visitCount - 1) % emotionThemes.length;
    const theme = emotionThemes[themeIndex];

    // body 스타일에 적용
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;

    // overview 텍스트도 조정
    const overview = document.querySelector(".overview");
    if (overview) {
        overview.style.color = theme.text;
    }

    // 강조 텍스트 색도 변경
    const strongs = document.querySelectorAll(".overview strong");
    strongs.forEach(strong => {
        strong.style.color = theme.text;
    });
});
// main.js

function redirectToMain() {
    window.location.href = "main.html";
}


// JavaScript를 사용하여 로그인 버튼 클릭 시 main.html로 이동
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 이벤트(폼 제출) 방지
    window.location.href = "main.html"; // 페이지 이동
});




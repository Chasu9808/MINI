// main.js

function redirectToMain() {
    window.location.href = "index.html";
}


// JavaScript를 사용하여 로그인 버튼 클릭 시 main.html로 이동
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 이벤트(폼 제출) 방지
    window.location.href = "indexlogin.html"; // 페이지 이동
});

function showText(textId) {
    var text = document.getElementById(textId);
    text.style.visibility = 'visible'; // 마우스 커서가 이미지 위에 있을 때 텍스트를 보이도록 설정
}

function hideText(textId) {
    var text = document.getElementById(textId);
    text.style.visibility = 'hidden'; // 마우스 커서가 이미지를 벗어났을 때 텍스트를 숨김
}






// main.js

function redirectToMain() {
    window.location.href = "main.html";
}


// JavaScript를 사용하여 로그인 버튼 클릭 시 main.html로 이동
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 이벤트(폼 제출) 방지
    window.location.href = "main.html"; // 페이지 이동
});

window.onload = function() {
    // 하위 항목 박스의 크기를 동적으로 조정
    adjustDropdownSize();
};

function adjustDropdownSize() {
    var dropdown = document.getElementById("gameListDropdown");
    var itemsCount = dropdown.getElementsByTagName("a").length;
    var itemWidth = 50; // 각 항목의 기본 너비

    // 하위 항목 박스의 너비를 항목 수에 따라 조정
    dropdown.style.width = (itemsCount * itemWidth) + "px";
}



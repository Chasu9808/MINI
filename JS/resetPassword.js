document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기

    var email = document.getElementById("email").value;
    
    // 비밀번호 재설정 이메일 전송
    sendResetEmail(email);
});

function sendResetEmail(email) {
    // 이 함수는 이메일을 전송하는 서버 측 코드로 대체되어야 합니다.
    console.log("임시 비밀번호를 " + email + " 주소로 전송했습니다.");

    // 이메일 전송 완료 알림창 띄우기
    alert("임시 비밀번호를 " + email + " 주소로 전송했습니다.");
}

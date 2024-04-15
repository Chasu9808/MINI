// notice.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('announcement-form');
    const announcementList = document.getElementById('announcement-list');
    const noticeBoard = document.getElementById('notice-board');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // 기본 이벤트 제거

        // 입력된 공지사항 가져오기
        const announcementInput = document.getElementById('announcement');
        const announcementText = announcementInput.value.trim();

        // 입력된 공지사항이 비어있는지 확인
        if (announcementText !== '') {
            // 새로운 리스트 아이템 생성
            const listItem = document.createElement('li');
            listItem.textContent = announcementText;

            // 리스트에 아이템 추가
            announcementList.appendChild(listItem);

            // 입력 필드 초기화
            announcementInput.value = '';

            // 공지사항을 밑의 박스에도 추가
            const noticeItem = document.createElement('div');
            noticeItem.classList.add('notice-item');
            noticeItem.textContent = announcementText;
            noticeBoard.appendChild(noticeItem);
        }
    });

    // 추가된 공지사항이 위의 입력창과 동일한 형식으로 아래쪽의 공지사항 리스트에 표시되도록 함
    announcementList.addEventListener('DOMNodeInserted', function (event) {
        if (event.target.tagName === 'LI') {
            const noticeItem = document.createElement('div');
            noticeItem.classList.add('notice-item');
            noticeItem.textContent = event.target.textContent;
            noticeBoard.appendChild(noticeItem);
        }
    });
});

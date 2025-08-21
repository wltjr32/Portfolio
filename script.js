// 이 파일은 현재 비어있어도 사이트 동작에 문제가 없습니다.
// 추후 애니메이션 등 동적인 기능을 추가할 때 사용합니다.

// 예시: 모든 내부 링크(#)에 대해 부드러운 스크롤 적용하기
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
'use strict';

//* DOM이 다 로딩되고 실행할 함수
window.addEventListener('DOMContentLoaded', () => {
    let cid = localStorage.getItem('cid')
    if(cid) {
        document.querySelector('h1').replaceChildren(`${cid} Welcome`)
        alert(`Hello! ${cid}`)
    }
})


let myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello world!'

function multiply(num1, num2) {
    return num1 * num2
}

function clickEventHandler() {
    alert('Ouch! Stop poking me!')
}


//* 경고 버튼
document.querySelector('.beforeBTN').onclick = () => { alert('Ouch! Stop poking me! ') }

//* 이미지 변경 버튼
document.querySelector('.imgChangerBTN').onclick = () => {
    let img = document.querySelector('img')
    let changedImg = img.getAttribute('src') == 'assets/homeImage.jpg' ? 'assets/changeImg.jpg' : 'assets/homeImage.jpg'
    img.setAttribute('src', changedImg)
}

//* 로그인 버튼
document.querySelector('.loginBTN').onclick = () => {
    if(!localStorage.getItem('cid')) {
        let str = prompt();
        str != null ? localStorage.setItem('cid', str) : prompt();
    }
    else {
        alert(`로그인 되어 있습니다 ${localStorage.getItem('cid')}`)
    }
}

//* 캐쉬 클리어 버튼
document.querySelector('.clearBTN').onclick = () => {
    localStorage.clear()
    alert('cleared!')
}
// Storage.setItem()


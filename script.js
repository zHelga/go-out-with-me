const wrapper = document.querySelector('.container');
const text = document.querySelector('.title');
const img = document.querySelector('.image');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

let wrapperRect = wrapper.getBoundingClientRect();
let noBtnRect = noBtn.getBoundingClientRect();
console.log(wrapperRect, noBtnRect)

noBtn.addEventListener('mouseover', moveBtn);
noBtn.addEventListener('click', moveBtn);

function moveBtn() {
	let i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
	let j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

	noBtn.style.left = i + 'px';
	noBtn.style.top = j + 'px';
	img.src = 'image/cry.gif';
}

function finished() {
	text.innerText = 'See you, Baby!!!';
	img.src = 'image/Twerk.gif';

	yesBtn.style.display = 'none';
	noBtn.style.display = 'none';
}

yesBtn.addEventListener('click', () => {
	text.innerText = 'Hooray!!!';
	img.src = 'image/heart.gif';
	setTimeout(finished, 3000);
})


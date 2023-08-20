const img = document.createElement('img');
img.src = './assets/images/cat.png';
document.body.appendChild(img);

const modal = document.createElement('section');
modal.classList.add('modal');
document.body.appendChild(modal);

const openBtn = document.createElement('button');
openBtn.textContent = 'Open';
openBtn.classList.add('open-btn');
document.body.appendChild(openBtn);

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

const modalImg = document.createElement('img');
modalImg.src = './assets/images/modal-cat.png';
modal.appendChild(modalImg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'Close';
closeBtn.classList.add('close-btn');
modal.appendChild(closeBtn);

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
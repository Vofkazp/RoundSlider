const arr = [
    {
        circ: "#DDFFBC",
        btn: "#5CAC0E",
        border: "#5CAC0E"
    },
    {
        circ: "#FEA150",
        btn: "#FEA150",
        border: "#FFFFFF"
    },
    {
        circ: "#FF8989",
        btn: "#FF8989",
        border: "#FFFFFF"
    }
];

const cont = document.querySelector('.container'),
    butn_left = cont.querySelector('.butn-left'),
    butn_right = cont.querySelector('.butn-right'),
    roll = cont.querySelector('.roll'),
    img_centr = cont.querySelector('.food-center'),
    num = 10,
    deg = 360 / num,
    wrap = 560,
    radius = wrap / 2;

let imgs = cont.querySelectorAll('.item-img'),
    i = 0,
    r = 0,
    k = 5;

if (imgs.length < 10) {
    createdImages();
} else if (imgs.length > 10) {
    deleteImgs();
}

arrangeImages();

butn_right.addEventListener('click', () => {
    (arr.length - 1 === i) ? i = 0 : i++;
    (k === imgs.length - 1) ? k = 0 : k++;
    r += deg;
    cont.style.cssText = `--circ_background: ${arr[i].circ}; --btn_color: ${arr[i].btn};--border: ${arr[i].border};`;
    roll.style.cssText = `transform: rotate(${r}deg);`;
    img_centr.setAttribute('src', imgs[k].getAttribute('src'));
});

butn_left.addEventListener('click', () => {
    (i === 0) ? i = arr.length - 1 : i--;
    (k === 0) ? k = imgs.length - 1 : k--;
    r -= deg;
    cont.style.cssText = `--circ_background: ${arr[i].circ}; --btn_color: ${arr[i].btn};--border: ${arr[i].border};`;
    roll.style.cssText = `transform: rotate(${r}deg);`;
    img_centr.setAttribute('src', imgs[k].getAttribute('src'));
});

function arrangeImages() {
    for (j = 0; j < num; j++) {
        let f = 2 / num * j * Math.PI;
        let left = radius + radius * Math.sin(f) - 10 + 'px';
        let top = radius + radius * Math.cos(f) - 10 + 'px';
        let g = 180 - (deg * j);
        imgs[j].style.cssText = `left: ${left}; top: ${top};transform: rotate(${g}deg);`;
    }
}

function createdImages() {
    const count = 10 - imgs.length;
    let f = 0;
    for (s = 0; count > s; s++) {
        let newImg = document.createElement("img");
        newImg.setAttribute('class', 'item-img');
        newImg.setAttribute('src', imgs[f].getAttribute('src'));
        insertAfter(newImg,  roll.lastElementChild);
        (f === imgs.length - 1) ? f = 0 : f++;
    }
    imgs = cont.querySelectorAll('.item-img');
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function deleteImgs() {
    for (d = 10; d < imgs.length; d++) {
        imgs[d].style.display = 'none';
    }
}

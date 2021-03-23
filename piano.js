function switchActiveDisplay(target) {
    if (target === 'notes') {
        document.getElementById('letters-tab').classList.remove('active');
        document.getElementById('notes-tab').classList.add('active');
        for (const element of document.getElementsByClassName('keyboardKey')) {
            element.style.display = 'none';
        }
        for (const element of document.getElementsByClassName('noteSign')) {
            element.style.display = 'block';
        }
    } else {
        document.getElementById('notes-tab').classList.remove('active');
        document.getElementById('letters-tab').classList.add('active');
        for (const element of document.getElementsByClassName('noteSign')) {
            element.style.display = 'none';
        }
        for (const element of document.getElementsByClassName('keyboardKey')) {
            element.style.display = 'block';
        }
    }
}

function playNote(note) {
    let filename = 'audio/' + note + '.mp3';
    new Audio(encodeURIComponent(filename)).play();
}

let isActive = false;

function activeBtn(button) {
    button.style.transform = 'scale(.95) translateY(-2.6%)';
    button.style.transition = '.2s';
    isActive = true;
}

function preActiveBtn(button) {
    if (isActive === true) {
        button.style.transform = 'scale(1)';
        button.style.transition = '.2s';
    }
}

let isActiveLetter = false;

function letterOn(e) {
    const log = document.getElementsByClassName('keyboardKey');
    document.addEventListener('keyup', logKey);
    log.textContent += ` ${e.code}`;
}
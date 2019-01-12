var input = document.getElementById('input-length'),
    btn = document.getElementById('btn-submit'),
    table = document.getElementById('emoji-table'),
    tr = document.getElementsByTagName('tr'),
    type = document.getElementById('type-show'),
    react = '<img class="img-emoji" src="images/react.png"/>',
    cool = '<img class="img-emoji" src="images/cool.png"/>',
    element = '';

function submit() {
    if (type.value == '' || type.value == null) {
        alert('Select Type First !')
    } else if (input.value == '' || input.value == null) {
        alert('Enter Number First !')
    } else {
        loopElementTable(input.value)
    }

}

function loopElementTable(input) {
    if (tr.length > 0) {
        element = '';
    }
    for (let i = 0; i < input; i++) {
        element += '<tr>'
        createColumnElement(input, i)
        element += '</tr>'
        table.innerHTML = element
    }

}

function createColumnElement(input, i) {
    for (let j = 0; j < input; j++) {
        element += '<td>'
        element += checkType(j, i)
        element += '</td>'
    }
}

function checkType(j, i) {

    if (type.value == 1) {
        if (j > i) {
            return react
        } else {
            return cool
        }
    } else if (type.value == 2) {
        if (j < i) {
            return react
        } else {
            return cool
        }
    }

}
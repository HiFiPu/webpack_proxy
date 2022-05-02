import _ from 'lodash';
import printMe from './print.js';
import './style.scss'
import './style.less'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'Bable'], ' ');
    element.classList.add('header')
    btn.innerHTML = '--登录按钮--';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
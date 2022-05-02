import _ from 'lodash';
import './style.css';
import Img01 from '../imgs/2.png'
import '../font/iconfont.css'
import Data from './data.xml'
import Notes from './data.csv'
import DataJson from './v03data.json'
import toml from './data.toml'
import yaml from './data.yaml'
import json from './data.json5'
console.log('------toml--------')
console.log(toml.title)
console.log(toml.owner.name)
console.log('------yaml--------')
console.log(yaml.title)
console.log(yaml.owner.name)
console.log('------json--------')
console.log(json.title)
console.log(json.owner.name)

function component() {
    const element = document.createElement('div');
    const span = document.createElement('span');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('test');
    span.classList.add('iconfont');
    span.classList.add('icon-tuichu');
    const myImg = new Image()
    myImg.src = Img01
    element.appendChild(myImg)
    element.appendChild(span)
    console.log(Data)
    console.log('-------------')
    console.log(Notes)
    console.log('-------------')
    console.log(DataJson)
    return element;
}

document.body.appendChild(component());
import React, { Component } from 'react'
import './style.less'
export default class index extends Component {
    componentDidMount(){
        let Divhover = document.querySelector('.divhover')
        let Inner = document.querySelector('.inner')
        // setTimeout() 指的是经过多长时间后执行
        // setInterval() 每隔指定的时间执行
        Divhover.addEventListener('mouseover',()=>{
        let tim = setTimeout(()=>{
            Inner.style.display = "block"
        },1000)
       })
       Divhover.addEventListener('mouseout',()=>{
        let tim = setTimeout(()=>{
            Inner.style.display = "none"
        },2000)
       })
    }
    render() {
        return (
            <div>
                <div className='divhover'>
                    <div className="inner"><span>xxxxx</span></div>
                </div>
            </div>
        )
    }
}

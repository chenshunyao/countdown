import React, { Component } from 'react';
import FormatTime from '../utils/FormatTime';
import Button from './Button';
import DisplayLog from './DisplayLog';

class TimeDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:0,
            on:false,
            log:[]
        };
    }
    //开始/暂停
    handToggle = () =>{
        if(this.state.on){
            clearInterval(this.timer);
        }else{
            this.timer=setInterval(() => this.setState({time:this.state.time+1}),10);
        }
        this.setState({on:!this.state.on});
    }
    //重置
    handReset= ()=>{
        this.setState({time:0});
    }
    //记录log
    handLog = ()=>{
        this.state.log.push(this.state.time);
    }
    //清空日志
    handClear=()=>{
        this.setState({log:[]});
    }

    render(){
        var time = FormatTime(this.state.time);
        return <div>
            <h1 className="display-time">{time}</h1>
            <div className="controls">
                <Button className={this.state.on ? "danger":"success"} text={this.state.on ? "暂停":"开始"} onClick={this.handToggle}/>
                <Button className="reset" text="重置" onClick={this.handReset} />
                <Button className="logRecord" text="记录" onClick={this.handLog} />
                <Button className="clearLog" text="清空" onClick={this.handClear} />
            </div>
            <DisplayLog log={this.state.log} />
        </div>;
    }
    //监听键盘事件
    componentDidMount(){
        //内置对象
        window.addEventListener('keydown',e=>e.preventDefault());
        window.addEventListener('keyup',e=>{
            e.preventDefault();
            switch(e.keyCode){
                case 32:
                    this.handToggle();
                    break;
                case 82:
                    this.handReset();
                    break;
                case 13:
                    this.handLog();
                    break;
                case 67:
                    this.handClear();
                    break;
                default:
                    break;
            }
        })
    }
    //组件移除，事情监听取消
    componentWillUnmount(){
        window.removeEventListener('keydown');
        window.removeEventListener('keyup');
    }
}
export default TimeDisplay;
/**
 * Created by Administrator on 2017/4/3.
 */
import React,{Component} from 'react';
class Button extends Component{
    static defaultProps = {
        onClick:null,
        className:'',
        text:'默认'
    };
    render(){
        return <button className={'Button ${this.props.className}'} onClick={this.props.onClick}>{this.props.text}</button>;
    }
}
export default Button;
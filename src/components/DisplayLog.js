import React,{Component} from 'react';
import FormatTime from '../utils/FormatTime';

class DisplayLog extends Component{
    renderEmpty =() =>{
        return <span className="empty-log">空空如也</span>;
    }
    renderLog =() =>{
        return this.props.log.map(item => {
            return <li key={item.id} className="log-item">{FormatTime(item)}</li>
        });
    }
    render(){
        var log = this.props.log.length === 0 ? this.renderEmpty() : this.renderLog();
        return <ul className="log">
                {log}
            </ul>;
    }
}
export default DisplayLog;
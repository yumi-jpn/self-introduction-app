import React from 'react';
import { Link } from 'react-router-dom';

class Fantasy extends React.Component{
    render(){
        return (
            <div>
                絵本一覧<br/>
                {/* rootは仮置き */}
                <Link to='/'>単一話</Link> 
                <br/>
                <Link to='/'>トップページへ</Link>
                <br/>
            </div>
        )
    } 
}

export default Fantasy;
import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component{
    render(){
        return (
            <div>
                このサイトについて<br/>
                私について<br/>
                <Link to='/'>トップページへ</Link>
                <br/>
            </div>
        )
    } 
}

export default About;
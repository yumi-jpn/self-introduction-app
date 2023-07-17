import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component{
    render(){
        return (
            <div>
                お問い合わせフォーム<br/>
                <Link to='/'>トップページへ</Link>
                <br/>
            </div>
        )
    }
}

export default Contact;
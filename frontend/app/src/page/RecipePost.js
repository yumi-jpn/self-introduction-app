// 管理者のみアクセスできるページにする予定。
import React from 'react';
import { Link } from 'react-router-dom';

class RecipePost extends React.Component{
    render(){
        return (
            <div>
                <h2>レシピ投稿ページ</h2><br/>
                <Link to='/two' className='NoClassName'>唐揚げ</Link> 
                <br/>
                <Link to='/'>トップページへ</Link>
                <br/>
            </div>
        )
    } 
}

export default RecipePost;
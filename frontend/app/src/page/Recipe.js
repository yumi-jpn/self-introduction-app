import React from 'react';
import { Link } from 'react-router-dom';

class Recipe extends React.Component{
    render(){
        return (
            <div>
                <div className='RecipeTopImage'><h2>レシピ一覧</h2></div><br/>
                <Link to='/two' className='NoClassName'>唐揚げ</Link> 
                <br/>
                <Link to='/'>トップページへ</Link>
                <br/>
            </div>
        )
    } 
}

export default Recipe;
import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component{
    render(){
        return (
            <div className='MainBackground'>
                <div className='MainTopImage'></div>
                <div className='MainContents'>
                    <div className='EachTransitionPages'>
                        <Link to='/Recipe' className='RecipeImage'>料理 Recipe</Link>
                        <br/>
                        
                        {/* <Link to='/fantasy' className='FantasyImage'>絵本 Fantasy</Link>
                        <br/> */}
                        
                        <Link to='/about' className='AboutImage'>About</Link>
                        <br/>
                        
                        {/* <Link to='/contact' className='ContactImage'>Contact</Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
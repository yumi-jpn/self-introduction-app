import React from 'react'
import { Link } from 'react-router-dom';

const AllPageLinks = () => {
  return (
    <div>
      <Link to='/'>Top</Link>
      <Link to='/Recipe'>Recipe</Link>
      <Link to='/RecipePost'>RecipePost</Link>
      <Link to='/Fantasy'>Fantasy</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default AllPageLinks;
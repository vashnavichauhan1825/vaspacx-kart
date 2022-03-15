import React from 'react'

const Navbar = () => {
  return (
  
    
        <div className="search-nav">
            <span className="vaspacx"><a href="https://vaspacx-ecommerce.netlify.app/mainpage.html">vaspac<i className="fa fa-xing" aria-hidden="true"></i></a></span>
            <div className="search-cont"><form>
                <select className="bold-grey-text">
                  <option>All</option>
                  <option>Home Decor</option>
                  <option>Telescope</option>
                  <option>Other</option>
                </select>
                 </form>
                 <input id="input" className="bold-grey-text" placeholder="Search..."/>
                </div>
                <div className="search-cont">
                    <small className="bold-grey-text pointer">Help <i className="fa fa-angle-down" aria-hidden="true"></i></small>
                    <div className="cart-nav-cont">
                        <a href="https://vaspacx-loginpage.netlify.app/signin.html"><i className="fa fa-shopping-basket pointer" aria-hidden="true"></i></a>
                            <small>My Account</small>
                    </div>
                </div>
        </div>
       
    
  )
}

export default Navbar;
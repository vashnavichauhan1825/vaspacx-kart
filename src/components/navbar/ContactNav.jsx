

const ContactNav = () => {
  return (
    <div className="contact-nav">
    <div>
        
        <small className="bold-grey-text pointer">Call us <i className="fa fa-angle-down" aria-hidden="true"></i></small>
    </div>
    <div className="contact-nav-btn">
        <a href="/"><button className="icon-button bold-grey-text pointer"><i className="fa fa-github" aria-hidden="true"></i>Github</button></a>
        <a href="/"><button className="icon-button bold-grey-text pointer"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</button></a>
        <img src="/" id="icon"/>
    </div>
</div>
  )
}

export default ContactNav;
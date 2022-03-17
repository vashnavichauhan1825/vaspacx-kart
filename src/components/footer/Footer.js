import styled from "styled-components"
import ContactInfo from "./details/ContactInfo"
import HelpDetail from "./details/HelpDetail"
import ShopDetail from "./details/ShopDetail"
import Vaspacx from "./details/Vaspacx"

const FooterCont = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
height: auto;
background-color: var(--secbg-color);
line-height: 2;
`


const Footer = () => {
  return (
    <FooterCont>
       <Vaspacx/>
        <HelpDetail/>
        <ContactInfo/>
        <ShopDetail/>
    </FooterCont>
  )
}

export default Footer;
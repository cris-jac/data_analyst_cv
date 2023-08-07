import { Link as LinkScroll } from 'react-scroll'; 

const NavLinks = ({className, link, onClick, name}) => {
  return (
    <li className={className}>
        <LinkScroll to={link} onClick={onClick} smooth duration={500}>
            {name}
        </LinkScroll>
    </li>
  )
}

export default NavLinks

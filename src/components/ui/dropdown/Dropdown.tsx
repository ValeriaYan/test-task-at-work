import { Children, ReactElement, ReactNode } from "react"
import './Dropdown.css'
import useOutsideClick from "../../../hooks/outside-click"

interface DropdownProps {
  isOpen: boolean
  closeMenu: () => void
  button: ReactNode
  menu: ReactNode[]
}

const Dropdown = ({ isOpen, button, menu, closeMenu }: DropdownProps): ReactElement => {
  const ref = useOutsideClick(closeMenu);
  
  return (
    <div className={`dropdown ${isOpen ? 'active' : ''}`} ref={ref}>
      {button}
      <ul className="dropdown__list">
        {Children.map(menu, (child: ReactNode) => (
          <li className="dropdown__item">{child}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown

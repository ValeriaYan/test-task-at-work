import { Children, ReactElement, ReactNode } from "react"
import './Dropdown.css'

interface DropdownProps {
  open: boolean
  button: ReactNode
  menu: ReactNode[]
}

const Dropdown = ({ open, button, menu }: DropdownProps): ReactElement => {
  return (
    <div className={`dropdown ${open ? 'active' : ''}`}>
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

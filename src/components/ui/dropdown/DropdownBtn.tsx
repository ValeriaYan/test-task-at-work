import { ReactElement } from "react";

interface DropdownBtnProps {
  onClick: () => void
}

const DropdownBtn = ({onClick}: DropdownBtnProps): ReactElement => {
  return (
    <button className='dropdown__btn' onClick={onClick}>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M10 18.5C10 19.6 10.9 20.5 12 20.5C13.1 20.5 14 19.6 14 18.5C14 17.4 13.1 16.5 12 16.5C10.9 16.5 10 17.4 10 18.5ZM10 6.5C10 7.6 10.9 8.5 12 8.5C13.1 8.5 14 7.6 14 6.5C14 5.4 13.1 4.5 12 4.5C10.9 4.5 10 5.4 10 6.5ZM10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5C10.9 10.5 10 11.4 10 12.5Z" fill="none"/>
        </g>
    </svg>
    </button>

  )
}

export default DropdownBtn
import { ReactElement } from "react";
import './ErrorPage.css'

const ErrorPage = (): ReactElement => {
  return (
    <>
      <h1 className="error-page container title">Такой страницы не существует</h1>
    </>
  )
}

export default ErrorPage
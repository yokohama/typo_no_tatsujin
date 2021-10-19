import { ReactElement } from 'react'
import { Link } from "react-router-dom"

const Top = (): ReactElement => {
  return (
    <div className="box">
      <div className="has-text-centered">
      <Link 
        to="/game"
        className="button is-success"
      >START</Link>
      </div>
    </div>
  )
};

export default Top

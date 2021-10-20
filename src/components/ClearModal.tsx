import { ReactElement } from 'react'
import { Link } from "react-router-dom"

import { Score } from "../types/Score"

const ClearModal = (props: Score): ReactElement => {
  const score: Score = props
  return (
    <>
      <div className={score.isClearClass}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">クリア！</p>
          </header>
          <section className="modal-card-body">
            {score.noMissCount} / {score.numberOfChars}
          </section>
          <footer className="modal-card-foot">
            <Link 
              to="/" 
              className="button is-success"
            >TOPに戻る</Link>
          </footer>
        </div>
      </div>
    </>
  )
};

export default ClearModal

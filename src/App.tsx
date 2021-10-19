import { ReactElement, useState, KeyboardEvent } from 'react';
import "./App.css"

import { PlayGround } from "./components/PlayGround"

const App = (): ReactElement => {
  const keywords: string[] = ['a', 'acq', 'qqqa']
  const numberOfChars: number = keywords.join("").length
  const [keywordsIndex, setKeywordsIndex] = useState<number>(0)
  
  const getExam = (): string[] => {
    const keyword = keywords[keywordsIndex]
    setKeywordsIndex((prev) => prev + 1)
    return Array.from(keyword)
  }

  const [exam, setExam] = useState<string[]>(() => {return getExam()})
  const [ans, setAns] = useState<string[]>([])

  const [isMiss, setIsMiss] = useState<boolean>(false)
  const [noMissCount, setNoMissCount] = useState<number>(0)

  const [result, setResult] = useState<string>('')

  const [isClearClass, setIsClearClass] = useState<string>('modal')

  const keyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const typeKey: string = e.key

    if(typeKey === exam[ans.length]) {
      const okKeys = [...ans, typeKey]
      setAns(okKeys)
      setResult('OK')
      if (isMiss) {
        setIsMiss(() => {return false})
      } else {
        setNoMissCount((prev) => prev + 1)
      }

      if (okKeys.length === exam.length) {
        if (keywords.length === keywordsIndex) {
          setIsClearClass(() => {
            return 'modal is-active'
          })
        } else {
          setExam(() => {return getExam()})
          setAns([])
          setResult('クリア!')
        }
      }
    } else {
      setResult('NG')
      setIsMiss(() => {return true})
    }
  };

  return (
    <>
      <nav 
        className="navbar" 
        role="navigation" 
        aria-label="main navigation">
        <div className="navbar-brand">
          <a 
            className="navbar-item" 
            href="https://bulma.io">
            <img 
              src="https://bulma.io/images/bulma-logo.png" 
              width="112" 
              height="28" />
          </a>

          <a 
            role="button" 
            className="navbar-burger" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div 
          id="navbarBasicExample" 
          className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={isClearClass}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">クリア！</p>
          </header>
          <section className="modal-card-body">
            {noMissCount} / {numberOfChars}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">TOP</button>
          </footer>
        </div>
      </div>

      <div 
        className="play-board"
        tabIndex={0}
        onKeyDown={keyDown}
      >
        <PlayGround exam={exam} ans={ans} result={result} />
      </div>

      <div className="has-text-centered">
        {noMissCount} / {numberOfChars}
      </div>
    </>
  )
};

export default App

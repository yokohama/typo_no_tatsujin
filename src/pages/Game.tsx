import { ReactElement, useState, KeyboardEvent } from 'react'

import "../App.css"

import { PlayGround } from "../components/PlayGround"
import ClearModal from "../components/ClearModal"

const Game = (): ReactElement => {
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
          setIsClearClass((prev) => {
            return `${prev} is-active`
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
      <ClearModal
        noMissCount={noMissCount}
        numberOfChars={numberOfChars}
        isClearClass={isClearClass} />

      <div 
        className="play-board box"
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

export default Game

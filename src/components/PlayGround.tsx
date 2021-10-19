import { ReactElement } from "react"
import { Game } from "../types/Game"

export const PlayGround = (props: Game): ReactElement => {
  const {exam, ans, result} = props

  const printStatus = () => {
    const html: ReactElement[] = []

    for (let i=0; i<exam.length; i++) {
      if (ans[i] === exam[i]) {
        html.push(<li key={i} className="ok-font" >{exam[i]}</li>)
      } else {
        html.push(<li key={i} className="normal-font">{exam[i]}</li>)
      }
    }

    return <ul>{html}</ul>
  }

  return (
    <div>
      {printStatus()}
      <p>{result}</p>
    </div>
  )
}

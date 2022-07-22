import { Button } from "@mantine/core"
import { Link as A }  from "react-router-dom"

const Information = ({infoPics,btnText,directionPath,informationHeader,informationText}) => {
  return (
    <div className='information'>
    <img src={infoPics} alt="" />
    <h2>{informationHeader}</h2>
    <p>{informationText}</p>
       {btnText !== '' && <A to={directionPath}><Button>{btnText}</Button></A>}
</div>
  )
}

export default Information
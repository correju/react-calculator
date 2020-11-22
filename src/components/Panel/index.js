import Button from '../Button'
import './index.css'

export default  (props) => {
    const clickHandler = (buttonName) => props.clickHandler(buttonName)
    return <div className="button-panel">
    <div className="button-row">
      <Button className="zero" name={"AC"} clickHandler={clickHandler} />
      <Button name={"+/-"} clickHandler={clickHandler} />
      <Button name={"÷"} clickHandler={clickHandler} />
    </div>
    <div className="button-row">
      <Button name={"9"} clickHandler={clickHandler} />
      <Button name={"8"} clickHandler={clickHandler} />
      <Button name={"7"} clickHandler={clickHandler} />
      <Button name={"x"} clickHandler={clickHandler} />
    </div>
    <div className="button-row">
      <Button name={"6"} clickHandler={clickHandler} />
      <Button name={"5"} clickHandler={clickHandler} />
      <Button name={"4"} clickHandler={clickHandler} />
      <Button name={"-"} clickHandler={clickHandler} />
    </div>
    <div className="button-row">
      <Button name={"3"} clickHandler={clickHandler} />
      <Button name={"2"} clickHandler={clickHandler} />
      <Button name={"1"} clickHandler={clickHandler} />
      <Button name={"+"} clickHandler={clickHandler} />
    </div>
    <div className="button-row">
      <Button className="zero" name={"0"} clickHandler={clickHandler} />
      <Button name={"."} clickHandler={clickHandler} />
      <Button name={"="} clickHandler={clickHandler} />
    </div>
  </div>
}
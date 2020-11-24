
import './index.css'
const Button = (props) => {
    const clickHandler = () => props.clickHandler(props.name)
    return <>
        <button
            className={`${props.className ? props.className : ''} button`}
            onClick={clickHandler}
            >{props.name}</button>
    </>
}

export default Button
const Button = (props) => {
    return (
        <button onClick={props.change}>
            {props.name}
        </button>
    )
}

export default Button

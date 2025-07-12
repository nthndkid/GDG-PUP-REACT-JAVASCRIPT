export default function Die(props) {
    const styles = {
        backgroundColor: props.isClicked ? "green" : "gray"
    }

    return (
        <button style = {styles} onClick = {() => props.hold(props.id)}>
            {props.value}
        </button>
    )
}
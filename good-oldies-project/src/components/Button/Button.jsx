

export const Button = ({ text, variant = "btn-primary", functionClick, bClass}) => {
    return (
        <button className={`btn ${variant} m-2 ${variant} ${bClass}`} onClick={functionClick} > { text } </button>
    )
}
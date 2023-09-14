

const Box = ({
    text,
    clickFunction
}) => {

    return(
        <div 
        style={{
            width: '12vw',
            height: '12vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'white',
            borderWidth: '2px',
            borderStyle: 'solid'
        }}
        onClick={() => clickFunction()}
        >
            <p>{text}</p>
        </div>
    )
}

export default Box;
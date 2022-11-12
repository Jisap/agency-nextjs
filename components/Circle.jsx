

//props: backgroundColor, top, left, right, bottom

const Circle = ({ backgroundColor, top, left, right, bottom }) => {
    return (
        <div className="circle" style={{backgroundColor, top, left, right, bottom}}></div>
    )
}

export default Circle

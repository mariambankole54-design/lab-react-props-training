const divStyle ={
    bachgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: 'black',
    padding: '20px',
    margin: '10px 0',
    border: '1px solid #ccc'
};

function BoxColor() {
    return <div style={divStyle}></div>
}

export default BoxColor;
import React from 'react'

export const Button = ({ text = '', width = '38px', height = '13px', color = '#CB4A4A', border = '10px' }) => {
    return (
        <div>
            <p style={{
                backgroundColor: color, display: 'inline-flex',
                paddingTop: height, paddingBottom: height, paddingLeft: width, paddingRight: width, borderRadius: border, color: 'white'
            }} >{text}</p>
        </div>
    )
}

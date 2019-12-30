import React from 'react';

class ShowText extends React.Component {

    render(){
        return(
            <div style={style.diplayInfo}>
                
    <span style={style.span}> TimeZone: {this.props.result.zoneName}</span><br></br><span>Country Code: {this.props.result.abbreviation}</span> <br></br><span> Country Name: {this.props.result.countryName}</span>
    <br></br><span>Date & Time: {this.props.result.formatted}</span>
            </div>
        )
    }
}


const style = {
    diplayInfo:{
        width:'400px',
        position:'absolute',
        height:'400',
        backgroundColor:'white',
        border:'1px solid gray',
        padding: '15px 0px',
        marginBottom: '5px'
    },
    span:{
       

    }
}
export default ShowText;
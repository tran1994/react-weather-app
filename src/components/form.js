import React from 'react';

const Form =(props) => {
    return (
    <form onSubmit={this.props.loadWeather}>
        <input type ="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>


    </form>
    )
}

export default Form;
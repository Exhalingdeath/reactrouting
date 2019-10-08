import React from 'react';

class MoonFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response : null,
        };
    }
    render(){
        return (
            <p>test</p>
        );
    }

    componentDidMount() {
        fetch('https://mercuryretrogradeapi.com/').then((response) => response.json()).then((data) => {
            console.log(data);
        });
    }
}

export default MoonFetch;
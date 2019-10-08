import React from 'react';
import MercuryFetch from '../components/MercuryFetch';

class Mercury extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            retrograde : null,
            date : '',
            sendDate : '',
        }
    }

    setRetrograde(retrograde) {
        this.setState({
            retrograde : retrograde,
        });
    }
    sendDate() {
        console.log("https://mercuryretrogradeapi.com?date="+this.state.date);
        fetch("https://mercuryretrogradeapi.com?date="+this.state.date).then(resp => resp.json()).then((data) => {
            console.log(data);
            this.setState({
                retrograde : data.is_retrograde,
            })
        });
    }

    render() {
      
        return (
            <div>
                <p>Input date to see if mercury is in retrograde</p>
                <input type="date" value={this.state.date} onChange={event => this.setState({
                    date : event.target.value,
                })}/>
                <button onClick={() => this.sendDate()}>Check date</button>
                <MercuryFetch retrograde={this.state.retrograde}/>
            </div>
        );
    }
    componentDidMount() {
        console.log("date", this.props.date);
        fetch("https://mercuryretrogradeapi.com").then(resp => resp.json()).then((data) => {
            this.setState({
                retrograde : data.is_retrograde,
            })
        });
    } 
}

export default Mercury;
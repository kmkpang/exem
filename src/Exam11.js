import React,{Component} from 'react'
import axios from 'axios';

export class Exam11 extends Component{
    
    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    async fetch_data() {
        try {
            const results = await axios.get("https://api.develop.softverk.com/v4/user/launch?lang=en&access_token=xxx");
            this.setState({
                isLoaded: true,
                items: results.items
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }

    componentWillMount() {
        this.fetch_data()
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul> {
                    items.map(item => (
                        <li key={item.name}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
            }
        }
}
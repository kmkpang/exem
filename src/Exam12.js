import React,{Component} from 'react'
import axios from 'axios';

export class Exam12 extends Component{
    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    componentWillMount() {
        const fetchDataObject = fetch_data(this);
        fetchDataObject.next();
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

export async function* fetch_data(that) {
    try {
        const result = yield await axios.get("https://api.develop.softverk.com/v4/user/launch?lang=en&access_token=xxx");
        that.setState({
            isLoaded: true,
            items: result.items
        });
    } catch (error) {
        that.setState({
            error,
            isLoading: false
        });
    }
}
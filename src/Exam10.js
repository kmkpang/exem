import React,{Component} from 'react'

export class Exam10 extends Component{
    
    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    fetch_data() {
        fetch("https://api.develop.softverk.com/v4/user/launch?lang=en&access_token=xxx")
        .then(res => res.json())
        .then((result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
        )
        .catch(error => this.setState({ error, isLoading: false }));
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

import React, { Component } from 'react';


class GithubUser extends Component {
    state = {
        isLoading: false,
        githubeUser: null,
        error: ''
    };

    searchForUser = (userName) => {
        this.setState({
            isLoading: true,
            githubUser: null,
            error: false
});

        fetch(`https://api.github.com/users/${userName}`)
        .then(response => {
            console.log(response);
            if  (response.status !== 200) {
                throw Error('An error occurred');
            }
            if (response.status !== 404) {
                throw Error('An Error has occurred')
            }
        })
        .then(data => {
        
            this.setState({
                isLoading: false,
                githubUser: data
            });
        })
        .catch((error) => {
            console.log(error.message);
            this.setState({
                isLoading: false,
                error: true
            });
        });
    }

    onSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target[0].value;
        console.log(searchValue);
    }

    render() {
        const {isLoading, error, githubUser} = this.state;
        let content;

        if (githubUser) {
            content = (
                <div>
                    <h2>{githubUser.name}</h2>
                    <img
                        style={{ width: '100px' }}
                        src={githubUser.avatar_url}
                        alt={`${githubUser.name}'s avatar`}
                    />
                </div>
            )
        }

        

        return (
            <div>
                <h1>Github User</h1>
                <form onSubmit={this.onSearch}>
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>

                {isLoading && <p>Loading...</p>}
                {error && <p>Error. Please refresh and try again</p>}
                {content}
            </div>

        );
    }
}

export default GithubUser;
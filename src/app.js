import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options)  {
                this.setState(() => ({options: options}))
            }
        } catch(e) {
            // Do nothing at all
        }
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    handlePick() {
        const randNum  = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({
            options: [...prevState.options, option]
        }));
    }



    render() {
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && (
                <h2>{props.subTitle}</h2>
            )}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    );
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && (
                <p>Please add an option to get started.</p>
            )}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={() => {
                props.handleDeleteOption(props.optionText)
            }}>
                Remove
            </button>
        </div>
    );
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
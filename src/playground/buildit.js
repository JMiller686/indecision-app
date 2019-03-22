class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            title: 'Visibility Toggle',
            visible: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && (
                    <p>Hey. These are some details you can now see!</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


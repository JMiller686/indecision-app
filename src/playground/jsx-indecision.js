console.log('app.js is running');

//only render the subtitle (and p tag) if subtitle exists - logical and operator
//render new p tag - if options.length > 0 "Here are your options" else "no options"

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};

const clearOptions = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

// create "Remove All" button above list
// on click  -> wipe array -> rerender

const appRoot = document.getElementById('app');

const numbers = [55,101,1000];
const renderApp = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearOptions}>Remove All</button>
            {
                /*numbers.map((number, i) => {
                    return <li key={i}>Number: {number}</li>
                })*/
            }
            <ol>
                {/* map over app.options getting back an array of lis (set key and text) */
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();

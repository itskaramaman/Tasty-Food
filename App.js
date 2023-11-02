const heading = React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
        [React.createElement(
            'h1',
            {},
            'Namaste Inception h1'
        ),
        React.createElement(
            'h2',
            {},
            'Namaste Inception h2'
        )]

    )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
function Header(props) {
    const { title } = props; // Destructuring assignment.

    return React.createElement(Title, { title });
}

function Title({ title }) { // Destructuring done in the parameter. This is a standard React pattern
    return React.createElement('h1', null, `${title}`);
}

const header = Header({ title: 'Hello World' });


const styles = {
    boxStyles: {
        border: "solid 5px black",
        display: 'block',
        width: '200px',
        padding: '20px 50px'
    },
    scoreStyles: {
        display: 'inline-block',
    },
    nameStyles: {
        display: 'inline-block',
    },
    buttonStyles: {
        border: "solid 5px green",
        'border-radius': '50%',
        color: "green",
        display: 'inline-block',
    },
}


function Score(props) {
    return React.createElement(`h1`, {style: styles.scoreStyles}, props.score)
}

function Name(props) {
    return React.createElement('h2', {style: styles.nameStyles}, ' - ' + props.name)
}

function Button() {
    const buttonProps = {
        style: styles.buttonStyles,
        onClick() { alert('You clikced me'); }
    }

    return React.createElement('button', buttonProps, '+')
}

function VoteBox(props) {
    const score = props.score;
    const name = props.name;

    return React.createElement('div', { key: props.key, id: props.key, style: styles.boxStyles }, [Score(props), Name(props), Button()])
}

const JSLibs = ['React', 'Redux', 'Node', 'Express']

const boxes = JSLibs.map((itemString) => {
    const props = {
        key: itemString,
        score: 0,
        name: itemString,
    }
    return (VoteBox(props))
});

// const box = VoteBox('react');


ReactDOM.render([header, boxes], document.getElementById('app'));
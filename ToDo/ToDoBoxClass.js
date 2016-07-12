var Item = React.createClass({
    render: function() {
        return(
            <div className="item">
                <input type="checkbox" value="finished" checked="{this.props.checked}"></input>
                {this.props.children}
            </div>
        );
    }
});

var ToDoList = React.createClass({
    render: function() {
        return (
            <div className="toDoList">
                <Item checked="true">Test 123</Item>
                <Item>Test 454</Item>
            </div>
        );
    }
});
var ToDoForm = React.createClass({
    render: function() {
        return (
            <div className="toDoForm">
                Hello, I am the comment form!
            </div>
        );
    }
});
var ToDoBox = React.createClass({
    render: function() {
        return(
            <div className="toDoBox">
                Hello World~! I am a To-Do Box!
                <ToDoList />
                <ToDoForm />
            </div>
            );
    }
});

ReactDOM.render(
    <ToDoBox />,
    document.getElementById('content')
);
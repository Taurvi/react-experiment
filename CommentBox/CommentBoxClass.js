var Comment = React.createClass({
    render: function() {
        return (
           <div className="comment">
               <h2 className="commentAuthor">
                   {this.props.author}
               </h2>
               {this.props.children}
           </div>
        );
    }
})

var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="test">Test Comment 123</Comment>
                <Comment author="test22">Test Comment 41298192</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                And I'm an awesome comment form!
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                And I'm the allmighty comment box!!!!
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);
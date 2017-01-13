let React = require('react')
    , Card = React.createClass({
    render: function () {
        return (
            <div className="col-md-4 jumbotron">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
});

module.exports = Card;
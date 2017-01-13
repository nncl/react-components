let React = require('react')
    , CardTemperature = React.createClass({
    render: function () {
        return (
            <div className="col-md-12 jumbotron">
                <h2>{this.props.degrees}</h2>
                <p>{this.props.place}</p>
            </div>
        );
    }
});

module.exports = CardTemperature;
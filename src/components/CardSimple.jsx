let React = require('react')
    , CardSimples= React.createClass({
    render: function () {

        var backgroundStyle = {};

        if (this.props.backgroundColor) {
            backgroundStyle.background = this.props.backgroundColor;
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading" style={backgroundStyle}>
                    <p className="panel-title">{this.props.title}</p>
                    <h3 className="panel-title">{this.props.value}</h3>
                </div>
                <div className="panel-body">
                </div>
            </div>
        );
    }
});

module.exports = CardSimples;
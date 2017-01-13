let React = require('react')
    , CardSlider = React.createClass({
    render: function () {
        var backgroundStyle = {};

        if (this.props.backgroundColor) {
            backgroundStyle.background = this.props.backgroundColor;
        }

        return (
            <div className="col-md-12">
                <div className="row row-height" style={backgroundStyle}>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h2>{this.props.shotViews}</h2>
                    </div>
                    <div className="col-md-4">
                        <h2>{this.props.likes}</h2>
                    </div>
                    <div className="col-md-4">
                        <h2>{this.props.comments}</h2>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CardSlider;
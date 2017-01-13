let React = require('react')
    , ReactDOM = require('react-dom')
    , Card = require('./components/Card.jsx')
    , CardSimple = require('./components/CardSimple.jsx')
    , CardSlider = require('./components/CardSlider.jsx')
    , CardTemperature = require('./components/CardTemperature.jsx');

ReactDOM.render(<Card title="20" description="New followers added this month"/>, document.getElementById('m-card__followers'));
ReactDOM.render(<Card title="$ 1250" description="Average Monthly income"/>, document.getElementById('m-card__monthly'));
ReactDOM.render(<Card title="$ 13865" description="Yearly income Goal"/>, document.getElementById('m-card__yearly'));
ReactDOM.render(<CardTemperature degrees="18º" place="Dublin" />, document.getElementById('m-card__degrees'));
ReactDOM.render(<CardSlider shotViews="15080" likes="12000" comments="5100" backgroundColor="#0096D0" />, document.getElementById('m-card__big'));
ReactDOM.render(<CardSimple title="New visitors" value="1.5k" backgroundColor="#0096D0" />, document.getElementById('m-card__newvisitors'));
ReactDOM.render(<CardSimple title="Bounce Rate" value="50%" backgroundColor="#B28AD6" />, document.getElementById('m-card__bouncerate'));
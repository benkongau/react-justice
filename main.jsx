class Justice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'chats'};

        runLinkState(this);
    }
  
    render() {
      return (
        <div className="container">
            <Navbar onPageChange={this.linkState('page')}/>
            <div role="main" style={{paddingTop: "63px"}}>
            { this.state.page == 'chats'? (<Chats />):"" }
            { this.state.page == 'contacts'? (<Contacts />):"" }
            </div>
        </div>
      );
    }
  }
  
  var runLinkState = function(_this){
    _this.linkState = key => {
        return event => {
            _this.setState({
                [key]: event.target.value 
            });
        };
    }

    _this.linkStateProps = (key, propName) => {
        return event => {
            _this.setState({
                [key]: event.target.value 
            });
            _this.props[propName](event);
        };
    };
  }
  ReactDOM.render(
    <Justice />,
    document.getElementById('app')
  );
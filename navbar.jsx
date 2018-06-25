class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'chats'};

        runLinkState(this);
    }
    render() {
        return (
<div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div>
        <a className="navbar-brand" href="#">Justice from Freedom</a>
    </div>
    { this.state.page == 'detail' ? (
    <div>
        <a className="navbar-brand" onClick={this.handleBack}><span className="oi oi-arrow-left"></span> Back</a>
    </div>
    ) : "" }
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsJustice" aria-controls="navbarsJustice" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarsJustice">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={this.handleChats}>Chats</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={this.handleContacts}>Contacts</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={this.handleMoments}>Moments</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={this.handleMe}>Me</a>
            </li>
        </ul>
    </div>
    </nav>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom">
            <div>
                <div className="btn-group btn-group-toggle">
                    <label className={["btn btn-secondary", (this.state.page=="chats"?"active":"")].join(' ')}>
                        <input type="radio" name="navBarPage" value="chats" onChange={this.linkStateProps('page', 'onPageChange')} /> Chats
                    </label>
                    <label className={["btn btn-secondary", (this.state.page=="contacts"?"active":"")].join(' ')}>
                        <input type="radio" name="navBarPage" value="contacts" onChange={this.linkStateProps('page', 'onPageChange')} /> Contacts
                    </label>
                    <label className={["btn btn-secondary", (this.state.page=="moments"?"active":"")].join(' ')}>
                        <input type="radio" name="navBarPage" value="moments" onChange={this.linkStateProps('page', 'onPageChange')} /> Moments
                    </label>
                    <label className={["btn btn-secondary", (this.state.page=="me"?"active":"")].join(' ')}>
                        <input type="radio" name="navBarPage" value="me" onChange={this.linkStateProps('page', 'onPageChange')} /> Me
                    </label>
                </div>
            </div>
    </nav>
</div> 
        );
    }
}
class Contacts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {newUserID: ''};
    }
  
    render() {
      return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="User ID" aria-label="User ID" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">+</button>
                </div>
                
            </div>
        </div>
      );
    }
  }
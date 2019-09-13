import React from "react"
import tuktukImage from "./../images/tuktuk-devani.png"

class Footer extends React.PureComponent {
  state = {
    date: ""
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().getFullYear();
    this.setState({ date });
  };

  render() {
    const { tuktuk } = this.props
    const { date } = this.state;

    return (
      <footer>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-sm-4 text-center text-sm-left">
              <p className="my-3">
                <a href="https://www.facebook.com/DevaniCreative/" className="text-dark mr-4 socialicon"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/devanicreative/?hl=nl" className="text-dark mr-4 socialicon"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/2055298/" className="text-dark mr-4 socialicon"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/channel/UCL2TxB9j6XL3JjYverxvF1w" className="text-dark mr-4 socialicon"><i className="fab fa-youtube"></i></a>
              </p>
            </div>
            <div className="col-sm-8 text-center text-sm-right">

              {tuktuk && 
                <img src={tuktukImage} alt="Tuk Tuk" className="d-none d-sm-block" style={{ marginTop: -125 + 'px'}} />
              }
                
              <div className="pb-3">
                <p className="text-muted">
                  Copyright &copy; {date} Devani Creative
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
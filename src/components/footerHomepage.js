import React from "react"
import Tuktuk from "../components/tuktuk"

class FooterHomepage extends React.PureComponent {
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
            <div className="col-sm-4 text-left">
              <table className="mt-5" width="100%;">
                <tbody>
                  <tr>
                    <td className="text-muted">Veermanskade 2</td>
                    <td className="text-muted">1621 AN Hoorn</td>
                  </tr>
                  <tr>
                    <td className="text-muted"><a href="mailto:info@devani.nl" class="text-muted">info@devani.nl</a></td>
                    <td className="text-muted"><a href="tel:0228325069" class="text-muted">0228 325 069</a></td>
                  </tr>
                </tbody>
              </table>
              <p className="my-3">
                <a href="https://www.facebook.com/DevaniCreative/" className="text-dark mr-4 socialicon"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/devanicreative/?hl=nl" className="text-dark mr-4 socialicon"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/2055298/" className="text-dark mr-4 socialicon"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/channel/UCL2TxB9j6XL3JjYverxvF1w" className="text-dark mr-4 socialicon"><i className="fab fa-youtube"></i></a>
              </p>
            </div>
            <div className="col-sm-8 text-center text-sm-right">

              {tuktuk && 
                <Tuktuk />
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

export default FooterHomepage
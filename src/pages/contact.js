import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import iconLink from "./../images/icon-link.svg"

//https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f

class ContactPage extends React.PureComponent {

  constructor() {
    super();

    this.state = {
      isSend: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const url = "https://devani.nl/cms/wp-json/contact-form-7/v1/contact-forms/25/feedback";

    fetch(url, {
      method: 'POST',
      body: data,
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        isSend: true
      });
    });
    
  }

  render() {
    const { isSend } = this.state;

    if(isSend === true) {
      return (
        <>
          <SEO title="Contact" description="Be in Touch. Veermanskade 2, 1621 AN Hoorn. info@devani.nl" />
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-10 col-sm-8">
                  <p className="lead">Wil je eens bij ons langskomen? Dat kan altijd. We horen graag hoe we je kunnen helpen.</p>
                </div>
              </div>
              <div className="line-container pb-3 mt-4">
                <div className="row">
                  <div className="col-md-5">
                    <p>Formulier verstuurd</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )
    }

    return (
      <>
        <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-8">
                <p className="lead">Wil je eens bij ons langskomen? Dat kan altijd. We horen graag hoe we je kunnen helpen.</p>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="line-container pb-3 mt-4">
                <div className="row">
                  <div className="col-md-5">
                    <p>Vul onderstaand formulier in. Bellen (<a href="tel:0228325069" class="text-body">0228 325 069</a>) of mailen naar <a href="mailto:info@devani.nl" class="text-body">info@devani.nl</a> kan natuurlijk ook. Tot snel!</p>
                  </div>
                  <div className="col-md-5">
                    <table width="100%;">
                      <tbody>
                        <tr>
                          <td>Veermanskade 2</td>
                          <td>1621 AN Hoorn</td>
                        </tr>
                        <tr>
                          <td><a href="mailto:info@devani.nl" class="text-body">info@devani.nl</a></td>
                          <td><a href="tel:0228325069" class="text-body">0228 325 069</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="naam">Je naam</label>
                      <input type="text" id="naam" name="naam" className="form-control" placeholder="Vul je naam in" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Je e-mailadres</label>
                      <input type="email" id="email" name="email" className="form-control"  placeholder="Vul je e-mailadres in" required />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label htmlFor="message">Je vraag</label>
                      <textarea id="message" name="message" className="form-control" rows="5" required></textarea>
                    </div>

                  </div>
                </div>
              </div>
              <p className="">
                <button to="/contact" className="link">
                  <img src={iconLink} alt="Neem contact op" />Verstuur formulier
                </button>
              </p>
            </form>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default ContactPage
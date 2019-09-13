import React from "react"
import { Link } from "gatsby"
import iconLink from "./../images/icon-link.svg"

const ExtraInfo = () => (
  <section className="py-4 py-sm-7 bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-10 col-sm-8 offset-1 offset-sm-2">
          <div className="line-container">
            <p className="text-white">Hoe vaak wordt je nu echt verrast? Wij houden ervan om jou en je klanten te verrassen met ons werk. Ons hart gaat sneller kloppen van een mooi design. Gelukkig is ons werk niet alleen mooi en ludiek, maar werkt het ook! We kiezen ervoor om onze tijd te besteden aan een selecte groep klanten. Omdat we voor de relatie gaan en niet voor de one night stand. Zo kunnen we werkelijk betrokken zijn. Ook wij balen wanneer iets niet lukt bij onze klanten. Dan zetten een stapje harder, denken we met je mee en komen we samen tot een oplossing. Want jij bent belangrijk, we geven graag.</p>
            <p className="text-white">Iedere dag is anders, dat maakt ons werk zo leuk. We zijn bevoorrecht om te mogen werken in het mooiste pand van Hoorn voor nog meer inspiratie en nemen een duik in onze voortuin, het Markermeer, bij warm weer. We slurpen hier liters koffie, maar we houden ook van een borrel. Dat laatste doen we ieder jaar op Outdoor Stereo: het leukste feest in de regio! Lokaal betrokken is voor ons niet zo maar een woord. We zijn het echt. Onze klanten komen uit de regio, we leggen verbindingen, sponsoren lokale doelen en werken voor de stadscommunity Voor een mooie stad. Waarvan de wortels hier liggen.</p>
          </div>
          <p className="">
            <Link to="/contact" className="link text-white">
              <img src={iconLink} alt="We horen graag hoe we je kunnen helpen" />Interesse? <span>We horen graag hoe we je kunnen helpen</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default ExtraInfo
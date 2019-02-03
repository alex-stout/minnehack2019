import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppNavbar from "../AppNavbar";
import { Container } from "reactstrap";

class RatingForm extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <img src="https://www.palmoilinvestigations.org/uploads/2/4/8/7/24876500/4530100_orig.jpg" />
          <h2 id="inspiration">Inspiration</h2>

          <p>
            We were inspired about this topic when we learned about the recent
            controversy revolving around the palm oil industry. In its current
            state, most farming practices are unsustainable and detrimental to
            our environment. Cargill has a very open stance in regards to its
            goal to "build a 100 percent transparent, traceable and sustainable
            palm supply chain by 2020". While researching this topic, we found
            many shocking statistics on the lack of sustainability, such as
            extreme deforestation and high levels of toxic gas emissions. Our
            goal was to provide a product that would provide more transparency
            and a push for higher sustainability in the industry.
          </p>

          <h2 id="whatitdoes">What it does</h2>

          <p>
            Palm Oil Transparency is a product made to support the movement
            towards more sustainable palm oil production standards. To do this,
            we created a database of Cargill's palm oil mills in which we can
            apply "ratings". These ratings are based on the mills'
            sustainability certifications and standards. This is relevant for
            both producers and consumers, as consumers are pushing for producers
            to be more transparent and sustainable, while producers want to meet
            the desires of their consumers and gain their business. In addition
            to providing clear sustainability ratings, we have provided a way to
            track the entire supply chain of palm oil. Our system uses QR codes
            to create a "signature" in which a producer/supplier handing off the
            oil to the next company in the supply chain can be sure that the oil
            maintains its high quality, while those receiving the oil can be
            confident in the quality of the product they are receiving. This
            ensures both accuracy and transparency throughout the entire supply
            chain from producer to consumer. It's important to note that we
            opted for QR codes instead of a more complex technology such as
            blockchain. We did this because of the high number of palm oil mills
            in developing countries and emerging markets. QR codes can be read
            by most modern cell phones which would lower the barrier of entry to
            use our product - expanding access to sustainable palm oil
            practices.
          </p>

          <h2 id="howwebuiltit">How we built it</h2>

          <p>
            We built our application with a MERN Stack (MongoDB, Express.js,
            React, Node.js). This structure allowed us to have a frontend that
            pulled information from our databases via the endpoint connections
            supplied through the API. We also hosted a MongoDB on an AWS EC2
            instance.
          </p>

          <h2 id="challengesweraninto">Challenges we ran into</h2>

          <p>
            Our team had limited experience putting together a full-stack
            application. Learning how to connect an API with the frontend proved
            to be challenging for us. We had to work together to bridge the gap
            between our different skill sets.
          </p>

          <h2 id="accomplishmentsthatwereproudof">
            Accomplishments that we're proud of
          </h2>

          <p>
            We are proud of the fact that we were able to set up an entire
            full-stack application. We also have gained a better understanding
            of popular technologies like React and MongoDB.
          </p>

          <h2 id="whatwelearned">What we learned</h2>

          <p>
            We learned that when working under a tight schedule, understanding
            how to build out an MVP (minimum viable product) is important. It's
            really easy to get carried away and caught in a cycle of scope
            creep. Though we struggled with this right away, by the end we
            started to narrow our focus to the essential elements - allowing us
            to finish our MVP.
          </p>

          <h2 id="whatsnextforpalmoiltransparency">
            What's next for Palm Oil Transparency
          </h2>

          <p>
            We had a lot of ideas for expanding this product further. We would
            love for Palm Oil Transparency to become a product that contains all
            of the information necessary to improve sustainability,
            transparency, and traceability standards in the palm oil industry
            while also improving the relationship and trust between the oil's
            producers and consumers.
          </p>
        </Container>
      </div>
    );
  }
}

export default RatingForm;

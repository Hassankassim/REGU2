import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardWork from "../../components/cards/cardwork";
import image1 from "../../assets/img/security2.png";
import image2 from "../../assets/img/effortless2.png";
import image3 from "../../assets/img/mobile accessibility2.png";
function Cardlayout() {
  return (
    <Container>
      <Row>
        <Col>
          <CardWork
            heading="Compliance Guidance Services"
            imgSrc={image2}
            description="REGU provides personalized compliance 
            roadmaps and checklists, offering step-by-ste
            p guidance for startups to navigate 
            
            complex regulatory requirements efficiently."
            buttonText="Read more"
            link="/About"
          />
        </Col>
        <Col>
          <CardWork
            heading="Financial Assistance Services:"
            imgSrc={image3}
            description=" REGU offers tools and support
             for tax filings, financial reporting, and 
             licensing needs, aiding startups in managing
              their financial compliance obligations effectively."
            buttonText="Read more"
            link="/About"
          />
        </Col>
        <Col>
          <CardWork
            heading="Innovative Support Tools:"
            imgSrc={image1}
            description="Through an economy bot, REGU delivers
             real-time economic insights,
             empowering users with valuable market information 
             for informed decision-making and regulatory
              compliance readiness.."
            buttonText="Read more"
            link="/About"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cardlayout;

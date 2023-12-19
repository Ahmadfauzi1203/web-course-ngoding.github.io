import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratketenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Syarat & Ketentuan
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                quae.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat sequi ratione dignissimos nam aspernatur. Aut aliquid
                harum autem accusamus enim expedita sit? Assumenda
                exercitationem at non laborum neque, veniam repudiandae ipsum
                ratione. Ipsam, laboriosam repellat aliquid, totam repellendus
                debitis eligendi officiis dolores doloremque modi alias labore
                possimus aliquam illum eum nisi saepe est accusantium ad ut,
                consectetur ex repudiandae cupiditate?
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Lorem</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                vel, provident in minus explicabo minima saepe nulla rerum
                corporis assumenda autem mollitia quis sed asperiores quibusdam
                at porro doloremque enim possimus officiis non similique quos!
                Dicta amet quo vitae? Nulla, deleniti officia harum eius earum
                ad tempora expedita quo iusto reprehenderit ratione. Cum est
                assumenda possimus magnam laborum, reiciendis dignissimos.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, possimus unde sint error reprehenderit voluptatum
                illo, nisi blanditiis sequi dolorem ratione aliquid totam labore
                dignissimos vero architecto similique odio ipsa vitae quam
                ducimus quisquam maiores deserunt. Nihil consequuntur
                perspiciatis ut.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                iure quis sint ipsam, obcaecati excepturi et ab voluptatum a
                unde.
              </p>
            </Col>
          </Row>

          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Lorem</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos similique enim nesciunt! Unde quam assumenda fugiat
                aut molestias inventore corporis accusamus doloribus placeat.
                Debitis magni eligendi pariatur quae ipsum velit doloremque,
                natus et, expedita ex odit reiciendis quidem harum placeat!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                ipsum nulla quis harum dolorum explicabo atque accusantium
                consectetur incidunt modi. Possimus suscipit aut cupiditate!
                Consectetur consequatur nemo aliquam eligendi atque!
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Lorem</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos similique enim nesciunt! Unde quam assumenda fugiat
                aut molestias inventore corporis accusamus doloribus placeat.
                Debitis magni eligendi pariatur quae ipsum velit doloremque,
                natus et, expedita ex odit reiciendis quidem harum placeat!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                ipsum nulla quis harum dolorum explicabo atque accusantium
                consectetur incidunt modi. Possimus suscipit aut cupiditate!
                Consectetur consequatur nemo aliquam eligendi atque!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SyaratketenPage;

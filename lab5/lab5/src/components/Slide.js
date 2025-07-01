import { Carousel } from 'react-bootstrap';

export default function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="slide-1.jpg" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slide-2.jpg" alt="Slide 2" />
      </Carousel.Item>
    </Carousel>
  );
}

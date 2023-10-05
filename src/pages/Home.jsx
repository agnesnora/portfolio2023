import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>This is the home page with some fancy info.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus beatae
        qui vero ducimus praesentium pariatur facilis sit perspiciatis, dolorum
        necessitatibus doloribus nulla aliquam consequuntur aliquid in vel
        voluptatum mollitia neque.
      </p>
      <Link to="/about">Go to about</Link>
    </div>
  );
}

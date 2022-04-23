import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import Jumbotron from "../components/jumbotron";
import Testimonials from "../components/testimonials";
import Services from "../components/services";
import Team from "../components/team";

export default function Home() {
  return (
    <Fragment>
      <Jumbotron />
      <Testimonials />
      <Services />
      <Team />
    </Fragment>
  );
}

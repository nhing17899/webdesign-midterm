import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import Jumbotron from "../components/jumbotron";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <Fragment>
      <Jumbotron />
      <Testimonials />
    </Fragment>
  );
}

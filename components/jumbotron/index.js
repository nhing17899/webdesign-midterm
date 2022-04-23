import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  margin-top: 150px;
  font-size: 1.5em;
  text-align: center;
  color: grey;
  height: 70vh;
`;

const Button = styled.button`
  font-size: "1em";
  color: grey;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border: 2px solid grey;
  }
`;

function Jumbotron() {
  return (
    <Container>
      <h1 className="display-4">Home page</h1>
      <p className="lead">
        This is the best shop that sells everything you want.
      </p>

      <Link href="/product">
        <Button>Explore</Button>
      </Link>
    </Container>
  );
}

export default Jumbotron;

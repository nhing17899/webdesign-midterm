import styled from "styled-components";

const Container = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: grey;
  height: 500 px;
  top: 200px;
  position: relative;
`

const Button = styled.button`
  background: "white" !important;
  color: "gray";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
  cursor: pointer;
`;

function Jumbotron() {
  return (
    <Container>
        <h1 className="display-4">Home page</h1>
        <p className="lead">
          This is the best shop that sells everything you want.
        </p>
        <Button>Explore</Button>
    </Container>
  );
}

export default Jumbotron;

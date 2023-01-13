import React from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Victor to NoteZipper">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                ></span>
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.{" "}
                    </p>
                    <footer className="blockquote-footer">
                      Created on - Date
                    </footer>
                  </blockquote>
                </Card.Body>
                <div>
                  <Button>Edit</Button>
                  <Button variant="danger" className="ex-2">
                    Delete
                  </Button>
                </div>
              </Card.Header>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;

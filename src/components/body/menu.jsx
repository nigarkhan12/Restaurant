import React, { Component } from "react";
import { Container, Row, Button, Modal } from "react-bootstrap";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comments";
import DishDetail from "./dishDetail";
import MenuItem from "./menuItem.jsx";

export class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    selectedDish: null,
    show: false,
  };

  modalClose = () => {
    this.setState({ show: false });
  };

  modalOpen = () => {
    this.setState({ show: true });
  };

  onDishSelect = (dish) => {
    this.setState({ selectedDish: dish, show: !this.state.show });
  };

  render() {
    document.title = "Menu";
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          DishSelect={() => this.onDishSelect(item)}
        />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments = this.state.comments.filter((comment) => {
        return comment.dishId === this.state.selectedDish.id;
      });
      dishDetail = (
        <DishDetail dish={this.state.selectedDish} comments={comments} />
      );
    }
    return (
      <Container fluid={true}>
        <Row lg={3} md={3} sm={6} xs={6}>
          {menu}
        </Row>

        <Modal show={this.state.show} onHide={this.modalClose} size="lg">
          <Modal.Body>{dishDetail}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Menu;

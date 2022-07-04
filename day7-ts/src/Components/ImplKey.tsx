import React, {Component} from "react";

abstract class Base extends Component {
  abstract handleClick(): void;
  abstract handleMouseMove(event: MouseEvent): void;
  abstract handleChange(): void; 
}

class Keys extends Base {
  handleClick() {
    console.log("handleClick");
  }

  handleMouseMove() {
    console.log("handleMouseMove");
  }

  handleChange() {
    console.log("handleChange");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <button onMouseMove={this.handleMouseMove}>Mouse Move</button>
        <button onChange={this.handleChange}>Change</button>
      </div>
    );
  }
}

export default Keys;
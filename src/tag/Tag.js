import React from "react";
import ReactDOM from "react-dom";
import { WithContext as ReactTags } from "react-tag-input";

//npm add react-dnd@5.0.0 react-dnd-html5-backend@3.0.2

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [
        { id: "소고기", text: "소고기" },
        { id: "닭고기", text: "닭고기" },
        { id: "과일/야채", text: "과일/야채" },
      ],
      suggestions: [
        { id: "사슴고기", text: "사슴고기" },
        { id: "양고기", text: "양고기" },
        { id: "생선", text: "생선" },
        { id: "돼지고기", text: "돼지고기" },
        { id: "말고기", text: "말고기" },
      ],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
        />
      </div>
    );
  }
}

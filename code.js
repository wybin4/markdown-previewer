const start_value = `# Markdown Previewer

[![Markdown Previewer](https://raw.githubusercontent.com/ajdivotf/markdown-previewer/main/results/mark%20and%20stones.png)](https://github.com/ajdivotf/markdown-previewer/)

## FreeCodeCamp | Front End Libraries Projects

A *FreeCodeCamp* challenge on using front end libraries to build a markdown previewer with the below user stories to be fulfilled:

> **Required**
> 1. I can see a \`textarea\` element with a corresponding \`id="editor"\`.
> 2.  I can see an element with a corresponding \`id="preview"\`.
> 3. When I enter text into the \`#editor\` element, the \`#preview\` element is updated as I type to display the content of the textarea.
> 4. When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the \`#preview\` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
> 5. When my markdown previewer first loads, the default text in the \`#editor\` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
> 6. When my markdown previewer first loads, the default markdown in the \`#editor\` field should be rendered as HTML in the \`#preview\` element.

---

\`\`\`                      
   <p>Hello world!</p>          
\`\`\`

---

#### More about the challenge [Build a Markdown Previewer](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).
#### See it in action [HERE](https://codepen.io/adjivotf/pen/eYMBRvL).
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: start_value
    };
    this.textRecipient = this.textRecipient.bind(this);
  }
  textRecipient(event) {
    this.setState({
      input: event.target.value
    });
  }
  getMarkdownText() {
    var rawMarkup = marked.parse(this.state.input);
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div class="container">
        <div id="editor" class="form-group">
          <h5 to="main-text" id="col-head" class="card-title">
            EDITOR
          </h5>
          <textarea
            class="form-control"
            value={this.state.input}
            onChange={this.textRecipient}
          ></textarea>
        </div>
        <div id="prev-ed-border"></div>
        <div id="preview">
          <h5 to="main-text" id="col-head" class="card-title">
            PREVIEW
          </h5>
          <p
            id="main-text"
            dangerouslySetInnerHTML={this.getMarkdownText()}
          ></p>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("edit-div"));

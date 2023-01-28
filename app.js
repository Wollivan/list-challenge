// items in an array so they can more easily be added/removed
const allOptions = [
  {
    title: "Option 1",
    name: "option1",
    copyTitle: "H2 Bold",
    copyContent: "Body copy Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Option 2",
    name: "option2",
    copyTitle: "H2 Bold",
    copyContent: "Body copy Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Option 3",
    name: "option3",
    copyTitle: "H2 Bold",
    copyContent: "Body copy Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Option 4",
    name: "option4",
    copyTitle: "H2 Bold",
    copyContent: "Body copy Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Option 5",
    name: "option5",
    copyTitle: "H2 Bold",
    copyContent: "Body copy Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Option 6 with long copy to show wrap",
    name: "option6",
    copyTitle: "H2 Bold",
    copyContent: "Body copy Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

// class to build our option so we don't have to
// "We don't freeze them, YOU DO! YOU DO!"
class Option {
  constructor(title, name, copyTitle, copyContent) {
    this.title = title;
    this.name = name;
    this.copyTitle = copyTitle;
    this.copyContent = copyContent;
  }
  render() {
    // get our for with its very specific ID...
    const form = document.getElementById("form");

    // label wraps the items
    const label = document.createElement("label");
    label.classList.add("option");
    label.setAttribute("for", this.name);
    form.appendChild(label);

    // input itself
    const input = document.createElement("input");
    input.classList.add("option__item");
    input.setAttribute("id", this.name);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "options"); // MAKE OPTIONS DYNAMIC
    label.appendChild(input);

    // radio circle
    const radioCircle = document.createElement("span");
    radioCircle.classList.add("option__circle");
    label.appendChild(radioCircle);

    // name of the option
    const optionName = document.createElement("span");
    optionName.innerText = this.title;
    optionName.classList.add("option__name");
    label.appendChild(optionName);

    // title
    const h2 = document.createElement("h2");
    h2.innerText = this.copyTitle;
    h2.classList.add("option__title");
    label.appendChild(h2);

    // copy
    const copyContent = document.createElement("p");
    copyContent.innerText = this.copyContent;
    copyContent.classList.add("option__copy");
    label.appendChild(copyContent);

    // click event to open the option
    label.addEventListener("click", (event) => {
      // remove any isntance of the class open from the page... maybe a little hacky, perhaps if it used a less generic class name?
      let a = document.getElementsByClassName("open");
      [...a].forEach((x) => x.classList.remove("open"));

      // open up our clicked option
      event.target.classList.add("open");
    });
  }
}

// render all options
for (let i = 0; i < allOptions.length; i++) {
  new Option(allOptions[i].title, allOptions[i].name, allOptions[i].copyTitle, allOptions[i].copyContent).render();
}

// i'm all outta options!!!

// add the button because it's... pressing
const button = document.createElement("button");
button.innerText = "Submit selection";
button.classList.add("btn");
form.appendChild(button);

function render(element, container) {
    let label = document.createElement(element.type);
    let value = Object.keys(element.props)
    label.setAttribute(value, element.props[value]);

    label.innerHTML = element.children;
    container.appendChild(label);
}

const element = {
    type: "a",
    props: {
        href: "https://react.dev/",
    },
    children: "Leer más acerca de React",
};

const container = document.querySelector("#root");

render(element, container);

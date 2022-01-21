var counter_template = document.createElement("template"); //creates template tag <template></template>
counter_template.innerHTML = `
<h1>Banner</h1> ';


    <style>
    #counter {
    background-color: gray;
    display: flex;
    font-size: 40px;
}

    #counter > button {
    width: 100px;
    height: 100px;
    background-color: #ADD;
    border: none;
    border-radius: 5px;
    margin: 5px;
    font-size: 30px;
}

    #counter > div { 
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
}

    #bar {
    width: 0px;
    height: 15px;
    background-color: #bad;

}


    </style>
    <div id="counter">
    <button>-</button>
    <div>1</div>
    <button>+</button>
    </div>
    <div id="bar"></div>
    `;


class TheCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(counter_template.content.cloneNode(true));
    }
}

customElements.define("the-counter", TheCounter);

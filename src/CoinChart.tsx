import React from "react";
import ReactDOM from "react-dom";

class CoinChart extends HTMLElement {
  static get observedAttributes() {
    return ["x-value"];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    switch (name) {
      case "x-value":
        alert(
          `Value ${typeof newValue} changed from ${oldValue} to ${newValue}`
        );
        break;
    }
  }

  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    ReactDOM.render(<div>Hej!</div>, mountPoint);
  }
}

if (!window.customElements.get("coin-chart")) {
  // prevent redefining in cases like codesandbox
  window.customElements.define("coin-chart", CoinChart);
}

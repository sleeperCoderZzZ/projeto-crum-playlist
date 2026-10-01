class ButtonDefault extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          background-color: #bc743a;
          color: white;
          width: 100%;
        }
        button:hover {
          background-color: #c9964d;
        }
      </style>
      <button><slot></slot></button>
    `;
  }
}

customElements.define('button-default', ButtonDefault);
class ButtonDefault extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const href = this.getAttribute('href');
    const type = this.getAttribute('type') || 'button';
    const element = href ? `<a href="${href}"><slot></slot></a>` : `<button type="${type}"><slot></slot></button>`;

    this.shadowRoot.innerHTML = `
      <style>
        button, a {
          display: block;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          background-color: #bc743a;
          color: white;
          width: 100%;
          font-family: 'Libre Caslon Condensed', serif;
          text-align: center;
          text-decoration: none;
          box-sizing: border-box;
        }
        button:hover, a:hover {
          background-color: #c9964d;
        }
      </style>
      ${element}
    `;
  }
}

customElements.define('button-default', ButtonDefault);
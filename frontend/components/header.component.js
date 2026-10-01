class HeaderDefault extends HTMLElement {
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
        header {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          background-color: #074632;
          color: #d3b868;
        }
        h2 {
          margin: 0;
          font-size: 24px;
        }
      </style>
      <header>
        <h2><slot name="title"></slot></h2>
        <slot name="actions"></slot>
      </header>
    `;
  }
}
customElements.define('header-default', HeaderDefault);
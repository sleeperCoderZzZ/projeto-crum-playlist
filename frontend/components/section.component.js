class SectionDefault extends HTMLElement {
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
        section {
          padding: 20px;
          margin: 5px 0;
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 10px;
        }
      </style>
      <section>
        <img src="./assets/imgs/background-home-playlist.jpg" alt="Imagem da seção">
        <slot></slot>
      </section>
    `;
  }
}
customElements.define('section-default', SectionDefault);
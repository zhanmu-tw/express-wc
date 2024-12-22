class TestComponent extends HTMLElement {
  private isBlue: boolean;
  private number: number;

  constructor() {
    super();
    this.isBlue = true;
    this.number = 0;

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
        p {
          font-weight: bold;
        }
        button {
          padding: 5px 10px;
          margin-top: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `;

    const wrapper = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = `Current number: ${this.number}`;

    const colorButton = document.createElement("button");
    colorButton.textContent = "Change Text Color";

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "Increment Number";

    colorButton.addEventListener("click", () => this.toggleColor(text));

    incrementButton.addEventListener("click", async () => {
      try {
        const response = await fetch("/api/increment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          this.number = data.number;
          text.textContent = `Current number: ${this.number}`;
        }
      } catch (error) {
        console.error("Error incrementing number:", error);
      }
    });

    shadow.append(style, wrapper);
    wrapper.appendChild(text);
    wrapper.appendChild(colorButton);
    wrapper.appendChild(incrementButton);
  }

  private toggleColor(text: HTMLElement): void {
    this.isBlue = !this.isBlue;
    text.style.color = this.isBlue ? "blue" : "red";
  }
}

customElements.define("test-component", TestComponent);

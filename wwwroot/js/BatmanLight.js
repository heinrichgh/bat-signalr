"use strict";

let BatmanLight = {

    Element: undefined,

    Width: 0,
    Height: 0,

    Shining: true,
    Position : {
        x: 0,
        y: 0
    },

    Velocity: {
      x: 0,
      y: 0
    },

    Init : function() {
        this.Element = document.getElementById("batmanLight");
        this.Width = this.Element.offsetWidth;
        this.Height = this.Element.offsetHeight;
    },

    Update: function(step) {
        this.Position.x += this.Velocity.x * step;
        this.Position.y += this.Velocity.y * step;

        if (this.Position.x < 0) {
            this.Position.x = 0;
        }
        if (this.Position.y < 0) {
            this.Position.y = 0;
        }
        if (this.Position.x + this.Width > window.innerWidth) {
            this.Position.x = window.innerWidth - this.Width;
        }
        if (this.Position.y + this.Height > window.innerHeight) {
            this.Position.y = window.innerHeight - this.Height;
        }
    },

    Render: function() {
        if (this.Shining) {
            this.Element.style.display = "";
            this.Element.style.top = `${this.Position.y}px`;
            this.Element.style.left = `${this.Position.x}px`;

        } else {
            this.Element.style.display = "none";
        }
    }
};

BatmanLight.Init();

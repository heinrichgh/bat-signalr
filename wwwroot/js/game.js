"use strict";

let Game = {
    Start: function() {
        let last,
            dt = 0,
            step = 1/60;

        function frame(now) {
            if (!last) last = now;

            dt = Math.min((now - last) / 1000);

            while (dt > step) {
                dt = dt - step;
                Game.Update(step);
            }
            Game.Render();
            last = now;
            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
    },

    Update: function(step) {
        BatmanLight.Update(step);
    },

    Render: function() {
        BatmanLight.Render();
    }
};
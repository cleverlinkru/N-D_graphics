(function ($) {
    var canvasContainer = null;
    var canvas = null;
    var ctx = null;

    $(document).ready(() => {
        init();
        resize();
        render();

        window.addEventListener('resize', handleResize, false);
    });

    const init = () => {
        canvasContainer = $('.canvas-container')[0];
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext("2d");
    };

    const resize = () => {
        canvas.width = canvasContainer.offsetWidth;
        canvas.height = canvasContainer.offsetHeight;
    };

    const handleResize = () => {
        resize();
        render();
    };

    const render = () => {
        drawPoly([
            {x: 50, y: 50},
            {x: 80, y: 75},
            {x: 60, y: 100},
            {x: 40, y: 95},
        ], '#00ff00');
        drawPoly([
            {x: 50, y: 50},
            {x: 80, y: 20},
            {x: 80, y: 75},
        ], '#ff0000');
    };

    const drawPoly = (points, color) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        var first = true;
        points.forEach((point) => {
            if (first) {
                ctx.moveTo(point.x, point.y);
                first = false;
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
})(jQuery);
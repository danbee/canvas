drawMandelbrot = function(e) {

  max_i = 100;

  for (m = 0; m <= 1279; m++) {
    for (n = 0; n <= 1279; n++) {
      x0 = (n - 639) / 320;
      y0 = (m - 639) / 320;

      i = 0;
      x = 0;
      y = 0;

      while (x * x + y * y < 2 * 2 && i < max_i) {
        xtemp = x * x - y * y + x0
        y = 2 * x * y + y0

        x = xtemp

        i++
      }

      if (i == max_i) {
        i = 0
      }

      e.postMessage({x: n, y: m, i: i});
    }
  }
};

self.addEventListener('message', function(e) {
  drawMandelbrot(self);
});

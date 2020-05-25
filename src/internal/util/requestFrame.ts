export const RequestFrame = () => {
  let window = {
    requestAnimationFrame: (callback: any, element: any) => {},
    cancelAnimationFrame: (id: any) => {},
  }
  var lastTime = 0;

    window.requestAnimationFrame = function (callback: any, element: any) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    }

    window.cancelAnimationFrame = function (id: any) {
      clearTimeout(id);
    };

  return window;
};

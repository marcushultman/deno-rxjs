export const RequestFrame = () => {
  var lastTime = 0;
  let window = {
    requestAnimationFrame: (callback: any): number => {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    },

    cancelAnimationFrame: (id: any) => {
      clearTimeout(id);
    },
  };

  return window;
};

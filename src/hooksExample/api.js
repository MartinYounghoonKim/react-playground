export function fetchUser () {
  console.log("[Logs] Call fetchUser function");
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        name: "Martin",
        age: 20
      });
    }, 1000);
  });
}

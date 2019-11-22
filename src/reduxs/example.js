export function api () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(true)
    }, 1000);
  })
}

export function api1 () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("API1 호출 ");
      resolve(true)
    }, 3000);
  })
}

export function api2 () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("API2 호출 ");
      resolve(true)
    }, 2000);
  })
}
let promise = new Promise((resolve, reject) => {
  let suceess = true;
  if (suceess) {
    resolve("data successfully fetched");
  } else {
    reject("data failed");
  }
});
promise
  .then((response) => {
    console.log("suceess", response);
  })
  .catch((error) => {
    console.error("error", error);
  });

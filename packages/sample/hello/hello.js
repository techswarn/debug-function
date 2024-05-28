function main(event, context) {
  console.log(`---------EVENT----------`);
  console.log(event);
  console.log(`---------CONTEXT--------`);
  console.log(context);

  // try {
  //   fetch("https://go.techenv.dev/api/v1/") // api for the get request
  //     .then((response) => {
  //       response.json();
  //       console.log(response.json());
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       return { body: { success: true, data: data }, headers: { foo: "bar" } };
  //     });
  // } catch (err) {
  //   console.log(err);
  //   return { body: { success: false, data: err }, headers: { foo: "bar" } };
  // }

  return { body: "greeting" };
}

exports.main = main;

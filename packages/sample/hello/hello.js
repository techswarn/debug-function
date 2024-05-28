async function main(event, context) {
  console.log(`---------EVENT----------`);
  console.log(event);
  console.log(`---------CONTEXT--------`);
  console.log(context);
  fetch("https://go.techenv.dev/api/v1/") // api for the get request
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return { body: { success: true, data: data }, headers: { foo: "bar" } };
    });
}

exports.main = main;

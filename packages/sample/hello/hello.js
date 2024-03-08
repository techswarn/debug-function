async function main(event, context) {
  console.log(`---------EVENT----------`);
  console.log(event);
  console.log(`---------CONTEXT--------`);
  console.log(context);
  return { body: { success: true }, headers: { foo: "bar" } };
}

exports.main = main;

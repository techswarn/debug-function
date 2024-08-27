function main(event, context) {
  console.log(`---------EVENT----------`);
  console.log(event);
  console.log(`---------CONTEXT--------`);
  console.log(context);

  return {
    body: {
      "Event data": event,
      "Context data": context,
    },
  };
}

exports.main = main;

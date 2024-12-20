function main(event, context) {
    console.log("Context" + context)
    return {
      body: [{event: event}, {context: context}]
    }
}

function main(event, context) {
    return {
      body: [{event: event}, {context: context}]
    }
}

const logResult = (command: string, result?: string | undefined) => {
  result
    ? console.log(`Recieved: ${command}\n Result: ${result}`)
    : console.log(
        `Recieved: ${command}\n Result: ${command} completed successfully`
      );
};

export { logResult };

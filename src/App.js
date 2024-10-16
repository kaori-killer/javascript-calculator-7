class App {
  async run() {}

  add(numbers) {
    const initialValue = 0;
    
    return numbers.reduce((accumulator, number) => 
      accumulator + number, initialValue);
  }

  splitStringByDelimiter(inputString) {
    let currentToken = '';
    let TokenArray = [];
    const delimiters = [',', ':'];

    for(const element of inputString) {
      if(delimiters.includes(element)) {
        TokenArray.push(currentToken);
        currentToken = '';
      }
      else {
        currentToken += element;
      }
    }
   
    if(currentToken !== ''){
      TokenArray.push(currentToken);
    }

    return TokenArray;
  }

  checkCustomSplitStringByDelimiter(inputString) {
    return (inputString[0] === '/' && inputString[1] === '/' 
      && inputString[3] === '\\' && inputString[4] === 'n');
  }

  getStrippedString(inputString) {
    return inputString.slice(5,);
  }
}


export default App;


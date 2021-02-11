let myArr = [{
  myObj: {
    name: 'my object name'
  },
  myFunc: arg => {
    console.log(arg)
  }
}];

myArr[0].myFunc(myArr[0].myObj.name);
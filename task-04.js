const countTotalSalary = function(employees) {
    const array = Object.values(employees);
    // console.log(array);
    let total =0;
    for ( let elem of array) {
        total += elem;
    }
    return total
  };
  
  


  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400
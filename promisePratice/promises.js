/// Code promises from Jon

const getUser = id => {
    return new Promise((resolve, reject) => {
      let theData = {
        id : 10,
        name : "Jon"
      };
  
  
      setTimeout(() => {
  
        resolve(theData);
  
      }, 500);
  
    });
  }
  
  const getData = user => {
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        resolve(`${user.name} has awesome data`);
  
      }, 500);
  
    });
  }
  
  const displayAll = data => {
    console.log( data );
  }
  
  
  
  let user = getUser(10);
  
  user.then( userData => {
  
    return getData( userData ); // <=== this is a promise
  
  }).then( data => {
      console.log( data );
  });
  
  
  /* shortened
  
  
  getUser( 10 )
    .then( getData )
    .then( displayAll );
  
  
  check out npm    request-promise
  
  */



  
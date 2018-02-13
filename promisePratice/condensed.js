// abbreviated promise mapping from Jon

const animals = [
    {
      name : 'cat'
    },
    {
      name : 'dog'
    },
    {
      name : 'bird'
    }
  ];
  
  
  const getAnimal = id => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( animals[id] );
      }, 200 * ( id+1 ));
    });
  }
  
  
  Promise.all(
    [ 0,1,2 ]
      .map( id => getAnimal(id) )
  )
  .then( animals => {
    console.log(animals.map( a => a.name ));
  })
  
  /* getAnimal(1)
       .then( animal => {
         console.log( animal.name );
       });
  
  */
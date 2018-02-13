const player = {
    "health": {
        base: 100,
    "current": ()=> {
            this.base;
        },
    "damage": (value)=>{
            this.current -= value
        },
    "addHealth": (value)=>{
            this.current += value
        },
    "reset":()=>{
        this.current = health.base
    },
    "name":""
    }
}

const deck = {
    "cards": {},
    "current":{},
    "maximum":{}
}

const settings = {
    "modes":{
        "arcade":{
            "description":"",
            "functions":{}
        },
        "countdown":{
            "description":"",
            "functions":{}
        }
    },
    "difficulty":{
        "easy":{},
        "medium":{},
        "hard":{}
    }
}

const level = {
    "generate":"function",
    "current":{
        "number":"",
        "name":"",
        "startTime":"",
        "maxTime":""
    }
}

const score = {
    "current":"",
    "high":{
        "score":"",
        "date":"",
        "name":""
    }
}

const enemies = {
    "generate":"function",
    "current":{},
    "maximum":{}
}

const game = {
    "random": (max)=>{
     if(!max) max = 10;
     let randomNumber = Math.floor(Math.random() * max) + 1;
      console.log(randomNumber);
      return randomNumber;
    },

    "dice"
   }
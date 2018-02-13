let calculator = {
		sum: 0,
		add: function(value) {
      this.sum += value;
      console.log(value + " has been added to the total.");
    },
    clear: function() {
      this.sum = 0;
      console.log("Your total is now "+this.sum);
    }, 
    equals: function() {
      console.log(this.sum);
    }
}

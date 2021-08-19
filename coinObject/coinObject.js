const body = document.body
const main = document.createElement("div")
body.appendChild(main)


const coin = {
    state: 0,
    flip: function () {
      this.state = Math.floor(Math.random() * (1 - 0 + 1)) + 0
      return this.state
    },
  
    toString: function () {
      if (this.state === 0){
          return "Heads"
      }
      if (this.state === 1){
        return "Tails"
    }
    },
  
    toHTML: function () {
        const image = document.createElement("img");
        if(this.state === 0){
        image.src = "./img/heads.jpg"
        image.alt = "Heads"
        }
        if(this.state === 1){
        image.src = "./img/Tail.jpg"
        image.alt = "Tail"
        }
      return image;
    },
  };

  function display20Flips() {
    const results = [];

        for(let i =0; i<=20;i++){
            coin.flip()
            results.push(coin.toString())
        }
    
    main.append(results) 
   return results
  }
  
  function display20Images() {
    const results = [];
    for(let i =0; i<=20;i++){
        coin.flip()
        results.push(coin.toHTML())
    }
    for(let i = 0; i<results.length; i++){
      main.append(results[i])
    }
    return results
  }
  
  display20Flips()
  display20Images()
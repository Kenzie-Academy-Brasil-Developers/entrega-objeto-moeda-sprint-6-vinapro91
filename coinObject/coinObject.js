const body = document.body
const main = document.createElement("div")
body.appendChild(main)


const coin = {
    state: 0,
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      this.state = Math.floor(Math.random() * (1 - 0 + 1)) + 0
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      return this.state
    },
  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      if (this.state === 0){
          return "Heads"
      }
      // Se o valor de "state" for 1, retorne "Tails"
      if (this.state === 1){
        return "Tails"
    }
    },
  
    toHTML: function () {
        const image = document.createElement("img");
        // Colocar uma imagem correspondente a essa valor.
        if(this.state === 0){
        image.src = "./img/heads.jpg"
        image.alt = "Heads"
        }
        if(this.state === 1){
        image.src = "./img/Tail.jpg"
        image.alt = "Tail"
        }
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
      main.appendChild(image)
      return image;
    },
  };

  function display20Flips() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
        for(let i =0; i<=20;i++){
            coin.flip()
            results.push(coin.toString())
        }
    
    main.textContent = results
    
   return results
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  function display20Images() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    for(let i =0; i<=20;i++){
        coin.flip()
        results.push(coin.toHTML())
    }
    return results
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  display20Flips()
  display20Images()
AFRAME.registerComponent("rotate-model", {
    schema: {
      counter: { type: "number", default: 0 },
    },
    update: function () {

      int = this.el.getAttribute("rotation")
      window.addEventListener("click", (e) => {   
  
        this.data.counter = this.data.counter + 1;
        if(this.data.counter === 1){
            const rotation = {x:0,y:25,z:0};
            this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 2){
            const rotation = {x:0,y:50,z:0}
            this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 3){
          const rotation = {x:0,y:75,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 4){
          const rotation = {x:0,y:100,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 5){
          const rotation = {x:0,y:125,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 6){
          const rotation = {x:0,y:150,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 7){
          const rotation = {x:0,y:175,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 8){
          const rotation = {x:0,y:200,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 9){
          const rotation = {x:0,y:225,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 10){
          const rotation = {x:0,y:250,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 11){
          const rotation = {x:0,y:275,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 12){
          const rotation = {x:0,y:275,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 13){
          const rotation = {x:0,y:300,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 14){
          const rotation = {x:0,y:330,z:0}
          this.el.setAttribute('rotation',rotation)
        }else if(this.data.counter === 15){
          const rotation = {x:0,y:360,z:0}
          this.el.setAttribute('rotation',rotation)
        }
        if(this.data.counter === 15){
          this.data.counter = 0
          this.el.setAttribute("rotation",int)
        }
      });
    }
  });
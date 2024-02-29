class Uber{
    constructor(vehicle, km, time){
        this.vehicle = vehicle;
        this.km = km;
        this.time = time;
        
        }

    cost(){
        if(this.vehicle == "auto"){
            if(this.time>=8 && this.time<=10 && this.time>=16 && this.time<=20){
             this.perKm = 30;
            console.log("auto price",this.km * this.perKm);
            }
            else{
                this.perKm = 15;
                console.log("auto price",this.km * this.perKm);
            }
          
          
        }
        if(this.vehicle == "car")
        {
            if(this.time>=8 && this.time<=10 && this.time>=16 && this.time<=20){
                 this.perKm = 50;
                console.log("car price",this.km * this.perKm);
            }
            else{
                this.perKm = 25;
                console.log("car price",this.km * this.perKm);
            }
            
            
            
        }
        
    }
}

const uber1 = new Uber("auto", 4, 7)
uber1.cost();
const uber2 = new Uber("car", 10, 16);
uber2.cost();
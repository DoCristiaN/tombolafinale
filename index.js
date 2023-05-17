import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
     
        });
    });
  



let clients = []
let clientCount = 0;
let count=0;
let valore=0
let trovato=0;
let num = []
wss.on('connection', function connection(ws) {
  clients.push(ws);
  clientCount++;
  console.log(` client attualmente connessi: ${clientCount}`);
 
  
    
  
  ws.on('message', function incoming(message){
    const data = JSON.parse(message);
    switch(data.type){
      case "estrazione":
        {
          do{
            trovato=0;
            valore = Math.round(Math.random() * 90+1);
            
           if(num.includes(valore)){
               trovato++;
           }else{
               trovato=0;
               num.push(valore);
               
           }
           
       }while(trovato!=0);
       count++;
      console.log(`numero estratto: ${valore}`);
      clients.forEach((j)=>{
        j.send(JSON.stringify({type:"numeroestratto", numero: valore, contatore: count, array: num}))
      })
     
      break;
      }
      
    }

  });

  ws.on('close', function() {
    //clients.delete(ws);
    clientCount--;
    console.log(`client attualmente connessi: ${clientCount}\n partita terminata, ne inizierà subito un altra`);
    if (clientCount < 1) {
    ws.close(1000, "Fermata l'estrazione dei numeri, i client connessi deve essere almeno 1 ")
    }
  });
});

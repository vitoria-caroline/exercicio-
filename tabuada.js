function tabuada(n)
{
    var tabuada = 0
    i=0;
    
    while(i <= 10){
    tabuada = n * i;
    let text = n + " x " + i + " = " + tabuada;
    console.log(text);
    i++;
   
}
  
}
    
console.log(tabuada(5));

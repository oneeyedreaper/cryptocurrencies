const obj=new Cryptoshit();
const opts= document.getElementById('cryptocurrency');
 class UI{
    constructor(){
        this.init();
        
    }
    init(){
        this.printop();
    } 
    printop(){
        obj.fetchshit()
        .then(poop=>poop.data)
        .then(oof=>{oof.forEach(sheesh=>{
            const op=document.createElement('option');
            op.setAttribute('value',`${sheesh.id}`)
            op.textContent=`${sheesh.name}`
            opts.appendChild(op);
            console.log(sheesh.id)
        })
        })
}

printmessage(text,material){
    const message=document.createElement('div')
    message.className=material;
    message.textContent=text;
    const printarea=document.querySelector('.messages')
    printarea.appendChild(message)
    setTimeout(()=>printarea.innerHTML='',3000)
}

displayres(cryname,amt,currname){
    let template='';
    template+= `
    <div class="card cyan darken-3">
        <div class="card-content white-text">
            <span class="Card-title" >RESULT</span>
                <p>The Price of ${cryname} in ${currname} is ${amt}</p>
                
         </div>
    </div>
    `;
    document.querySelector('#result').innerHTML=template;
}
}

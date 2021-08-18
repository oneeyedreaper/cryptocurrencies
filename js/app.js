const oof=new Cryptoshit();
 const shitUI= new UI();

// godforsaken variables
const form=document.getElementById('form')



// ratshit eventListeners

events();
function events(){
    form.addEventListener('submit',e=>{
        e.preventDefault();
        // get values from select tag
        const crypto=document.getElementById('cryptocurrency').value
        const curr=document.getElementById('currency').value

        if(crypto===''|| curr===''){
            shitUI.printmessage('get shit on','deep-orange darken-4 card-panel');

        }
        else {
            oof.patalagao(crypto,curr)
            .then(data=>data.data)
            .then(quote=>{
                shitUI.displayres(quote.name,quote.quote[curr].price,curr)
                
            })
           
        }
    } )
}
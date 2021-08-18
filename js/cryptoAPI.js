class Cryptoshit{
    apikey='your api key bois';
    async fetchshit(){
         const poop = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+this.apikey+'&sort=cmc_rank&limit=20')
         const poopy=await poop.json();
            return poopy;
    }
    async patalagao(cryptocurrency,currency){
       const shit= await fetch('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY='+this.apikey+'&amount=1&id='+cryptocurrency+'&convert='+currency)
        const quote=await shit.json();
        return quote;

    }
    
      
} 

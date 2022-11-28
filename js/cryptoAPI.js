class Cryptoshit {
	apikey = "1d0728b5-1d5a-4b15-91a4-b38a218b1b46";
	async fetchshit() {
		const poop = await fetch(
			"https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
				this.apikey +
				"&sort=cmc_rank&limit=20"
		);
		const poopy = await poop.json();
		return poopy;
	}
	async patalagao(cryptocurrency, currency) {
		const shit = await fetch(
			"https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY=" +
				this.apikey +
				"&amount=1&id=" +
				cryptocurrency +
				"&convert=" +
				currency
		);
		const quote = await shit.json();
		return quote;
	}
}

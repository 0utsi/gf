export interface Offer {
	id: string;
	name: string;
	description: string;
	location: { city: string; province: string };
	min_price: number;
	max_price: number;
	min_age: number;
	max_age: number;
	company_name: string;
	image: string;
}
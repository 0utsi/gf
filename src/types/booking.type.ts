

export interface Booking {
	id: string;
	created_at: string;
	product_id: string;
	participants: unknown[];
	total_price: number;
	original_total_price: number;
	payment_due_date: string;
	trip_name: string;
	type_label: string;
	status_label: string;
	payment_status: string;
	product_data: ProductData;
}


interface ProductData {
	description: string
}
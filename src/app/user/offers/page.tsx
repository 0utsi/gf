import products from "../../../data/response_products.json";
import { Offer } from "../../../types/offer.type";
import OfferCard from "./components/offer-card";
import { Box, Stack, Typography } from "@mui/material";

export default function Page() {
	return (
		<Stack>
			<Typography variant="h5" className="text-blue-900 text-xl">
				Dedykowane oferty
			</Typography>
			<Box
				sx={{
					p: 1,
					display: "grid",
					gap: 2,
					gridTemplateColumns: {
						xs: "1fr",
						sm: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
					},
				}}
			>
				{products.map((product) => (
					<OfferCard key={product.id} offer={product as unknown as Offer} />
				))}
			</Box>
		</Stack>
	);
}

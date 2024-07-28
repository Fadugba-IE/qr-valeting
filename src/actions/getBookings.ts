export function getBookings(accessToken: string) {
	return fetch(
		`https://valevaleting-32358f4be8bc.herokuapp.com/api/v1/admin/view-bookings?q=firstName~w&page=1&size=10`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	).then((response) => {
		if (!response) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	});
}

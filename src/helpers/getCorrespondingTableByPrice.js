export default function getCorrespondingTableByPrice(alltables, price) {
	for (let key in alltables) {
		if (alltables[key].price === price) {
			const tableID = alltables[key].uid;
			console.log('Log getCorrespondingTableByPrice tableID ::: ', tableID)
			return tableID
		}
	}
	return false;
}
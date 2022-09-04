export const data = {
    gameState: {
        users: {
            user1ID: {
                uid: "",
                email: "",
                firstName: "",
                lastName: "",
                coins: 1000,
                victory: 0,
                defeat: 0,
                imageURL: "",
                isOnline: false,
                playingNow: false,
                lastVisit: "",
                friends: {
                    friendID: {
						uid: "",
                        displayName: "",
                        lastVisit: "",
                        isOnline: "",
                        invitations: [
							{
								price: "",
								bottomLine: "",
								invitationTime: "",
							}
						],
                    },
                },
            },
        },
        prices: [
	// this part of data is already modified and included in database
            { name: "Name", price: "10", color: "#bff64a" },
            { name: "Name", price: "25", color: "#b3f428" },
            { name: "Name", price: "50", color: "#a5ee0b" },
            { name: "Name", price: "100", color: "#aef76d" },
            { name: "Name", price: "250", color: "#9bf54c" },
            { name: "Name", price: "1K", color: "#88f32a" },
            { name: "Name", price: "5K", color: "#75ed0c" },
            { name: "Name", price: "10K", color: "#73f1de" },
            { name: "Name", price: "25K", color: "#52eed6" },
            { name: "Name", price: "50K", color: "#31ebcf" },
            { name: "Name", price: "100K", color: "#15e4c4" },
            { name: "Name", price: "250K", color: "#fae847" },
            { name: "Name", price: "500K", color: "#f9e324" },
            { name: "Name", price: "1M", color: "#f3db06" },
        ],
        boards: {
            board1ID: {
                board: [
                    {
                        id: "0",
                        value: "",
                    },
                    {
                        id: "1",
                        value: "",
                    },
                    {
                        id: "2",
                        value: "",
                    },
                    {
                        id: "3",
                        value: "",
                    },
                    {
                        id: "4",
                        value: "",
                    },
                    {
                        id: "5",
                        value: "",
                    },
                    {
                        id: "6",
                        value: "",
                    },
                    {
                        id: "7",
                        value: "",
                    },
                    {
                        id: "8",
                        value: "",
                    },
                ],
                player1: {
                    nick: "",
                    uid: "",
                    cells: "",
                    disconnected: false,
                    playAgain: false,
                },
                player2: {
                    nick: "",
                    uid: "",
                    cells: "",
                    disconnected: false,
                    playAgain: false,
                },
                started: false,
                turn: "",
                score: {
                    player1: 0,
                    player2: 0,
                    draw: 0,
                },
                winner: "",
                uid: "",
                isPrivate: false,
                price: "",
                historyLastPage: "",
                bottomLine: 5,
            },
        },
    },
};

const MarketPlaceAlert = ({ alertProps }) => {
    const { display, success, playerName, owner } = alertProps;

    if (!display) {
        return null;
    }

    return (
        <>
            {success ? (
                <div className="mt-2" role="alert" key="success">
                    <div className="bg-green-500 text-white font-bold rounded-t px-2 py-1 mx-2">
                        Success
                    </div>
                    <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-2 text-green-700 mx-2">
                        <p>Vous avez acheté la carte. ({playerName})</p>
                    </div>
                </div>
            ) : (
                <div className="mt-2" role="alert" key="failed">
                    <div className="bg-red-500 text-white font-bold rounded-t px-2 py-1 mx-2">
                        Failed
                    </div>
                    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700 mx-2">
                        <p>Vous n'avez pas pu acheter la carte. ({playerName}: {owner})</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default MarketPlaceAlert;

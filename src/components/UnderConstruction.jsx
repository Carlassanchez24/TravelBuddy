const UnderConstruction = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-backgroundGray">
            <img
                src="/images/construction2.png"
                alt="Under Construction"
                className="w-[200px] h-[200px] mb-4"
            />
            <h1 className="mb-2 text-3xl font-bold text-primaryBlue">Page Under Construction</h1>
            <p className="text-sm text-accentBlack">We are working hard to bring you this page soon. Please check back later!</p>
        </div>
    );
};

export default UnderConstruction;

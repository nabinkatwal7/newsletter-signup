import {useNavigate, useLocation} from "react-router-dom";

function Success() {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="h-screen flex justify-center content-center items-center bg-gray-700">
            <div className="flex flex-col gap-4 justify-evenly lg:justify-center bg-white rounded-xl p-8 w-screen h-screen lg:w-[30%] lg:h-[50%]">
                <div className={"flex flex-col gap-4"} >
                    <img src={"/assets/images/icon-success.svg"} className={"w-[50px]"}/>
                    <p className={"text-5xl font-bold"}>Thanks for subscribing!</p>
                    <p>A confirmation email has been sent to <span
                        className={"font-bold"}>{location?.state?.email}</span>. Please open it and click the button
                        inside to confirm
                        your subscription.</p>
                </div>

                <button onClick={(e) => handleClick(e)}
                        className="bg-black text-white rounded-xl p-4 hover:bg-[#FF6347] transition duration-300 ease-in outline-none">Dismiss
                    message
                </button>

            </div>
        </div>
    );
}

export default Success;

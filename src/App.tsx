import "./App.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function App() {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();
    const routeChange = (email: string) => {
        const path = `/success`;
        navigate(path, {state: {email}});
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //validate email
        if(email === "") {
            setError("Please enter an email");
            return;
        }
        if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setError("Please enter a valid email");
            return;
        }

        routeChange(email)
    }
  return (
    <div className="h-screen flex justify-center content-center items-center bg-gray-700" >
      <div className="flex flex-col-reverse lg:flex-row justify-between bg-white rounded-xl p-8 lg:w-[50%] lg:h-[70%]" >
        <div className={"flex flex-col gap-4 justify-center"}>
            <p className={"text-6xl font-bold"} >Stay Updated!</p>
            <p className={"text-base"} >Join 60,000+ product managers receiving monthly updates on: </p>
            <ul>
                <li>
                    <div className={"flex flex-row items-center gap-4"}>
                        <img src="/assets/images/icon-list.svg" alt={"tick"}/>
                        <p>Product discovery and building what matters.</p>
                    </div>
                </li>
                <li>
                    <div className={"flex flex-row items-center gap-4"}>
                        <img src="/assets/images/icon-list.svg" alt={"tick"}/>
                        <p>Measuring to ensure updates are a success.</p>
                    </div>
                </li>
                <li>
                    <div className={"flex flex-row items-center gap-4"}>
                        <img src="/assets/images/icon-list.svg" alt={"tick"}/>
                        <p>And much more!</p>
                    </div>
                </li>
            </ul>
            <div className={"flex flex-col gap-4 w-full"} >
                <div className={"flex flex-col w-full"} >
                    <label>Email Address</label>
                    <p className={"text-center text-red-500"} >{error}</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address"
                           className="border-2 outline-none rounded-xl p-4 "/>
                </div>
                <button onClick={(e) => handleClick(e)} className="bg-black text-white rounded-xl p-4 hover:bg-[#FF6347] transition duration-300 ease-in outline-none">Subscribe to monthly newsletter!</button>
            </div>
        </div>
          <div>
              <img src="/assets/images/illustration-sign-up-desktop.svg" alt={"illustration"}/>
          </div>
      </div>
    </div>
  );
}

export default App;

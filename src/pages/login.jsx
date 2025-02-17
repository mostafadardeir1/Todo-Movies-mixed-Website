import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../utils/firebase";
import { UserContext } from "../utils/user_context";
import { useNavigate } from "react-router-dom";
import { StringManager } from "../utils/stringmanager";
import { LangContext } from "../utils/lang_context";

export default function LogIn() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { lang } = useContext(LangContext);
	const { setid } = useContext(UserContext);
	const navigate = useNavigate();
	console.log(auth.currentUser)
	// auth.currentUser.displayName = 'mostafa'


	async function login(e) {
		e.preventDefault();
		let userdata = await signInWithEmailAndPassword(auth, email, password);
		setid(userdata.user.uid);
		navigate("/");
	}

	return (
		<form dir={lang == "en" ? "ltr" : "rtl"}>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">

					</h2>
				</div>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<div>
						<label className="block text-sm font-medium leading-6 text-gray-900">
							{lang == 'en' ? StringManager.email.en : StringManager.email.ar}
						</label>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="email"
							className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label className="block text-sm font-medium leading-6 text-gray-900">
								{lang == 'en' ? StringManager.pass.en : StringManager.pass.ar}
							</label>
						</div>
						<div className="mt-2">
							<input
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								type="password"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<button
							onClick={(e) => { login(e); }}
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							{lang == 'en' ? StringManager.login.en : StringManager.login.ar}
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}

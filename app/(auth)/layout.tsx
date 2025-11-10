import { ReactNode } from "react";
const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='flex justify-center items-center w-full h-screen'>
			{children}
		</main>
	)
}

export default AuthLayout
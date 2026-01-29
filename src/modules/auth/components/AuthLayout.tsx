import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <>
            <div>This is the auth layout</div>
            <div className="flex"><Outlet /></div>
        </>
    )
}
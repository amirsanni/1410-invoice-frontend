import { Outlet } from "react-router";

export default function DashboardLayout() {
    return (
        <>
            <div>This is the dashboard layout</div>
            <div className="flex"><Outlet /></div>
        </>
    )
}
"use client";
import { useSelector } from "react-redux";
import { selectUser } from "@/app/stores/user-store";

export function ProfileBar() {
    const user = useSelector(selectUser);

    return (
        <div>
            Active user: <b>{user.name || "Guest"}</b>
        </div>
    );
}

import dbConnect from "@/lib/database"
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        console.log("ENDPOINT HAS BEEN HIT!")
        const {email_addresses, first_name, last_name, profile_image_url} = await request.json()
        const user = await User.create({email_addresses, first_name, last_name, profile_image_url})
        return new NextResponse(user, {status: 201});
    } catch (error) {
        console.log(error)
        return new NextResponse("Error creating User.", {status: 400});
    }
}
export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        console.log("SUCCESS")
        return new NextResponse("Success", {status: 201});
    } catch (error) {
        console.log(error)
        return new NextResponse("Error creating User.", {status: 400});
    }
}
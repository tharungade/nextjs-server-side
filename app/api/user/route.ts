import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export async function GET() {
    const user = await client.user.findFirst({});
    return NextResponse.json({ name: user?.username, email: user?.username })
}

export async function POST(req: NextRequest) {
    let body = await req.json()

    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    return NextResponse.json({"status": "signed up successfully"})
}
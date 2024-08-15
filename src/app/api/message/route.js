import { connectionStr } from "@/app/lib/db";
import { messageSchema } from "@/app/lib/messagesModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET()
{
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const data = await messageSchema.find();
    console.log(data);
    return NextResponse.json({result:true});
}

export async function POST(request)
{
    let payload = await request.json();
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const message = new messageSchema(payload);
    const result = await message.save();
    return NextResponse.json({result,success:true});
}
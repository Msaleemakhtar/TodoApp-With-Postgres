
import { NextRequest, NextResponse } from "next/server";
import { db, todoTable } from "@/lib/drizzle";
import { sql } from "@vercel/postgres"


export async function GET (request:NextRequest) {
try{
    await sql`CREATE TABLE IF NOT EXISTS todos(id serial , Task varchar(255))`
    const res = await db.select().from(todoTable);
    return NextResponse.json({data:res});
}catch(err){
    console.log((err as {message:string}).message)
        return NextResponse.json({message: "Something went wrong"});
    
}
    
}


export async function POST(request:NextRequest) {
    const req = await request.json()
    try{
        if(req.task){
            const res = await db.insert(todoTable).values({
                task : req.task,
            }).returning()
            return NextResponse.json({message: "Data added succesfully", data:res});
        } else {
            throw new Error("Enter the task")
        }

    }catch(err){
        return NextResponse.json({message: (err as {message:string}).message})
        
    }
}
import {NextResponse} from 'next/server';
export async function POST(){return NextResponse.json({message:'Shop accounts are created by Main Admin. Shop owners sign in with their registered email and password; the assigned shop opens automatically.'},{status:403,headers:{'Cache-Control':'no-store'}});}

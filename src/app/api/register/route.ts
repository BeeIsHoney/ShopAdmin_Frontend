import {NextResponse} from 'next/server';
export async function POST(){return NextResponse.json({message:'Shop accounts are created by Main Admin. Shop owners sign in using the shop code assigned by Main Admin.'},{status:403,headers:{'Cache-Control':'no-store'}});}

import { getServerSession } from "next-auth/next";
import { NextAuthOptions,User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { SessionInterface } from "@/common.types";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: "PLACE-HERE-ANY-STRING",

    // jwt: {
    //     encode:({secret,token})=>{

    //     },
    //     decode: async({secret,token})=>{

    //     }
    // },
    theme:{
        colorScheme:"light",
        logo:"/logo.png"
    },
    callbacks:{
        async session({session}){
            return session

        },
        async signIn({user}:{user: AdapterUser | User}){
            try{
                //see if the user is in the database
                //if not, create a new user
                return true
            }catch(error:any){
                console.log(error)
                return false
            }
        }
    }

}

export async function getUserDetails(){
    const session = await getServerSession() as SessionInterface;
    return session;
}
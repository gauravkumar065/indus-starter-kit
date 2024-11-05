"use server"
import prisma from "@/lib/prisma";
import { userCreateProps } from "@/utils/types/user";

export const userCreate = async ({
    email,
    first_name,
    last_name,
    profile_image_url,
    user_id,
}: userCreateProps) => {
    try {
        const user = await prisma.user.create({
            data: {
                email,
                firstName: first_name,
                lastName: last_name,
                profileImageUrl: profile_image_url,
                userId: user_id,
            },
        });

        console.log("Created user:", user);
        return user;
    } catch (error: any) {
        console.error("Error creating user:", error);
        throw new Error(error.message);
    }
};
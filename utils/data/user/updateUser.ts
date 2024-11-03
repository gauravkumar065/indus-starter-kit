"use server"
import prisma from "@/lib/prisma";
import { userUpdateProps } from "@/utils/types/user";

export const userUpdate = async ({
    email,
    first_name,
    last_name,
    profile_image_url,
    user_id,
}: userUpdateProps) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                first_name,
                last_name,
                profile_image_url,
                user_id,
            },
        });

        return updatedUser;
    } catch (error: any) {
        console.error("Error updating user:", error);
        throw new Error(error.message);
    }
};
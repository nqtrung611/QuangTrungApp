// 'use server'
// import prisma from "@/utils/db";
// import { revalidatePath } from "next/cache";

// export const createTask = async (formData: any) => {
//     const content = formData.get("content");
//     if (content.trim() === '') {
//         // formData.reset();
//         console.log(formData);
//         return;
//     }
//     await prisma.task.create({
//         data: {
//             content,
//         },
//     });

//     revalidatePath('/todo');
// };

// export const getAllTasks = async () => {
//     return await prisma.task.findMany({
//         orderBy: {
//             createdAt: "desc", //asc-desc
//         },
//     });
// }

// export const deleteTask = async (formData: any) => {
//     const id = formData.get("id");
//     await prisma.task.delete({
//         where: { id },
//     });

//     revalidatePath('/todo');
// };

// // export const getTask = async (id: any) => {
// //     return prisma.task.findUnique({
// //         where: {
// //             id,
// //         },
// //     });
// // };

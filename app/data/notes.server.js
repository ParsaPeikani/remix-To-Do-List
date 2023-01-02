import { prisma } from "./database.server";

export async function addNote(noteData) {
  try {
    return await prisma.note.create({
      data: {
        title: noteData.title,
        content: noteData.content,
        Duedate: new Date(noteData.date),
      },
    });
  } catch (error) {
    throw error;
  }
}

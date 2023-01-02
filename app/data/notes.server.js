import { prisma } from "./database.server";

export async function addNote(noteData) {
  try {
    return await prisma.note.create({
      data: {
        title: noteData.title,
        content: noteData.content,
        Duedate: new Date(noteData.Duedate).toISOString().slice(0, 10),
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function getNotes() {
  try {
    const notes = await prisma.note.findMany({
      orderBy: { Duedate: "desc" },
    });
    return notes;
  } catch (error) {
    throw error;
  }
}

export async function getNote(id) {
  try {
    const note = await prisma.note.findFirst({ where: { id } });
    return note;
  } catch (error) {
    throw new Error("Failed to get your Note.");
  }
}

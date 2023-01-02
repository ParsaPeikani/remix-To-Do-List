import { prisma } from "./database.server";

export async function addNote(noteData) {
  try {
    return await prisma.note.create({
      data: {
        title: noteData.title,
        content: noteData.content,
        Duedate: new Date(noteData.date).toISOString(),
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function getNotes() {
  try {
    const notes = await prisma.note.findMany({
      orderBy: { Duedate: "asc" },
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

export async function updateNote(id, noteData) {
  try {
    await prisma.note.update({
      where: { id },
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

export async function deleteNote(id) {
  try {
    await prisma.note.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error("Failed to delete note.");
  }
}

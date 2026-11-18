// "A note for the next guest" (phase 3).
// For now nothing is stored and there are no notes yet.
// Later: replace these two functions with calls to a small serverless
// endpoint that stores notes and only returns ones I have approved.

export const NOTE_MAX_LENGTH = 140

// Returns an approved note, or null when there is none yet.
export async function getNoteForGuest(): Promise<string | null> {
  return null
}

export async function leaveNote(note: string): Promise<void> {
  const trimmed = note.trim().slice(0, NOTE_MAX_LENGTH)
  if (!trimmed) return
  // Not stored yet. Phase 3 sends this to a moderation queue.
}

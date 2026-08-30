import { put } from '@vercel/blob'

// Dauerhafte Ablage von Anfragen im Vercel-Blob-Store, unabhängig vom
// Mailversand. Das lokale data/*.json funktioniert auf Vercel nicht
// (read-only Filesystem) – Blob ist dort der persistente Kanal.
export async function saveRecordToBlob(
  kind: 'website-check-leads' | 'contacts',
  record: { id: string; date?: string }
): Promise<boolean> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return false
  try {
    const day = (record.date ?? new Date().toISOString()).slice(0, 10)
    await put(`${kind}/${day}-${record.id}.json`, JSON.stringify(record, null, 2), {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
    })
    return true
  } catch (error) {
    console.error(`Error saving ${kind} record to blob:`, error)
    return false
  }
}

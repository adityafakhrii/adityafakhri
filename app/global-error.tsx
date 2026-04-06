"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ display: 'flex', height: '100vh', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
          <h2>Terjadi Kesalahan Kritis</h2>
          <p>Sistem mengalami kegagalan saat memuat aplikasi.</p>
          <button 
            onClick={() => reset()}
            style={{ marginTop: '16px', padding: '10px 20px', backgroundColor: '#000', color: '#fff', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
          >
            Muat Ulang
          </button>
        </div>
      </body>
    </html>
  )
}

import { ImageResponse } from 'next/og'

export const alt = 'Mirai Tsuda — Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background: 'linear-gradient(135deg, #101020 0%, #25204d 65%, #113849 100%)',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', fontSize: 25, letterSpacing: 6, color: '#bcb0ff', marginBottom: 32 }}>
          PORTFOLIO
        </div>
        <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>
          Mirai Tsuda
        </div>
        <div style={{ display: 'flex', fontSize: 32, color: '#d1d5e9', marginTop: 30 }}>
          VR / AR · Game · UI / UX · 3DCG · Motion
        </div>
      </div>
    ),
    size,
  )
}

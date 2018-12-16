import React from 'react'

export default function Todo({ todo: { id, text, done } }) {
  return (
    <div
      style={{
        cursor: 'pointer',
        textDecoration: done ? 'line-through' : undefined,
      }}
    >
      {text}
    </div>
  )
}

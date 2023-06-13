import React from 'react'

export default function validation(values) {
  let errors = {}
  const email_pattern = /^[^\s@] + @[^\s@] + \.[^\s@] + $/
  const password_pattern = /^(?=.*\d)(?=.*[A-Z])(a-zA-Z0-9){8,}$/
}

import React from 'react'

function Button(
    children,
    type="button",
    bgColor="bg-blue-500",
    tectColor="text-white",
    className="",
    ...props
) {
  return (
    <button className={`px-4 py-2 rounded-lg  ${bgColor} ${tectColor} ${className} {...props}`}>{children}</button>
  )
}


export default Button

'use client'

import { Button,ComboButton,MenuItem } from "@carbon/react"
import { useState } from "react"

export default function Counter() {
    const [value, setValue] = useState(0)

    return <div>
        <h1>Value: {value}</h1>
        <Button onClick={() => {
            setValue(value + 1)
        }}>+</Button>
        <ComboButton label="Primary action">
            <MenuItem label="Second action" />
            <MenuItem label="Third action" />
            <MenuItem label="Fourth action" />
        </ComboButton>
    </div>
}
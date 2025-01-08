import React, { useEffect, useState } from 'react'

export const UseMounted = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    },[])
 
    return mounted
}
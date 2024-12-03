"use client"
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import React from 'react'

function GeneratePage() {
    const param = useParams()
    const conversationId = param.conversationId
  return (
    <div>GeneratePage {conversationId} <Button >
        click me
        </Button></div>
  )
}

export default GeneratePage
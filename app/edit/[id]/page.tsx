import Form from '@/components/Form'
import React from 'react'

const Edit = ({params} : {params: {
  id: number
}}) => {
  return (
    <div>
        <Form id={params.id.toString()}/>
    </div>
  )
}

export default Edit
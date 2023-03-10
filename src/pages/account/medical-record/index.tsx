import Layout from '@/presentation/components/core/Layout'
import Main from '@/presentation/components/account/MedicalRecord/Main'
import React from 'react'
import AccountLayout from '@/presentation/components/account/AccountLayout'

function Index() {
  return (
    <Layout title='Expediente médico'>
      <AccountLayout title='Expediente médico' description='Todos los tratamientos y diagnosticos que se te asignen en la plataforma'>
        <Main/>
      </AccountLayout>
    </Layout>
  )
}

export default Index
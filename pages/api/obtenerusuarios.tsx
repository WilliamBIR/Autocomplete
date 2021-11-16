import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'



export default async function handle(req , res) {
  const {Otro}=req.body
  //console.log(Nombre+ " "+ Otro.queryKey[1])
  //console.log(Otro.queryKey[1])
  const prisma = new PrismaClient()
  const misDatos = await prisma.usuario.findMany({
      where:{
        Nombre:{
          contains:Otro.queryKey[1],
        },
      },
    })
    //console.log(misDatos)
    res.json({misDatos})
  }
  


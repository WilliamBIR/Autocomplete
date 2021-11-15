import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'



export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()
    const misDatos = await prisma.pelicula.findMany()
    res.json({misDatos})

  };

/*
findMany({
      where:{
        title:{
          contains:'a',
        },
      },
    })
*/
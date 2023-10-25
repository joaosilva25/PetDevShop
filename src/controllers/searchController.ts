import express, { Request, Response } from 'express'

const app = express()

export const search= (req: Request, res: Response)=> {
    res.send('Página dos Search')
}
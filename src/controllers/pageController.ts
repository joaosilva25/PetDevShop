import express, { Request, Response } from 'express'


const app = express()


export const catController = (req: Request, res: Response)=> {
    res.send("Ativado gatos no controller")
}

export const dogController = (req: Request, res: Response)=> { 
    res.send("Ativado cachorros no controller")
}

export const fishController = (req: Request, res: Response)=> {
    res.send("Ativado peixes no controller")
}
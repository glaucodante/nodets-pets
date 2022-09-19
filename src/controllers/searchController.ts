import { Request, Response } from "express";

import { pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";



export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    // não tem a busca então redireciona para a home
    if (!query) {
        res.redirect('/');
        return;
    }

    let list = pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
}
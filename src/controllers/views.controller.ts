import { Request, Response } from "express";
import { UtilView } from "../shared/util.view";
import { dataPages } from "../shared/data-pages";

export const render = async (req: Request, res: Response) => {
    try {
        const page = req.params.page;
        let dataPage = undefined;
        if (dataPages[page]) {
            dataPage = (await dataPages[page]());
        }
        res.render(`pages/${page}`, { hasData: dataPage ? dataPage.hasData : false, data: dataPage ? dataPage.data : undefined,  metadata: dataPage ? dataPage.metadata : undefined, utils: UtilView }, (err, html) => {
            if (err) {
                console.log(`Fail rendering pages/${page}:`, err.message);
                res.render('layouts/layout', {
                    content: `
                        <div class="text-center">
                            <div class="flex justify-center mb-4">
                                <img src="images/coding.gif" alt="Coding" class=" rounded-full border-4 border-yellow-500 w-2/4	">
                            </div>
                            <h1 class="text-5xl font-bold text-gray-800 mb-4">¡Estamos trabajando!</h1>
                            <p class="text-xl text-gray-600 mb-3">Esta página está en construcción. Pronto tendrás acceso a todo su contenido.</p>
                            <p class="font-bold text-xl text-yellow-500">${page}</p>
                        </div>`
                });
            } else {
                res.render('layouts/layout', {
                    content: html
                });
            }
        });
    } catch (error) {
        console.error('Unexpected error rendering:', error.message);
        res.status(500).send('Error rendering');
    }
};

export const renderLogin = async (req,res) => {
    try {
        res.render('pages/login', {} );
    } catch (error) {
        console.error('Error rendering:', error.message);
        res.status(500).send('Error rendering');
    }
}


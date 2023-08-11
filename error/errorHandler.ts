import { HTTP, mainError } from "./mainError";
import { Response } from "express";


const preparedError = (err: mainError, res:Response) => {
res.status(HTTP.BAD_REQUEST).json({
    name : err.name,
    message : err.message,
    status : err.status,
    success : err.success,
    stack : err.stack,
    err,
});
};


export const errorHandler =(
    err: mainError,
    res: Response
) => {
    preparedError(err,res)
};
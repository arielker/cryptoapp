import { DTO } from './../../models/user-symbol/dto';
import Joi from "joi";

export const addSymbolValidator = Joi.object<DTO>({
    symbol: Joi.string().length(3).uppercase().required()
})
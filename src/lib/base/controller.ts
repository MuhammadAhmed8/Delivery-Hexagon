import { Controller } from '@nestjs/common';
import { Response } from 'express';


@Controller()
export class BaseController {


    protected fail(err: any, res: Response): any {

        return res.status(err.code || 500).json({ status: false, 
            error: {
                statusCode: err.code || 500,
                error: err.message || 'Server Error' 
            },
            data: null 
        });

    }

    protected ok(data:any = {}, res: Response, code: number = 200): any{

        return res.status(code)
        .json({
            status: true,
            message: "success",
            data: data
        })
    }


}
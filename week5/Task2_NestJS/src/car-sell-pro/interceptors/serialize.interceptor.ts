import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";


export class SerializeInterceptor implements NestInterceptor{
    intercept(context:ExecutionContext,handler:CallHandler) : Observable<any> {
        
        console.log('before the handler',context);
           
        return handler.handle().pipe(
            map((data:any)=>{
                console.log('before res is send',data);
            }),
        )

    }
}
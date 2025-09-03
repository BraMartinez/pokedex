import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {


  transform(value: string, metadata: ArgumentMetadata) {
    
    if(!isValidObjectId(value)){
      throw new BadRequestException(`El parametro ${value} no es un Mongo ID`)
    }
    
    return value;
  }


}
